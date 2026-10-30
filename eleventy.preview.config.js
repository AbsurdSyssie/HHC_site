// SPDX-FileCopyrightText: 2026 Marcus Baw
// SPDX-License-Identifier: MIT

import { configureSite } from "./eleventy.config.js";

export default function (eleventyConfig) {
  return {
    ...configureSite(eleventyConfig, { draftPreview: true }),
    pathPrefix: "/",
    dir: { input: "src", includes: "_includes", output: "_preview" },
  };
}
