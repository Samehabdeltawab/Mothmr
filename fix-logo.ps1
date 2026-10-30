Add-Type -AssemblyName System.Drawing
Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
public static class LogoFix {
  public static string Run(string src, string dst) {
    Bitmap bmp = new Bitmap(src);
    int w = bmp.Width, h = bmp.Height;
    Bitmap o = new Bitmap(w, h, PixelFormat.Format32bppArgb);
    using (Graphics g = Graphics.FromImage(o)) g.DrawImage(bmp, 0, 0, w, h);
    bmp.Dispose();
    BitmapData d = o.LockBits(new Rectangle(0,0,w,h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
    int n = Math.Abs(d.Stride) * h;
    byte[] p = new byte[n];
    System.Runtime.InteropServices.Marshal.Copy(d.Scan0, p, 0, n);
    long sr=0, sg=0, sb=0, c=0;
    for (int i=0;i<n;i+=4) { int B=p[i], G=p[i+1], R=p[i+2]; if (B-R>=70) { sr+=R; sg+=G; sb+=B; c++; } }
    int nr = c>0 ? (int)(sr/c) : 13, ng = c>0 ? (int)(sg/c) : 48, nb = c>0 ? (int)(sb/c) : 88;
    double full = Math.Max(1, nb-nr);
    int minX=w, minY=h, maxX=-1, maxY=-1;
    for (int y=0;y<h;y++) for (int x=0;x<w;x++) {
      int i = y*d.Stride + x*4;
      double a = (p[i]-p[i+2]) / full * 1.0;
      if (a<0.08) a=0; if (a>1) a=1;
      p[i]=(byte)nb; p[i+1]=(byte)ng; p[i+2]=(byte)nr; p[i+3]=(byte)Math.Round(a*255);
      if (a>0.3) { if (x<minX) minX=x; if (x>maxX) maxX=x; if (y<minY) minY=y; if (y>maxY) maxY=y; }
    }
    System.Runtime.InteropServices.Marshal.Copy(p, 0, d.Scan0, n);
    o.UnlockBits(d);
    int pad = 6;
    minX=Math.Max(0,minX-pad); minY=Math.Max(0,minY-pad); maxX=Math.Min(w-1,maxX+pad); maxY=Math.Min(h-1,maxY+pad);
    Rectangle r = new Rectangle(minX,minY,maxX-minX+1,maxY-minY+1);
    Bitmap cropped = o.Clone(r, PixelFormat.Format32bppArgb);
    cropped.Save(dst, ImageFormat.Png);
    string res = "navy=" + nr + "," + ng + "," + nb + " crop=" + r.Width + "x" + r.Height;
    cropped.Dispose(); o.Dispose();
    return res;
  }
}
"@ -ReferencedAssemblies System.Drawing
$pub = Join-Path $PSScriptRoot "public"
$src = Join-Path $pub "logo.png"
$bak = Join-Path $pub "logo-original.png"
if (!(Test-Path $bak)) { Copy-Item $src $bak }
[LogoFix]::Run($bak, $src)
