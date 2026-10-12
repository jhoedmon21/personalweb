# 🚀 INSTRUCCIONES DE USO - Portfolio Jhon Monroy

## ✅ ¡Tu sitio web está listo!

Tu página web personal ha sido creada exitosamente usando Next.js 16, React 19 y Tailwind CSS v4, basada en el diseño de nastik.webredox.net con todos tus datos del CV.

---

## 📍 UBICACIÓN DEL PROYECTO

```
D:\personalweb\portfolio-jhon\
```

---

## 🎯 CÓMO INICIAR EL PROYECTO

### Opción 1: Usar el script automático (Más fácil)

1. Navega a la carpeta del proyecto:
   ```
   D:\personalweb\portfolio-jhon\
   ```

2. Haz doble clic en el archivo:
   ```
   start.bat
   ```

3. Se abrirá automáticamente tu navegador en http://localhost:3000

### Opción 2: Usar la terminal

1. Abre una terminal (CMD o PowerShell)

2. Navega al proyecto:
   ```bash
   cd D:\personalweb\portfolio-jhon
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en: http://localhost:3000

---

## 📱 SECCIONES INCLUIDAS

✅ **Hero Section** - Slider automático con 3 diapositivas
✅ **About Me** - Información profesional y estadísticas
✅ **Services** - 3 servicios profesionales con precios
✅ **Skills** - Habilidades técnicas con barras animadas
✅ **Resume** - Timeline de experiencia laboral
✅ **Portfolio** - 4 proyectos destacados de investigación
✅ **Contact** - Formulario y datos de contacto

---

## 🎨 PERSONALIZACIÓN

### Cambiar colores

Edita el archivo: `src/app/globals.css`

El color principal actual es rojo (#ff6b6b). Puedes cambiarlo por:
- Azul: `#3b82f6`
- Verde: `#10b981`
- Morado: `#8b5cf6`
- Naranja: `#f97316`

### Agregar tus fotos

1. Coloca tus imágenes en: `public/images/`
2. Edita `src/app/page.tsx` y busca los placeholders (👤, 🚀, etc.)
3. Reemplázalos con: `<img src="/images/tu-foto.jpg" alt="..." />`

### Actualizar redes sociales

Edita `src/app/page.tsx` y busca la sección de redes sociales:
- LinkedIn: Línea ~583
- GitHub: Línea ~586
- Twitter: Línea ~589
- Facebook: Línea ~592

### Agregar tu CV en PDF

1. Coloca tu CV en: `public/cv-jhon-monroy.pdf`
2. Edita `src/app/page.tsx` línea ~492
3. Cambia `href="#"` por `href="/cv-jhon-monroy.pdf"`

---

## 🌐 DESPLEGAR EN LÍNEA (GRATIS)

### Opción 1: Vercel (Recomendado)

1. Ve a https://vercel.com
2. Crea una cuenta gratuita con GitHub
3. Sube tu proyecto a GitHub
4. Conecta tu repositorio en Vercel
5. ¡Listo! Tu sitio estará en línea en minutos

### Opción 2: Netlify

1. Ve a https://netlify.com
2. Crea una cuenta gratuita
3. Arrastra la carpeta del proyecto o conecta GitHub
4. Tu sitio estará en línea automáticamente

### Opción 3: GitHub Pages

1. Sube tu proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará en https://tu-usuario.github.io/portfolio

---

## 📝 ARCHIVOS IMPORTANTES

```
portfolio-jhon/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← PÁGINA PRINCIPAL (toda tu info aquí)
│   │   ├── layout.tsx        ← Configuración y metadata
│   │   └── globals.css       ← Estilos y colores
│   └── config/
│       └── portfolio-data.ts ← Datos organizados (opcional)
├── public/
│   ├── images/              ← Coloca tus fotos aquí
│   └── cv-jhon-monroy.pdf   ← Tu CV en PDF
├── start.bat                ← Script para iniciar fácilmente
└── README-JHON.md          ← Documentación completa
```

---

## 🔧 COMANDOS ÚTILES

```bash
npm run dev       # Iniciar servidor de desarrollo
npm run build     # Construir para producción
npm run start     # Ejecutar versión de producción
npm run lint      # Verificar código
npm run typecheck # Verificar tipos TypeScript
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### El puerto 3000 está ocupado

Cambia el puerto en `package.json`:
```json
"dev": "next dev -p 3001"
```

### Error al instalar dependencias

Ejecuta:
```bash
npm install --force
```

### El sitio no se actualiza

1. Detén el servidor (Ctrl + C)
2. Borra la carpeta `.next`
3. Ejecuta `npm run dev` nuevamente

---

## 📞 DATOS DE CONTACTO INCLUIDOS

✅ Email: jhoedmon@gmail.com
✅ Teléfono: +51 974 437 150
✅ Dirección: Urb. San Agustín D-19, Yanahuara, Arequipa, Perú
✅ Todas las experiencias laborales (2010-2025)
✅ 8 publicaciones científicas
✅ 4 proyectos destacados
✅ 7 reconocimientos y premios

---

## 🎓 TECNOLOGÍAS USADAS

- Next.js 16 (Framework React)
- React 19 (UI Library)
- TypeScript 5 (Tipado)
- Tailwind CSS v4 (Estilos)
- Lucide React (Iconos)

---

## 📚 RECURSOS ADICIONALES

- Documentación Next.js: https://nextjs.org/docs
- Documentación Tailwind: https://tailwindcss.com/docs
- Tutorial React: https://react.dev/learn

---

## ✨ PRÓXIMOS PASOS

1. ⚡ **Iniciar el proyecto** con `start.bat` o `npm run dev`
2. 📸 **Agregar tus fotos** en `public/images/`
3. 🔗 **Actualizar enlaces** de redes sociales
4. 📄 **Subir tu CV** en PDF
5. 🌐 **Desplegar en Vercel** para tenerlo en línea
6. 📧 **Conectar formulario** de contacto con EmailJS o Formspree

---

## 💡 CONSEJOS PRO

- Usa imágenes optimizadas (WebP, menos de 500KB)
- Agrega Google Analytics para ver visitas
- Configura un dominio personalizado (tu-nombre.com)
- Mantén el CV actualizado
- Comparte el link en tu LinkedIn y redes

---

¡Tu portfolio está listo para impresionar! 🚀

Si necesitas ayuda, no dudes en contactarme.

**¡Éxito con tu nuevo portfolio profesional!** 🎉
