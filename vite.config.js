import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Plugin que serve a pasta ./demos no modo dev e copia ./demos para ./dist/demos no build
function auroraDemosPlugin() {
  return {
    name: 'aurora-static-demos',
    configureServer(server) {
      server.middlewares.use('/demos', (req, res, next) => {
        const cleanUrl = (req.url || '/').split('?')[0]
        let filePath = path.join(process.cwd(), 'demos', cleanUrl)
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, 'index.html')
        }
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase()
          const mimeTypes = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.js': 'application/javascript; charset=utf-8',
            '.json': 'application/json; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml'
          }
          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
          fs.createReadStream(filePath).pipe(res)
          return
        }
        next()
      })
    },
    closeBundle() {
      const srcDir = path.resolve(process.cwd(), 'demos')
      const destDir = path.resolve(process.cwd(), 'dist', 'demos')
      if (fs.existsSync(srcDir)) {
        fs.cpSync(srcDir, destDir, { recursive: true })
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), auroraDemosPlugin()],
})
