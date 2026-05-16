@echo off
echo ============================================
echo  Migrating 4points-events to Astro
echo ============================================

cd /d "%~dp0"

echo.
echo [1/5] Moving favicon to public/...
if exist "app\favicon.ico" (
    copy "app\favicon.ico" "public\favicon.ico" >nul
    echo Done.
) else (
    echo No favicon found in app\ - skipping.
)

echo.
echo [2/5] Removing Next.js directories...
if exist "app" rmdir /s /q "app"
if exist ".next" rmdir /s /q ".next"
if exist "node_modules" rmdir /s /q "node_modules"
echo Done.

echo.
echo [3/5] Removing Next.js config files...
if exist "next.config.ts" del "next.config.ts"
if exist "next-env.d.ts" del "next-env.d.ts"
if exist "eslint.config.mjs" del "eslint.config.mjs"
if exist "postcss.config.mjs" del "postcss.config.mjs"
if exist "package-lock.json" del "package-lock.json"
echo Done.

echo.
echo [4/5] Cleaning up unused public assets...
if exist "public\file.svg" del "public\file.svg"
if exist "public\globe.svg" del "public\globe.svg"
if exist "public\next.svg" del "public\next.svg"
if exist "public\vercel.svg" del "public\vercel.svg"
if exist "public\window.svg" del "public\window.svg"
echo Done.

echo.
echo [5/5] Installing Astro dependencies...
npm install
echo Done.

echo.
echo ============================================
echo  Migration complete!
echo  Run: npm run dev   (to preview locally)
echo  Run: npm run build (to test the build)
echo ============================================
pause
