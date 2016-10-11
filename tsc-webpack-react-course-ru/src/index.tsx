import * as React from "react";
import * as ReactDOM from "react-dom";
import * as EventEmitter from 'wolfy87-eventemitter'
(window as any).ee = new EventEmitter()
import { App } from "./components/App";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);