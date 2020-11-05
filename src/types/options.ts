export type Options = {
  quality?: number;
  format?: string;
  width?: number;
  height?: number;
  density?: number;
  savePath?: string;
  saveFilename?: string;
  compression?: string;
  depth?: () => number;
  contrast?: number;
  dither?: boolean;
  colors?: number;
  colorspace?: string;
  contrastStretch?: number;
  fuzz?: number;
  opaque?: string;
};