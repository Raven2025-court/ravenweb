export default async function sitemap() {
  const baseUrl = "https://ravenpadelgrowth.com";
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
  ];
}
