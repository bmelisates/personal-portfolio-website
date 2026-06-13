import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import pizzaImg from "../assets/pizza-website.png";
import portfolioImg from "../assets/kisisel-website.png";

export default function Projects() {
  const { siteData, loading, lang } = useContext(SiteContext);
  if (loading || !siteData) return null;
  const { title, list } = siteData.projects;
  const imageMap = {
    "pizza-website": pizzaImg,
    "kisisel-website": portfolioImg,
  };
  // soft kart arka plan renkleri (Mavi ve Yeşil)
  const cardBackgrounds = [
    "bg-[#DDEEFE] dark:bg-[#2D4356]", // 1. Proje: Açık Mavi
    "bg-[#D9F6F1] dark:bg-[#244843]", // 2. Proje: Açık Yeşil/Turkuaz
  ];

  return (
    <section
      id="projects"
      className="pt-16 pb-0 px-6 max-w-5xl mx-auto text-left"
    >
      {/* Bölüm Başlığı */}
      <h2 className="text-4xl font-medium mb-10 md:mb-16 text-[#1F2937] dark:text-white tracking-wide text-center">
        {title}
      </h2>

      {/* Dikey Kartların Yan Yana Dizildiği Izgara */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {list.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-3xl p-8 pt-10 overflow-hidden shadow-sm hover:shadow-md transition-all ${
              cardBackgrounds[index] || "bg-slate-100"
            }`}
          >
            {/* Proje Başlığı */}
            <h3 className="font-playfair text-3xl font-bold text-[#1F2937] dark:text-white mb-4">
              {project.title}
            </h3>

            {/* Proje Açıklaması */}
            <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-200 mb-6 flex-1">
              {project.description}
            </p>

            {/* Teknolojiler (Yuvarlak Beyaz Etiketler) */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="font-playfair px-4 py-1.5 bg-white dark:bg-zinc-800 text-xs font-bold text-slate-800 dark:text-zinc-200 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Linkler (GitHub ve App Linki) */}
            <div className="flex justify-between items-center mb-10 font-bold text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#1F2937] dark:text-white underline hover:opacity-80 transition"
              >
                {lang === "tr" ? "Github'a git" : "View on Github"}
              </a>
              <a
                href={project.viewSite}
                target="_blank"
                rel="noreferrer"
                className="text-[#1F2937] dark:text-white hover:opacity-80 transition flex items-center gap-1"
              >
                {lang === "tr" ? "Siteye git -> " : "Go to app -> "}
              </a>
            </div>

            {/* En Alttaki Laptop Mockup Alanı */}
            <div className="mt-auto -mb-8 flex justify-center">
              <div className="w-full max-w-[320px] h-44 bg-zinc-800 rounded-t-xl border-x-4 border-t-4 border-zinc-700 flex items-center justify-center text-xs text-zinc-500 shadow-inner relative">
                {/* Laptop Ekranı İçeriği */}
                {/* Proje Görseli */}
                <img
                  src={imageMap[project.image]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top rounded-t-[8px]"
                />
                {/* Laptop Alt Tablası Süsü */}
                <div className="absolute -bottom-1 w-[110%] h-2 bg-zinc-600 rounded-b-md shadow-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
