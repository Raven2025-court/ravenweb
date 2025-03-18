"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema } from "@/lib/zodSchemas";

const resend = new Resend(process.env.RESEND_API_KEY);

// Company settings
const COMPANY = {
  name: "Raven Padel Growth",
  email: "info@ravenpadelgrowth.com",
  website: "https://ravenpadelgrowth.com",
  logo: "https://ravenpadelgrowth.com/icon.png",
  verifiedSender: "noreply@ravenpadelgrowth.com",
  replyToEmail: "info@ravenpadelgrowth.com",
};

// Email templates
const createInternalEmailHTML = (data: EmailTemplateData) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
    <h2 style="color: #2e4156;">📩 New Contact Form Submission</h2>
    <p><strong>Timestamp:</strong> ${data.timestamp}</p>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
    <p><strong>Project Type:</strong> ${data.projectType}</p>
    <p><strong>Message:</strong></p>
    <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${
      data.message
    }</div>
    <hr style="margin: 20px 0;">
    <div style="text-align: center;">
      <a href="${data.websiteUrl}" target="_blank">
        <img src="${data.logoUrl}" alt="${
  data.companyName
} Logo" style="width: 150px; height: auto;" />
      </a>
      <p style="font-size: 12px; color: #888;">© ${new Date().getFullYear()} ${
  data.companyName
} | <a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
    </div>
  </div>
`;

const createConfirmationEmailHTML = (data: EmailTemplateData) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
    <h2 style="color: #2e4156;">Thank you for contacting ${
      data.companyName
    }!</h2>
    <p>Hi ${data.name},</p>
    <p>We've received your message and will get back to you shortly. A member of our team will review your inquiry about <strong>${
      data.projectType
    }</strong> and respond within 1-2 business days.</p>
    <h3>Your Submission:</h3>
    <p><strong>Project Type:</strong> ${data.projectType}</p>
    <p><strong>Message:</strong></p>
    <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${
      data.message
    }</div>
    <p>If you need to provide additional information, please reply directly to this email.</p>
    <hr style="margin: 20px 0;">
    <div style="text-align: center;">
      <a href="${data.websiteUrl}" target="_blank">
        <img src="${data.logoUrl}" alt="${
  data.companyName
} Logo" style="width: 150px; height: auto;" />
      </a>
      <p style="font-size: 12px; color: #888;">© ${new Date().getFullYear()} ${
  data.companyName
} | <a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
      <p style="font-size: 11px; color: #aaa;">This is an automated message. Please do not reply directly to this email.</p>
    </div>
  </div>
`;

// TypeScript interfaces for type safety
interface EmailTemplateData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  timestamp: string;
  companyName: string;
  logoUrl: string;
  websiteUrl: string;
}

/**
 * Sends emails based on contact form submission
 * @param values - Form values from the contact form
 * @returns Object with success message or error
 */
export async function sendEmail(values: z.infer<typeof contactFormSchema>) {
  // Validate form data
  const validatedFields = contactFormSchema.safeParse(values);
  if (!validatedFields.success) {
    console.error("Validation error:", validatedFields.error);
    return {
      error: "Invalid form data. Please check your information and try again.",
    };
  }

  const { message, name, email, projectType, phone } = validatedFields.data;

  // Get the current timestamp
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Prepare template data
  const templateData: EmailTemplateData = {
    name,
    email,
    phone: phone || "",
    projectType,
    message,
    timestamp,
    companyName: COMPANY.name,
    logoUrl: COMPANY.logo,
    websiteUrl: COMPANY.website,
  };

  try {
    // Send internal notification email
    const internalEmailResult = await resend.emails.send({
      from: `${COMPANY.name} Contact <${COMPANY.verifiedSender}>`,
      to: COMPANY.email,
      subject: `New Contact Form: ${projectType} - ${name}`,
      replyTo: email,
      html: createInternalEmailHTML(templateData),
      tags: [{ name: "source", value: "contact_form" }],
    });

    if (!internalEmailResult || internalEmailResult.error) {
      throw new Error(
        internalEmailResult?.error?.message || "Failed to send internal email"
      );
    }

    // Send confirmation email to user
    const confirmationEmailResult = await resend.emails.send({
      from: `${COMPANY.name} Contact <${COMPANY.verifiedSender}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      replyTo: COMPANY.replyToEmail,
      html: createConfirmationEmailHTML(templateData),
      tags: [{ name: "type", value: "auto_confirmation" }],
    });

    if (!confirmationEmailResult || confirmationEmailResult.error) {
      throw new Error(
        confirmationEmailResult?.error?.message ||
          "Failed to send confirmation email"
      );
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Error sending email:", error);

    // Return user-friendly error message
    return {
      success: false,
      error:
        "We couldn't send your message. Please try again or contact us directly.",
    };
  }
}
