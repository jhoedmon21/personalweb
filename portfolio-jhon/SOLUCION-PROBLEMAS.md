# 🔧 SOLUCIÓN DE PROBLEMAS - Portfolio Jhon Monroy

## ❌ Problema: "No carga" / Página en blanco

### Solución 1: Iniciar desde la Terminal (RECOMENDADO)

1. **Abre PowerShell o CMD**
   - Presiona `Win + R`
   - Escribe `cmd` y presiona Enter

2. **Navega al proyecto:**
   ```bash
   cd D:\personalweb\portfolio-jhon
   ```

3. **Inicia el servidor:**
   ```bash
   npm run dev -- -p 3001
   ```

4. **Abre tu navegador en:**
   ```
   http://localhost:3001
   ```

---

### Solución 2: Puerto Ocupado

Si ves el error: `EADDRINUSE: address already in use`

**Opción A: Cambiar de puerto**
```bash
npm run dev -- -p 3002
```
Luego abre: http://localhost:3002

**Opción B: Liberar el puerto 3000**
```bash
netstat -ano | findstr :3000
taskkill /F /PID [NUMERO_QUE_APARECE]
```

---

### Solución 3: Reinstalar Dependencias

Si algo falló en la instalación:

```bash
cd D:\personalweb\portfolio-jhon
rm -rf node_modules
rm package-lock.json
npm install
npm run dev -- -p 3001
```

---

### Solución 4: Usar el Servidor de Producción

Si el modo desarrollo da problemas:

```bash
cd D:\personalweb\portfolio-jhon
npm run build
npm run start
```

Abre: http://localhost:3000

---

### Solución 5: Verificar que Node.js esté instalado

```bash
node --version
```

Debería mostrar algo como: `v24.x.x` o superior

Si no está instalado:
1. Ve a: https://nodejs.org/
2. Descarga la versión LTS
3. Instala y reinicia la terminal

---

## ✅ VERIFICACIÓN RÁPIDA

### 1. ¿Está el proyecto en la ubicación correcta?
```
D:\personalweb\portfolio-jhon\
```

### 2. ¿Existen las carpetas node_modules y .next?
```bash
cd D:\personalweb\portfolio-jhon
dir
```

Deberías ver:
- ✅ node_modules (carpeta)
- ✅ package.json (archivo)
- ✅ src (carpeta)

### 3. ¿Se compiló correctamente?
```bash
npm run build
```

Debería terminar con: `✓ Compiled successfully`

---

## 🎯 MÉTODO ALTERNATIVO: Abrir Archivo HTML Directo

Si quieres ver tu portfolio inmediatamente sin configurar Next.js:

1. Abre el archivo que creaste originalmente:
   ```
   D:\personalweb\index.html
   ```

2. Este usa HTML/CSS/JS puro y funciona de inmediato

---

## 📞 PASOS DETALLADOS PARA PRINCIPIANTES

### Paso 1: Abrir Terminal
- Presiona `Win + X`
- Selecciona "Windows PowerShell" o "Símbolo del sistema"

### Paso 2: Ir a la Carpeta
Copia y pega esto:
```bash
cd D:\personalweb\portfolio-jhon
```
Presiona Enter

### Paso 3: Ver que todo esté bien
```bash
dir
```
Deberías ver archivos como: package.json, src, node_modules

### Paso 4: Iniciar Servidor
```bash
npm run dev -- -p 3001
```

### Paso 5: Esperar el Mensaje
Espera a ver:
```
✓ Starting...
✓ Ready in XXXms
```

### Paso 6: Abrir Navegador
Abre Chrome, Edge o Firefox y ve a:
```
http://localhost:3001
```

---

## 🆘 SI NADA FUNCIONA

### Opción A: Usar la versión HTML simple

El portfolio original que creamos en HTML puro está en:
```
D:\personalweb\index.html
```

Solo ábrelo con doble clic - funciona inmediatamente.

### Opción B: Crear nuevo proyecto desde cero

```bash
cd D:\personalweb
npx create-next-app@latest portfolio-nuevo
cd portfolio-nuevo
npm run dev
```

Luego copia el contenido de `portfolio-jhon/src/app/page.tsx` al nuevo proyecto.

---

## 🔍 DIAGNÓSTICO

### Test 1: Node.js
```bash
node --version
npm --version
```

### Test 2: Puerto disponible
```bash
netstat -ano | findstr :3001
```
Si aparece algo, ese puerto está ocupado. Usa otro puerto.

### Test 3: Compilación
```bash
npm run build
```

### Test 4: TypeScript
```bash
npm run typecheck
```

---

## ✨ COMANDOS ÚTILES

```bash
# Limpiar cache de Next.js
rm -rf .next

# Ver puertos ocupados
netstat -ano | findstr :3000

# Matar proceso en puerto 3000
taskkill /F /PID [NUMERO]

# Reinstalar todo
rm -rf node_modules package-lock.json
npm install

# Iniciar en puerto diferente
npm run dev -- -p 3001
npm run dev -- -p 3002
npm run dev -- -p 4000
```

---

## 📱 CONTACTO

Si después de todo esto sigue sin funcionar, revisa:

1. **Antivirus/Firewall** - Podría estar bloqueando el puerto
2. **Permisos** - Ejecuta la terminal como Administrador
3. **Node.js** - Asegúrate de tener la versión 24 o superior

---

## 🎯 RESUMEN RÁPIDO

```bash
1. cd D:\personalweb\portfolio-jhon
2. npm run dev -- -p 3001
3. Abrir http://localhost:3001
```

¡ESO ES TODO! 🚀
