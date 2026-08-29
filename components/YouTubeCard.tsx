import ActionButton from "./ActionButton";

export default function YouTubeCard() {
  return (
    <div className="about-blog-box info-box shadow-box h-full p-6 flex flex-col justify-between relative group w-full overflow-hidden bg-gradient-to-b from-red-600 via-red-700 to-red-900 border-red-500/30 cursor-pointer">
      <a
        href="https://www.youtube.com/@codewithrc"
        target="_blank"
        rel="noopener noreferrer"
        className="overlay-link z-20 cursor-pointer"
        aria-label="Visit YouTube channel @codewithrc"
      />

      {/* Glitter / Shiny Red Play Badge in Center */}
      <div className="w-full h-36 flex items-center justify-center relative z-10 pointer-events-none my-2">
        <div className="w-36 h-24 rounded-3xl bg-gradient-to-br from-red-500 via-red-600 to-red-800 border-2 border-red-300/40 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
          <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-2 drop-shadow-md" />
        </div>
      </div>

      {/* Info Footer */}
      <div className="flex items-end justify-between mt-4 z-10 pointer-events-none">
        <div className="infos">
          <h4 className="text-[11px] uppercase font-mono tracking-[0.2em] text-red-100/80 font-medium">MY HOBBY</h4>
          <h2 className="text-xl font-bold text-white mt-0.5">YouTube</h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
