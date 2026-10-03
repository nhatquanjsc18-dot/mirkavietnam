# Package the WordPress theme into wp-theme-mirka-vn.zip for a Linux host (Hostinger).
#
# DO NOT use Compress-Archive from Windows PowerShell 5: it writes entry paths with "\",
# so on Linux every file is extracted flat as "assets\js\script.js" (folders lost, and the
# theme dies with a Fatal error because inc/products-cpt.php cannot be found).
# This script writes "/" paths and puts everything under a top-level wp-theme-mirka-vn/ folder.
#
# Run: powershell -ExecutionPolicy Bypass -File tools\build-wp-zip.ps1
# (keep this file ASCII-only: PS5 misreads UTF-8 without BOM)

Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem

$root = Split-Path -Parent $PSScriptRoot
$src  = Join-Path $root 'wp-theme-mirka-vn'
$dst  = Join-Path $root 'wp-theme-mirka-vn.zip'

[System.IO.File]::Delete($dst)
$zip = [System.IO.Compression.ZipFile]::Open($dst, 'Create')
try {
  $base = (Resolve-Path -LiteralPath $src).Path.TrimEnd('\') + '\'
  Get-ChildItem -LiteralPath $src -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Substring($base.Length).Replace('\', '/')
    [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, "wp-theme-mirka-vn/$rel", 'Optimal')
  }
} finally {
  $zip.Dispose()
}

$z = [System.IO.Compression.ZipFile]::OpenRead($dst)
$bad = ($z.Entries | Where-Object { $_.FullName.Contains('\') }).Count
$n = $z.Entries.Count
$z.Dispose()
if ($bad -gt 0) { throw "Zip has $bad entries containing a backslash - build failed." }
$mb = [math]::Round((Get-Item -LiteralPath $dst).Length / 1MB, 1)
Write-Host "OK: $dst ($n files, $mb MB)"
