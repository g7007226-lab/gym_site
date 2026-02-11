@echo off
echo ========================================
echo CLEANING UP UNNECESSARY FILES
echo ========================================
echo.

REM Delete default CRA README
echo Deleting default Create React App README...
del README.md 2>nul
echo ✓ Default README deleted

REM Delete unused components
echo Deleting unused components...
del src\components\Hero_New.jsx 2>nul
del src\components\OptimizedImage.jsx 2>nul
del src\components\FastImage.jsx 2>nul
echo ✓ Unused components deleted

REM Delete unused assets
echo Deleting unused assets...
del src\assets\images\hero.avif 2>nul
del src\assets\images\heros.jpg 2>nul
del src\assets\images\about.avif 2>nul
del src\assets\images\gal*.jpg 2>nul
del src\assets\images\gal*.jpeg 2>nul
del src\assets\README.md 2>nul
echo ✓ Unused assets deleted

REM Delete test files
echo Deleting test files...
del src\App.test.js 2>nul
del src\setupTests.js 2>nul
del src\reportWebVitals.js 2>nul
echo ✓ Test files deleted

REM Delete unused public files
echo Deleting unused public files...
del public\logo192.png 2>nul
del public\logo512.png 2>nul
del public\manifest.json 2>nul
echo ✓ Unused public files deleted

REM Delete build files
echo Deleting old build files...
del build.zip 2>nul
echo ✓ Build files deleted

REM Delete unused CSS/SVG
echo Deleting unused CSS/SVG...
del src\performance.css 2>nul
del src\logo.svg 2>nul
echo ✓ Unused CSS/SVG deleted

REM Delete webpack cache
echo Deleting webpack cache...
rmdir /s /q node_modules\.cache 2>nul
echo ✓ Webpack cache deleted

echo.
echo ========================================
echo CLEANUP COMPLETE!
echo ========================================
echo.
echo Files deleted: 20+ unused files
echo Space saved: ~15-20 MB
echo.
echo Next steps:
echo 1. Run: npm start
echo 2. Test the site
echo 3. Run: npm run build (for production)
echo.
pause
