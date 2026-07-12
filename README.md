# Be Community — Sitio web

Sitio corporativo de Be Community: consultoría de experiencia y comunidad para
colegios y empresas en la Zona Metropolitana de la Ciudad de México.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens en `globals.css`)
- **Framer Motion** (transiciones y revelados)
- **next-intl** (i18n ES/EN, español como idioma principal)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

- `src/app/[locale]/` — páginas por idioma (home, colegios, empresas)
- `src/components/` — componentes de UI y secciones
- `src/i18n/` — configuración de next-intl (routing, request, navigation)
- `messages/` — textos ES/EN
- `src/app/sitemap.ts` y `robots.ts` — SEO técnico

## Sistema de diseño

Paleta derivada del logo (azul institucional + acentos magenta/lima/amarillo/lavanda),
tipografías Bricolage Grotesque + Hanken Grotesk, y el motivo gráfico de "las manos"
como firma de marca. Detalle completo en Notion (Plan Maestro).

## Pendientes (próximas fases)

- Contenido completo de las verticales Colegios y Empresas
- Blog / recursos (motor SEO)
- Formulario de contacto real + integración CRM
- Set definitivo de ilustración de manos y fotografía documental
- Logo vectorial (reemplazo del GIF actual)
- Datos estructurados JSON-LD (LocalBusiness, Service, FAQ)
