import fs from "node:fs";
import path from "node:path";

const artifactPath = path.join(process.cwd(), "assets", "thalryn-wiki.jsx");
const outputDir = path.join(process.cwd(), "public", "images");

if (!fs.existsSync(artifactPath)) {
  console.error("Missing assets/thalryn-wiki.jsx");
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const source = fs.readFileSync(artifactPath, "utf8");
const regex = /([a-zA-Z0-9_]+):\s*"data:image\/([a-zA-Z0-9+.-]+);base64,([^"]+)"/g;

let count = 0;
let match;
while ((match = regex.exec(source)) !== null) {
  const [, key, extension, base64] = match;
  const cleanExt = extension.replace("jpeg", "jpg");
  const fileName = `${key}.${cleanExt}`;
  const fullPath = path.join(outputDir, fileName);
  fs.writeFileSync(fullPath, Buffer.from(base64, "base64"));
  count += 1;
}

console.log(`Extracted ${count} images to public/images.`);
