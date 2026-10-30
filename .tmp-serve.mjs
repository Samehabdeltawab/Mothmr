import http from "node:http"
import fs from "node:fs"
import path from "node:path"

const root = path.resolve("dist")
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpeg": "image/jpeg", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".woff2": "font/woff2" }

http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0])
    if (!p.startsWith("/Mothmr/")) {
      res.writeHead(404).end("outside /Mothmr/")
      return
    }
    p = p.slice("/Mothmr".length)
    if (p.endsWith("/")) p += "index.html"
    const file = path.join(root, p)
    fs.readFile(file, (err, data) => {
      if (err) return res.writeHead(404).end("not found")
      res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" }).end(data)
    })
  })
  .listen(4174)
