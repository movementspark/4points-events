@echo off
set /p msg="Commit message: "
git add .
git commit -m "%msg%"
git push
echo.
echo Done! Vercel will deploy in ~60 seconds.
pause
