import { Options } from "@module/types/options";

export const defaultOptions: Options = {
  quality: 0,
  format: "png",
  width: 768,
  height: 512,
  density: 72,
  savePath: "./",
  saveFilename: "untitled",
  compression: "jpeg",
  depth: () => 32,
  contrast: +100,
  // dither: true,
  colors: 2,
  colorspace: "GRAY",
  fuzz: 25,
  opaque: "#373737",
};
