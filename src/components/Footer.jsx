import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

export default function Footer() {
  const { siteData, loading } = useContext(SiteContext);
  if (loading || !siteData) return null;
  const { title, links } = siteData.footer;

  return (
    <footer
      id="contact"
      className="pt-4 pb-16 px-6 max-w-5xl mx-auto text-left mt-0 md:py-20 md:mt-0"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Sol Taraf: Büyük Çağrı Metni ve Altındaki Vurgu Çizgisi */}
        <div className="max-w-md w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-[#1F2937] dark:text-white leading-tight relative pb-4 inline-block mt-10">
            {/* Hightlight Kutusu */}
            <span className="absolute bg-[#82BBFF] dark:bg-[#3B82F6] dark:opacity-30 rounded-[4px z-0 left-[6.5rem] md:left-[6rem] w-[11rem] md:w-[14rem] h-[1rem] top-[1.5rem]"></span>
            <span className="relative z-10">{title}</span>
          </h2>
        </div>

        {/* Sağ Taraf: Manuel Linkler */}
        <div className="flex flex-col gap-4 font-medium text-lg text-[#1F2937] dark:text-zinc-300 items-center md:items-start w-full md:w-auto justify-center md:pe-10">
          <a
            href="https://github.com/bmelisates"
            target="_blank"
            rel="noreferrer"
            className="text-[#1769FF] hover:text-[#4731D4] dark:hover:text-[#CBF281] transition-colors"
          >
            Github
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#4731D4] dark:hover:text-[#CBF281] transition-colors"
          >
            Personal Blog
          </a>
          <a
            href="https://www.linkedin.com/in/melis-ate%C5%9F-4a187a415/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
            className="text-[#0077B5] hover:text-[#4731D4] dark:hover:text-[#CBF281] transition-colors"
          >
            Linkedin
          </a>
          <a
            href="mailto:bmelisates@gmail.com"
            className="text-[#AF0C48] hover:opacity-85 transition-opacity"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
