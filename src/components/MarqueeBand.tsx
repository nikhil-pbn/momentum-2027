/** Continuously scrolling text band. Two copies of the text loop seamlessly; pauses on hover. */
export function MarqueeBand({ text }: { text: string }) {
  return (
    <div
      className="group overflow-hidden border-b border-line bg-[#F6F0FF] py-3.75 text-[#191E4A] sm:py-5.5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex-none text-lg leading-none font-light tracking-widest whitespace-nowrap uppercase sm:text-2xl nav:text-[clamp(29px,2.47vw,46px)]"
          >
            {text}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
