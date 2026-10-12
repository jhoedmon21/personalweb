# personalweb

Portfolio web de **Jhon Edilberto Monroy Barrios**.

## Estructura

- `portfolio-jhon/` — Portfolio en **Next.js 16 + React 19 + Tailwind CSS v4** (sitio publicado en Vercel)
- `index.html`, `jhon-nastik.html`, `css/`, `js/`, `images/` — versión estática del sitio
- `Professional_CV_Jhon.pdf` — CV descargable

## Desarrollo local (portfolio-jhon)

Requiere Node >= 24 (ver `.nvmrc`):

```bash
cd portfolio-jhon
npm install
npm run dev
```

Otros comandos:

```bash
npm run build      # build de producción
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Despliegue (Vercel)

1. Importar el repo en [vercel.com/new](https://vercel.com/new)
2. **Root Directory:** `portfolio-jhon`
3. Build command y output se detectan automáticamente (Next.js)
