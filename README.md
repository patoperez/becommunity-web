# Be Community

Sitio web de Be Community: consultoría de experiencia y comunidad para colegios
y empresas en la Zona Metropolitana de la Ciudad de México.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- next-intl (español e inglés)

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio queda en http://localhost:3000

## Estructura

- `src/app/[locale]/` — páginas por idioma (home, colegios, empresas)
- `src/components/` — componentes y secciones
- `src/i18n/` — configuración de idiomas
- `messages/` — textos en español e inglés
- `src/app/sitemap.ts` y `robots.ts` — SEO técnico

## Despliegue en Cloudflare Pages

El proyecto está preparado para Cloudflare Pages con el adaptador
`@cloudflare/next-on-pages`.

Configuración del proyecto en Cloudflare Pages:

- Build command: `npx @cloudflare/next-on-pages@1`
- Build output directory: `.vercel/output/static`
- Node version: 20 (definida en `.node-version`)
- Compatibility flag requerido: `nodejs_compat` (producción y preview)

El archivo `.npmrc` (`legacy-peer-deps=true`) garantiza que la instalación de
dependencias funcione correctamente durante el build.
