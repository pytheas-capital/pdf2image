export declare type Options = {
    quality?: number;
    format?: string;
    width?: number;
    height?: number;
    density?: number;
    units?: string;
    savePath?: string;
    saveFilename?: string;
    compression?: string;
    depth?: () => number;
    contrast?: number;
    dither?: boolean;
    colors?: number;
    colorspace?: string;
    fuzz?: number;
    opaque?: string;
};