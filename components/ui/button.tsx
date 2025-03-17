interface FancyButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FancyButton = ({ text, onClick }: FancyButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={text}
      role="button"
      className="relative inline-block px-6 py-3 text-sm font-bold tracking-wide text-primary/90 border-2 border-primary/90 transition-all duration-300 ease-in-out hover:bg-primary/90 hover:text-secondary group sm:px-8 sm:py-4 sm:text-lg"
    >
      {/* Left Decoration Line */}
      <span className="absolute top-1/2 left-3 w-4 h-0.5 bg-primary/90 transition-all duration-300 ease-linear transform -translate-y-1/2 group-hover:w-1 group-hover:bg-secondary sm:left-6 sm:w-6 sm:group-hover:left-6 sm:group-hover:w-1"></span>

      {/* Button Text */}
      <span className="block pl-4 text-xs uppercase transition-all duration-300 ease-in-out group-hover:pl-3 sm:pl-8 sm:text-lg sm:group-hover:pl-6">
        {text}
      </span>

      {/* Top Key */}
      <span className="absolute top-[-2px] left-[6px] w-6 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-0 group-hover:left-[-2px] sm:left-[10px]"></span>

      {/* Bottom Keys */}
      <span className="absolute bottom-[-2px] right-[18px] w-6 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-0 group-hover:right-0 sm:right-[30px]"></span>
      <span className="absolute bottom-[-2px] right-[6px] w-2.5 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-0 group-hover:right-0 sm:right-[10px]"></span>
    </button>
  );
};
