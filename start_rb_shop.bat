@echo off
chcp 65001 > nul
echo ========================================================
echo   فروشگاه R.B Shop - در حال اجرای سرور محلی...
echo ========================================================
echo.
echo   سایت فروشگاه:  http://localhost:3000
echo   پنل مدیریت:   http://localhost:3000/rb-shop-admin
echo   رمز عبور:     rb2026
echo.
echo   (برای بستن سرور، این پنجره را ببندید)
echo ========================================================
start http://localhost:3000
python -m http.server 3000
pause
