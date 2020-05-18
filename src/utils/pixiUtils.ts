import {advanceKeyListener, startKeyListener} from "./key";
import * as PIXI from "pixi.js";

export function startApplication(options)
{
    const app = createApplication(options);
    addApplicationToDocument(app);
    return app;
}

export function createApplication(options)
{
    const app = new PIXI.Application(options);
    startKeyListener();
    app.ticker.add(advanceKeyListener);
    return app;
}

export function addApplicationToDocument(app)
{
    app.view.id = "gameCanvas";
    document.body.appendChild(app.view);
}