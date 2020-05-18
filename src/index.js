import * as PIXI from "pixi.js";
import {startApplication} from "./utils/pixiUtils";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const app = startApplication({ width: 128, height: 128, backgroundColor: 0x81c6e3 });

