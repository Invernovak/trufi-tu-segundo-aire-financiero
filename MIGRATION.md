# Guía de Migración a Next.js — Proyecto Trufi

## 1. Estrategia de Renderizado (SSR vs Static)
Dado que el proyecto es una Fintech con contenido mixto, se recomienda la siguiente distribución:

- **Home (`/`)**: `getStaticProps` con ISR (Incremental Static Regeneration) cada 1 hora para mantener los beneficios actualizados.
- **Páginas de Segmento (`/pensionado`, `/docente`)**: `getStaticProps` ya que el contenido es mayormente estático.
- **Blog (`/blog`, `/blog/[id]`)**: `getStaticProps` + `getStaticPaths`.
- **Zona de Pagos / Admin**: Componentes de Cliente (`'use client'`) o SSR si requieren validación de sesión inmediata.

## 2. Componentes que requieren `next/dynamic`
Cualquier componente que acceda a `window` o `document` directamente debe ser importado dinámicamente con `ssr: false`:
- `CreditSimulator.tsx` (si usa calculos locales pesados o animaciones complejas).
- `PageLoader.tsx`.
- Bibliotecas de animaciones que no soporten servidor.

## 3. Variables de Entorno
Migrar de Vite (`VITE_`) a Next.js (`NEXT_PUBLIC_`):
- `VITE_SUPABASE_URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 4. Reemplazo de Router
- Reemplazar `react-router-dom` por `next/navigation` y `next/link`.
- `App.tsx` debe eliminarse en favor de la estructura `app/layout.tsx` y `app/page.tsx`.

## 5. Recomendación Final
**¿Vale la pena migrar a Next.js?**
**SÍ.** El negocio de Trufi depende de la confianza y el SEO. Una SPA tiene dificultades para posicionar términos como "créditos para pensionados Cali". Next.js proporcionará:
1. Mejores Core Web Vitals (LCP reducido).
2. Indexación perfecta de metadatos dinámicos por página.
3. Posibilidad de pre-renderizar los formularios de captura de leads.
