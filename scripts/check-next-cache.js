// Nextcloud's virtual-file sync can turn entries inside .next into cloud
// placeholders (reparse points), which crash `next dev` with EINVAL readlink.
// This wipes .next ONLY when that corruption is detected; otherwise it's a
// fast no-op and the build cache is kept.
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", ".next");

function isCorrupted(p) {
  let entries;
  try {
    entries = fs.readdirSync(p, { withFileTypes: true });
  } catch {
    return true; // unreadable directory → treat as corrupted
  }
  for (const e of entries) {
    if (e.isSymbolicLink()) return true; // placeholder reparse point
    if (e.isDirectory() && isCorrupted(path.join(p, e.name))) return true;
  }
  return false;
}

if (fs.existsSync(dir) && isCorrupted(dir)) {
  console.log("Nextcloud placeholder corruption detected in .next — clearing cache once.");
  fs.rmSync(dir, { recursive: true, force: true });
}
