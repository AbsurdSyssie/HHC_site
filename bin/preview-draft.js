// SPDX-FileCopyrightText: 2026 Marcus Baw
// SPDX-License-Identifier: MIT

import fs from "node:fs";
import { spawn } from "node:child_process";
import Eleventy from "@11ty/eleventy";

const port = Number(process.env.PREVIEW_PORT ?? 8080);
if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  throw new Error("PREVIEW_PORT must be a whole number from 1024 to 65535.");
}

// Never serve an old successful build after a failed check. Production output
// is neither read nor written. Restart this command to refresh the draft.
fs.rmSync("_preview", { recursive: true, force: true });
const site = new Eleventy("src", "_preview", {
  configPath: "eleventy.preview.config.js",
});
await site.write();
console.warn(
  `Starting unreviewed draft on 0.0.0.0:${port}. Trusted LAN only; do not forward this port.`,
);
const server = spawn(
  "python3",
  ["-m", "http.server", String(port), "--bind", "0.0.0.0", "--directory", "_preview"],
  { stdio: "inherit" },
);
server.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});
server.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.kill(signal));
}
