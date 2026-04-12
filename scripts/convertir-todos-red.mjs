/**
 * convertir-todos-red.mjs
 * Toma todos los archivos *-RED.* en public/images/clients/
 * y los reemplaza por PNGs con logo blanco sobre fondo transparente.
 */

import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, "../public/images/clients");

const files = fs.readdirSync(DIR).filter(f => f.toUpperCase().includes("-RED."));

if (files.length === 0) {
  console.log("No se encontraron archivos -RED.");
  process.exit(0);
}

for (const file of files) {
  const input = path.join(DIR, file);
  const baseName = file.replace(/\.[^.]+$/, ""); // sin extensión
  const output = path.join(DIR, `${baseName}.png`);

  try {
    const { data, info } = await sharp(input)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const pixels = new Uint8Array(data);

    for (let i = 0; i < pixels.length; i += channels) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      // Detectar píxeles "claros" (fondo blanco o casi blanco) → transparente
      if (r > 220 && g > 220 && b > 220) {
        pixels[i + 3] = 0; // transparente
      } else {
        // Todo lo demás → blanco (logo blanco para ver sobre rojo)
        pixels[i]     = 255;
        pixels[i + 1] = 255;
        pixels[i + 2] = 255;
        // alfa se mantiene
      }
    }

    await sharp(pixels, { raw: { width, height, channels } })
      .png()
      .toFile(output);

    // Si era JPG, eliminamos el original para no tener duplicados
    if (!file.endsWith(".png")) {
      fs.unlinkSync(input);
      console.log(`✅  ${file} → ${path.basename(output)} (JPG eliminado)`);
    } else {
      console.log(`✅  ${file} → sobreescrito como PNG transparente`);
    }
  } catch (err) {
    console.error(`❌  Error con ${file}:`, err.message);
  }
}

console.log("\n🎉 Conversión completa. Todos los -RED ahora son PNG transparentes con logo blanco.");
