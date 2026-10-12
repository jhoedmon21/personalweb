@echo off
echo ========================================
echo   Portfolio Jhon Monroy - Next.js
echo ========================================
echo.
echo Iniciando servidor de desarrollo...
echo.
echo El sitio estara disponible en:
echo http://localhost:3001
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
timeout /t 2 /nobreak >nul
start http://localhost:3001
npm run dev -- -p 3001
