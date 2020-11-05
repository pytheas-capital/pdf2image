/// <reference types="node" />
import gm from "gm";
import fs from "fs-extra";
import { WriteImageResponse } from "@module/types/writeImageResponse";
import { Options } from "@module/types/options";
import { ToBase64Response } from "@module/types/toBase64Response";
export declare class Graphics {
    private quality;
    private format;
    private width;
    private height;
    private density;
    private units;
    private savePath;
    private saveFilename;
    private compression;
    private depth;
    private contrast;
    private dither;
    private colors;
    private colorspace;
    private fuzz;
    private opaque;
    private gm;
    generateValidFilename(page?: number): string;
    gmBaseCommand(stream: fs.ReadStream, filename: string): gm.State;
    toBase64(stream: fs.ReadStream, page?: number): Promise<ToBase64Response>;
    writeImage(stream: fs.ReadStream, page?: number): Promise<WriteImageResponse>;
    identify(filepath: string | fs.ReadStream, argument?: string): Promise<gm.ImageInfo | string>;
    setQuality(quality: number): Graphics;
    setFormat(format: string): Graphics;
    setSize(width: number, height?: number): Graphics;
    setDensity(density: number): Graphics;
    setUnits(units: string): Graphics;
    setSavePath(savePath: string): Graphics;
    setSaveFilename(filename: string): Graphics;
    setCompression(compression: string): Graphics;
    setDepth(depth: () => number): Graphics;
    setContrast(contrast: number): Graphics;
    setDither(dither: boolean): Graphics;
    setColors(colors: number): Graphics;
    setColorspace(colorspace: string): Graphics;
    setFuzz(fuzz: number): Graphics;
    setOpaque(opaque: string): Graphics;
    setGMClass(gmClass: string | boolean): Graphics;
    getOptions(): Options;
}