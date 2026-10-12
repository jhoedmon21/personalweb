# Portfolio Personal - Jhon Edilberto Monroy Barrios

## 🎯 Descripción

Página web personal profesional desarrollada con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS v4**, basada en el diseño de [nastik.webredox.net](https://nastik.webredox.net/).

Este portfolio presenta de manera elegante y moderna toda tu experiencia profesional, proyectos de investigación, habilidades técnicas y publicaciones científicas.

## ✨ Características

### Secciones Implementadas

1. **Hero Section con Slider Automático**
   - 3 diapositivas rotativas cada 5 segundos
   - Navegación manual con flechas e indicadores
   - Animaciones suaves de entrada

2. **About Me - Acerca de**
   - Descripción profesional completa
   - Lista de competencias clave
   - Contador de estadísticas animado:
     - 15+ años de experiencia
     - 8 publicaciones científicas
     - 5 proyectos de investigación
     - 7 reconocimientos

3. **Services - Servicios**
   - Desarrollo de Software ($500 - $2000)
   - Investigación en IA ($800 - $3000)
   - Capacitación y Docencia ($300 - $1500)

4. **Skills - Habilidades**
   - Idiomas: Español (100%), Inglés (70%)
   - Habilidades Técnicas con barras animadas:
     - Python: 90%
     - Java: 85%
     - PHP: 75%
     - Machine Learning / IA: 85%
     - MySQL / Bases de Datos: 80%
     - Angular / Spring MVC: 70%

5. **Resume - Experiencia Profesional**
   - Timeline visual de experiencia laboral
   - USMP (2023-2025)
   - UTP (2021-2022, 2018-2022)
   - UNSA (2017-2019)
   - Botón de descarga de CV

6. **Portfolio - Proyectos Destacados**
   - Sistema de Videovigilancia Inteligente (2023)
   - Plataforma de Programación Visual con Interfaces Tangibles (2017)
   - ERS-TOOL: Modelo Híbrido para Elicitación de Requisitos (2018)
   - Matelogic: Aprendizaje Matemático Interactivo (2017)

7. **Contact - Contacto**
   - Formulario de suscripción
   - Datos de contacto completos:
     - Teléfono: +51 974 437 150
     - Email: jhoedmon@gmail.com
     - Dirección: Urb. San Agustín D-19, Yanahuara, Arequipa, Perú
   - Enlaces a redes sociales

### Funcionalidades Interactivas

- ✅ Navegación sticky responsive
- ✅ Menú móvil hamburguesa
- ✅ Scroll suave entre secciones
- ✅ Animaciones al hacer scroll
- ✅ Botón "volver arriba"
- ✅ Slider automático con controles manuales
- ✅ Efectos hover en tarjetas
- ✅ Barras de progreso animadas
- ✅ Diseño completamente responsive

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js 24+ instalado
- npm o yarn

### Instalación

1. **Navegar al directorio del proyecto:**
```bash
cd D:\personalweb\portfolio-jhon
```

2. **Instalar dependencias (ya instaladas):**
```bash
npm install
```

3. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:3000**

### Comandos Disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Construir para producción
npm run start     # Ejecutar versión de producción
npm run lint      # Verificar código con ESLint
npm run typecheck # Verificar tipos de TypeScript
npm run check     # Ejecutar todas las verificaciones
```

## 📁 Estructura del Proyecto

```
portfolio-jhon/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal con todo el contenido
│   │   ├── layout.tsx        # Layout y metadata
│   │   └── globals.css       # Estilos globales de Tailwind
│   ├── components/
│   │   └── ui/               # Componentes de shadcn/ui
│   ├── lib/
│   │   └── utils.ts          # Utilidades (cn() de Tailwind)
│   └── types/                # Tipos TypeScript
├── public/
│   ├── images/               # Imágenes del sitio
│   └── seo/                  # Imágenes para SEO
├── docs/
│   └── design-references/    # Referencias de diseño
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Tecnologías Utilizadas

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS v4** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos
- **shadcn/ui** - Componentes UI reutilizables

## 🎯 Próximos Pasos Recomendados

### 1. Personalización de Contenido
- [ ] Agregar fotografías personales en `public/images/`
- [ ] Reemplazar placeholders de proyectos con capturas reales
- [ ] Subir tu CV en PDF y actualizar el enlace de descarga

### 2. Redes Sociales
- [ ] Actualizar enlaces de LinkedIn, GitHub, Twitter, Facebook
- [ ] Agregar más iconos de redes sociales si es necesario

### 3. Optimizaciones
- [ ] Agregar imágenes optimizadas (WebP, AVIF)
- [ ] Configurar Google Analytics
- [ ] Agregar meta tags para SEO
- [ ] Configurar Open Graph para redes sociales

### 4. Funcionalidades Adicionales
- [ ] Conectar formulario de contacto con backend (EmailJS, Formspree, etc.)
- [ ] Agregar sección de blog
- [ ] Integrar CMS para contenido dinámico
- [ ] Agregar modo claro/oscuro

### 5. Deployment
- [ ] Desplegar en **Vercel** (recomendado para Next.js)
- [ ] Configurar dominio personalizado
- [ ] Configurar CI/CD con GitHub Actions

## 📝 Datos Incluidos

Todos los datos de tu CV han sido integrados:

✅ Información personal y contacto
✅ Experiencia laboral completa (2010-2025)
✅ Educación y formación académica
✅ Habilidades técnicas y lenguajes
✅ Proyectos de investigación destacados
✅ Publicaciones científicas
✅ Reconocimientos y premios

## 🌐 Deployment en Vercel (Recomendado)

1. Crear cuenta en [Vercel](https://vercel.com)
2. Conectar tu repositorio de GitHub
3. Vercel detectará automáticamente Next.js
4. Click en "Deploy"
5. Tu sitio estará en línea en minutos

## 📧 Soporte

Para cualquier duda o modificación:
- Email: jhoedmon@gmail.com
- Teléfono: +51 974 437 150

## 📄 Licencia

Este proyecto está basado en el template MIT de [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)

---

**Desarrollado con ❤️ usando Next.js 16 y Tailwind CSS v4**

*Última actualización: Octubre 2026*
