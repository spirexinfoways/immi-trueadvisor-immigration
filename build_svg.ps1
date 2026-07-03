$svgPath = "C:\Users\panth\Desktop\immi trueadvisor immigration\src\assets\departing (1)\departing-not-css.svg"
$cssPath = "C:\Users\panth\Desktop\immi trueadvisor immigration\src\assets\departing (1)\departing-styles.css"
$outPath = "C:\Users\panth\Desktop\immi trueadvisor immigration\src\assets\departing-animated.svg"

$svgContent = Get-Content $svgPath -Raw
$cssContent = Get-Content $cssPath -Raw

$newContent = $svgContent -replace '(?s)^(<svg[^>]*>)', "`$1<style>$cssContent</style>"
[IO.File]::WriteAllText($outPath, $newContent)
Write-Host "Created $outPath successfully"
