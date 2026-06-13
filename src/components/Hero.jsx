import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profileImg from "../assets/hero-img.png";

export default function Hero() {
  const { siteData, loading } = useContext(SiteContext);
  if (loading || !siteData) return null;
  const { greeting, title, description } = siteData.hero;

  // Metni parçalayan fonksiyon
  const parseDescription = (text) => {
    return text.split(/(\*.*?\*)/g).map((part, index) => {
      // Eğer parça *...* şeklindeyse pembe yap
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <span key={index} className="text-[#E92577]">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="relative w-full bg-[#F4F4F4] dark:bg-[#1A1A1A]">
      {/* YARIM ELİPS (Sağ tarafta) */}
      <div
        className="absolute bg-[#EA2678] -z-0 hidden xl:block"
        style={{
          width: "150px",
          height: "59px",
          bottom: "15%",
          right: "0",
          borderTopLeftRadius: "29.5px",
          borderBottomLeftRadius: "29.5px",
        }}
      ></div>

      <div className="py-12 md:py-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative">
        {/* Sol Sütun: Yazılar ve Linkler */}
        <div className="flex-[1.4] text-left">
          {/* Karşılama Yazısı */}
          <div className="text-xl text-black dark:text-white mb-4 flex items-center gap-1">
            {greeting} <span className="animate-bounce">👋</span>
          </div>

          {/* Başlık - highlighter-pink efekti */}
          <h1 className="relative text-4xl md:text-[42px] tracking-tight text-[#1F2937] dark:text-white mb-8 leading-tight max-w-xl">
            {/* Vurgu Kutusu */}
            <span
              className="absolute  bg-[#E92577] rounded-[4px]"
              style={{
                width: "8rem",
                height: "1.3rem",
                top: "1.8rem",
                left: "-5px",
              }}
            ></span>
            <span className="relative z-10">{title}</span>
          </h1>

          {/* Sosyal İkonlar */}
          <div className="flex gap-5 text-2xl mb-8 text-[#1F2937] dark:text-white">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EA2678] transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EA2678] transition-colors"
            >
              <FaGithub />
            </a>
          </div>

          {/* Alt Detay Metni */}
          <p className="text-sm tracking-wide text-slate-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            {parseDescription(description)}
            <a
              href="mailto:bmelisates@gmail.com"
              className="text-[#E92577] font-bold underline hover:opacity-80 transition-opacity"
            >
              bmelisates@gmail.com
            </a>
          </p>
        </div>

        {/* Sağ Sütun: Resim Kutusu */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72">
            {/* Pembe Çerçeve  */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#E92577] z-0 shadow-lg"></div>

            {/* Ana Profil Resim*/}
            <div className="w-full h-full rounded-3xl bg-slate-200 dark:bg-zinc-800 shadow-xl overflow-hidden relative z-10">
              <img
                src={profileImg}
                alt="Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
