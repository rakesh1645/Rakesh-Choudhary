import ActionButton from "../common/ActionButton";
import { BG1_TEXTURE, YOUTUBE_THUMBNAIL } from "@/constants/imageassets";

export default function YouTubeSection() {
  return (
    <div className="about-blog-box info-box shadow-box h-full p-6 flex flex-col justify-between relative group w-full overflow-hidden transition-all duration-500 hover:border-red-500/50 cursor-pointer">
      {/* Vibrant Red Gradient Overlay on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #dc2626 0%, #b91c1c 45%, #7f1d1d 100%)",
        }}
      />

      <img
        src={BG1_TEXTURE}
        alt=""
        className="bg-img absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
      />

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="overlay-link z-20 cursor-pointer"
        href="https://www.youtube.com/@codewithrc"
        aria-label="YouTube channel @codewithrc"
      />

      {/* YouTube channel image matching exact snippet */}
      <div className="w-full flex items-center justify-center my-2 relative z-10 pointer-events-none">
        <img
          alt="YouTube channel - @codewithrc"
          loading="lazy"
          width={200}
          height={126}
          src={YOUTUBE_THUMBNAIL}
          style={{ opacity: 1, width: "auto", height: "auto", maxWidth: "200px" }}
          className="group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
        />
      </div>

      {/* Info Footer */}
      <div className="flex items-center justify-between mt-4 z-10 pointer-events-none">
        <div className="infos">
          <h4 className="text-[11px] uppercase font-mono tracking-[0.2em] text-zinc-500 group-hover:text-red-100/90 transition-colors font-medium">
            MY HOBBY
          </h4>
          <h2 className="text-xl font-bold text-white/85 group-hover:text-white mt-0.5 transition-colors">
            YouTube
          </h2>
        </div>
        <ActionButton />
      </div>
    </div>
  );
}
