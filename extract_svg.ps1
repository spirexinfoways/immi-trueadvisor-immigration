$file = "C:\Users\panth\.gemini\antigravity-ide\brain\184fb40f-f4d1-4b01-bf6e-ac20c4481bca\.system_generated\logs\transcript_full.jsonl"
$target = "C:\Users\panth\Desktop\immi trueadvisor immigration\src\assets\departing.svg"

Write-Host "Reading $file"
$lines = Get-Content $file
foreach ($line in $lines) {
    if ($line -match "freepik_stories-departing" -and $line -match "USER_INPUT") {
        try {
            $obj = ConvertFrom-Json $line
            if ($obj.content -match "(?s)(<style>svg#freepik_stories-departing.*?</svg>)") {
                $Matches[1] | Out-File $target -Encoding utf8
                Write-Host "Extracted successfully to $target"
                break
            }
        } catch {
            Write-Host "JSON parse error"
        }
    }
}
