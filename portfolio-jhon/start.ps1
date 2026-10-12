Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Portfolio Jhon Monroy - Next.js" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Iniciando servidor de desarrollo..." -ForegroundColor Green
Write-Host ""
Write-Host "El sitio estara disponible en:" -ForegroundColor Yellow
Write-Host "http://localhost:3001" -ForegroundColor Yellow
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Red
Write-Host ""

Start-Sleep -Seconds 2
Start-Process "http://localhost:3001"

Set-Location "D:\personalweb\portfolio-jhon"
npm run dev -- -p 3001
