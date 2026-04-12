/**
 * generar-logos-clientes.mjs
 * Genera GRAY, WHITE y RED desde cualquier logo nativo.
 * USO: node scripts/generar-logos-clientes.mjs <archivo> <NOMBRE>
 */

import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR   = path.join(__dirname, "../public/images/clients");

const CANVAS_W  = 399;
const CANVAS_H  = 270;
const PADDING   = 36;
const RED_BG    = { r: 238, g: 13, b: 9, alpha: 1 };
const TOLERANCE = 35;

// ── Argumentos ────────────────────────────────────────────────────
const [,, inputPath, nameArg] = process.argv;
if (!inputPath || !nameArg) {
  console.error("USO: node scripts/generar-logos-clientes.mjs <archivo> <NOMBRE>");
  process.exit(1);
}
const name          = nameArg.toUpperCase().trim();
const resolvedInput = path.resolve(inputPath);
if (!fs.existsSync(resolvedInput)) {
  console.error(`❌  Archivo no encontrado: ${resolvedInput}`);
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });

// ── 1. Redimensionar al canvas (sin agrandar imágenes pequeñas) ───
async function fitToCanvas(inputFile) {
  const maxW = CANVAS_W - PADDING * 2;
  const maxH = CANVAS_H - PADDING * 2;
  return sharp(inputFile)
    .ensureAlpha()
    .resize(maxW, maxH, { fit: "inside", withoutEnlargement: true })
    .toBuffer();
}

// ── 2. Flood-fill desde esquinas → máscara de fondo ───────────────
function buildBackgroundMask(pixels, width, height, channels) {
  // Muestrear esquinas para obtener el color de fondo
  const corners = [[0,0],[width-1,0],[0,height-1],[width-1,height-1]];
  let rSum=0, gSum=0, bSum=0;
  for (const [x,y] of corners) {
    const i = (y*width+x)*channels;
    rSum+=pixels[i]; gSum+=pixels[i+1]; bSum+=pixels[i+2];
  }
  const bg = { r: Math.round(rSum/4), g: Math.round(gSum/4), b: Math.round(bSum/4) };
  console.log(`   Fondo: rgb(${bg.r},${bg.g},${bg.b})`);

  // BFS desde las 4 esquinas
  const mask   = new Uint8Array(width * height); // 0=logo, 1=fondo
  const queue  = [];

  const enqueue = (x, y) => {
    const idx = y * width + x;
    if (mask[idx] !== 0) return;
    const i = idx * channels;
    const dist = Math.abs(pixels[i]-bg.r) + Math.abs(pixels[i+1]-bg.g) + Math.abs(pixels[i+2]-bg.b);
    if (dist < TOLERANCE) {
      mask[idx] = 1;
      queue.push(idx);
    }
  };

  for (const [x,y] of corners) enqueue(x, y);

  while (queue.length > 0) {
    const idx  = queue.shift();
    const x    = idx % width;
    const y    = Math.floor(idx / width);
    if (x > 0)       enqueue(x-1, y);
    if (x < width-1) enqueue(x+1, y);
    if (y > 0)       enqueue(x, y-1);
    if (y < height-1) enqueue(x, y+1);
  }

  return mask;
}

// ── 3. Centrar buffer en canvas 399×270 ───────────────────────────
async function centerOnCanvas(logoBuffer, bgColor = null) {
  const meta = await sharp(logoBuffer).metadata();
  const left = Math.round((CANVAS_W - meta.width)  / 2);
  const top  = Math.round((CANVAS_H - meta.height) / 2);
  const base = bgColor
    ? sharp({ create: { width: CANVAS_W, height: CANVAS_H, channels: 4, background: bgColor } })
    : sharp({ create: { width: CANVAS_W, height: CANVAS_H, channels: 4, background: { r:0,g:0,b:0,alpha:0 } } });
  return base.composite([{ input: logoBuffer, left, top }]).png().toBuffer();
}

// ── 4. Aplicar máscara: quitar fondo, mantener colores ────────────
async function applyMaskKeepColors(logoBuffer) {
  const { data, info } = await sharp(logoBuffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const pixels = new Uint8Array(data);
  const mask   = buildBackgroundMask(pixels, width, height, channels);

  for (let idx = 0; idx < width * height; idx++) {
    if (mask[idx] === 1) pixels[idx * channels + 3] = 0; // fondo → transparente
  }
  return sharp(pixels, { raw: { width, height, channels } }).png().toBuffer();
}

// ── 5. Aplicar máscara: quitar fondo, hacer logo blanco ───────────
async function applyMaskMakeWhite(logoBuffer) {
  const { data, info } = await sharp(logoBuffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const pixels = new Uint8Array(data);
  const mask   = buildBackgroundMask(pixels, width, height, channels);

  for (let idx = 0; idx < width * height; idx++) {
    const i = idx * channels;
    if (mask[idx] === 1) {
      pixels[i+3] = 0;       // fondo → transparente
    } else if (pixels[i+3] > 10) {
      pixels[i]   = 255;     // logo → blanco
      pixels[i+1] = 255;
      pixels[i+2] = 255;
    }
  }
  return sharp(pixels, { raw: { width, height, channels } }).png().toBuffer();
}

// ── MAIN ──────────────────────────────────────────────────────────
console.log(`\n⚙️  Procesando: ${path.basename(resolvedInput)} → ${name}\n`);

const logoResized = await fitToCanvas(resolvedInput);

// GRAY — colores originales, sin fondo
const grayLogo   = await applyMaskKeepColors(logoResized);
const grayCanvas = await centerOnCanvas(grayLogo);
const grayOut    = path.join(OUT_DIR, `${name}-GRAY.png`);
await sharp(grayCanvas).toFile(grayOut);
console.log(`✅  GRAY  → ${grayOut}`);

// WHITE — logo blanco, sin fondo
const whiteLogo   = await applyMaskMakeWhite(logoResized);
const whiteCanvas = await centerOnCanvas(whiteLogo);
const whiteOut    = path.join(OUT_DIR, `${name}-WHITE.png`);
await sharp(whiteCanvas).toFile(whiteOut);
console.log(`✅  WHITE → ${whiteOut}`);

// RED — logo blanco sobre fondo rojo
const redCanvas = await centerOnCanvas(whiteLogo, RED_BG);
const redOut    = path.join(OUT_DIR, `${name}-RED.png`);
await sharp(redCanvas).toFile(redOut);
console.log(`✅  RED   → ${redOut}`);

console.log(`\n🎉  Agrega a ClientesSection.tsx:`);
console.log(`   { name: "${name.charAt(0)+name.slice(1).toLowerCase()}", gray: "/images/clients/${name}-GRAY.png", white: "/images/clients/${name}-WHITE.png" },`);
