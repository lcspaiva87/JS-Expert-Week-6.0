import { join, dirname } from "path";
import { fileURLToPath } from "url";

const currentDir = dirname(fileURLToPath(import.meta.url));

const root = join(currentDir, "../");
const audioDirectory = join(currentDir, "audio");
const publicDirectory = join(currentDir, "public");

export default {
  port: process.env.PORT || 300,
  dir: {
    root,
    audioDirectory,
    publicDirectory,
    sessionStorage: join(audioDirectory, "songs"),
    fxDirectory: join(audioDirectory, "fx"),
  },
  pages: {
    HomeHtml: "home/index.html",
    ControllerHtml: "controller/index.html",
  },
  location: {
    home: "/home",
  },
};
