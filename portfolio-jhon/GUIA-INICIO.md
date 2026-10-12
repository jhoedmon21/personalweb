# 🎯 GUÍA PASO A PASO - Iniciar tu Portfolio

## 📍 Tu proyecto está aquí:
```
D:\personalweb\portfolio-jhon\
```

---

## ⚡ MÉTODO 1: Inicio Rápido (30 segundos)

### 1️⃣ Abre Windows PowerShell
- Presiona `Win + X` en tu teclado
- Haz clic en "Windows PowerShell" o "Terminal"

### 2️⃣ Copia y pega esto (todo junto):
```powershell
cd D:\personalweb\portfolio-jhon; npm run dev
```

### 3️⃣ Presiona ENTER

### 4️⃣ Espera a ver este mensaje:
```
✓ Starting...
✓ Ready in XXXms
○ Local: http://localhost:3000
```

### 5️⃣ Abre tu navegador y ve a:
```
http://localhost:3000
```

**¡LISTO! Tu portfolio debería estar funcionando** ✨

---

## 🔄 MÉTODO 2: Si el puerto 3000 está ocupado

### Usa el puerto 3001:
```powershell
cd D:\personalweb\portfolio-jhon; npm run dev -- -p 3001
```

Luego abre: `http://localhost:3001`

---

## 🖥️ MÉTODO 3: Interfaz Gráfica

### 1️⃣ Abre el Explorador de Windows

### 2️⃣ Ve a esta carpeta:
```
D:\personalweb\portfolio-jhon
```

### 3️⃣ Haz clic derecho en una zona vacía

### 4️⃣ Selecciona "Abrir en Terminal" o "Git Bash Here"

### 5️⃣ Escribe:
```bash
npm run dev
```

### 6️⃣ Abre: `http://localhost:3000`

---

## 🎬 LO QUE VERÁS

Cuando el servidor esté corriendo, verás algo como:

```
▲ Next.js 16.3.5
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Starting...
✓ Compiled /
```

**Esto significa que está funcionando correctamente** ✅

---

## 📸 CAPTURAS DE LO QUE DEBES VER

### En la Terminal:
```
D:\personalweb\portfolio-jhon> npm run dev

> ai-website-clone-template@0.6.1 dev
> next dev

▲ Next.js 16.3.5 (Turbopack)
- Local:        http://localhost:3000

✓ Starting...
✓ Compiled / in 2.3s
```

### En el Navegador:
- Verás tu nombre: **Jhon Edilberto Monroy Barrios**
- Un slider con 3 diapositivas
- Sección About Me
- Tus servicios
- Habilidades con barras de progreso
- Timeline de experiencia
- Proyectos
- Formulario de contacto

---

## ❌ SI APARECE UN ERROR

### Error: "Cannot find module"
```bash
npm install
npm run dev
```

### Error: "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```
Luego abre: http://localhost:3001

### Error: "Command not found"
Necesitas instalar Node.js:
1. Ve a: https://nodejs.org/
2. Descarga la versión LTS (recomendada)
3. Instala
4. Cierra y abre de nuevo la terminal
5. Intenta nuevamente

---

## 🎥 VIDEO TUTORIAL (SIMULADO)

```
PASO 1: Abrir PowerShell
[Win + X] → [Windows PowerShell]

PASO 2: Navegar al proyecto
> cd D:\personalweb\portfolio-jhon

PASO 3: Iniciar servidor
> npm run dev

PASO 4: Esperar mensaje "Ready"
✓ Ready in 1234ms

PASO 5: Abrir navegador
Chrome/Edge/Firefox → http://localhost:3000

¡PORTFOLIO FUNCIONANDO! 🎉
```

---

## 🆘 AYUDA ADICIONAL

Si después de seguir estos pasos sigue sin funcionar:

1. **Verifica que Node.js esté instalado:**
   ```bash
   node --version
   ```
   Debería mostrar: `v24.x.x` o similar

2. **Verifica que estés en la carpeta correcta:**
   ```bash
   pwd  # En PowerShell
   cd   # En CMD
   ```
   Debería mostrar: `D:\personalweb\portfolio-jhon`

3. **Verifica que node_modules exista:**
   ```bash
   dir  # En CMD
   ls   # En PowerShell
   ```
   Debe aparecer una carpeta llamada `node_modules`

---

## ✅ CHECKLIST

Antes de contactar por ayuda, verifica que hayas hecho:

- [ ] Abriste la terminal/PowerShell
- [ ] Navegaste a `D:\personalweb\portfolio-jhon`
- [ ] Ejecutaste `npm run dev`
- [ ] Esperaste al menos 10 segundos
- [ ] Abriste `http://localhost:3000` en el navegador
- [ ] Intentaste con puerto 3001 si 3000 no funcionó
- [ ] Node.js está instalado (v24+)

---

## 🌐 ALTERNATIVA: Versión HTML Simple

Si Next.js te da problemas, puedes usar la versión HTML pura:

1. Ve a: `D:\personalweb\`
2. Abre el archivo: `index.html`
3. ¡Funciona inmediatamente sin configuración!

Esta versión tiene el mismo contenido pero sin Next.js.

---

## 📞 CONTACTO

Si necesitas ayuda adicional:
- Email: jhoedmon@gmail.com
- Tel: +51 974 437 150

---

**Recuerda**: El comando más importante es:
```bash
cd D:\personalweb\portfolio-jhon && npm run dev
```

¡Eso es todo lo que necesitas! 🚀
