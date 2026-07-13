import type { MetadataRoute } from "next";

const base = "https://becommunitymx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/colegios", "/empresas", "/aviso-de-privacidad"];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
    alternates: {
      languages: {
        es: `${base}${p}`,
        en: `${base}/en${p}`,
      },
    },
  }));
}
