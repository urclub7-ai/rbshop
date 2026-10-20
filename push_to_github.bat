@echo off
chcp 65001 > nul
echo ========================================================
echo   در حال ثبت و ارسال (Push) به گیت‌هاب: rbshop
echo ========================================================
cd /d "%~dp0"
git add .
git commit -m "Update website"
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo در صورت لزوم ارسال با -u انجام می شود...
    git push -u origin main
)
echo.
echo ========================================================
echo   عملیات به پایان رسید!
echo ========================================================
pause
