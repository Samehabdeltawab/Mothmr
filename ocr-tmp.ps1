Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null=[Windows.Media.Ocr.OcrEngine,Windows.Foundation,ContentType=WindowsRuntime]
$null=[Windows.Globalization.Language,Windows.Foundation,ContentType=WindowsRuntime]
$null=[Windows.Graphics.Imaging.BitmapDecoder,Windows.Foundation,ContentType=WindowsRuntime]
$null=[Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime]
$asTask=([System.WindowsRuntimeSystemExtensions].GetMethods()|?{$_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'})[0]
function Await($op,$t){ $m=$asTask.MakeGenericMethod($t); $x=$m.Invoke($null,@($op)); $x.Wait(-1)|Out-Null; $x.Result }
$path = Join-Path $PSScriptRoot "public\Values\7.png"
$f=Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($path)) ([Windows.Storage.StorageFile])
$s=Await ($f.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
$dec=Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($s)) ([Windows.Graphics.Imaging.BitmapDecoder])
$bm=Await ($dec.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
$out=@("size $($bm.PixelWidth)x$($bm.PixelHeight)")
$engines=@()
$engines += ,@('profile',[Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages())
foreach($lang in 'en-US','ar-SA','ar-EG'){
  $l=[Windows.Globalization.Language]::new($lang)
  if([Windows.Media.Ocr.OcrEngine]::IsLanguageSupported($l)){ $engines += ,@($lang,[Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($l)) } else { $out += "$lang unsupported" }
}
foreach($en in $engines){
  if($en[1]){
    $r=Await ($en[1].RecognizeAsync($bm)) ([Windows.Media.Ocr.OcrResult])
    foreach($ln in $r.Lines){ foreach($w in $ln.Words){ $b=$w.BoundingRect; $out += "$($en[0]) '$($w.Text)' x=$([int]$b.X) y=$([int]$b.Y) w=$([int]$b.Width) h=$([int]$b.Height)" } }
  }
}
$out | Set-Content (Join-Path $PSScriptRoot "ocr-tmp.txt") -Encoding UTF8
