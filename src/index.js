import "./libs/webix/webix.css";
import "./libs/fontawesome-free-5.12.0-web/css/all.css";

// CSS
import "./assets/css/list.css";
import "./assets/css/main.css";

//JS
import {first} from "./first.js";
import {second} from "./second.js";
import {third} from "./third.js";
import {fourth} from "./fourth.js";
import {fifth} from "./fifth.js";
import {sixth} from "./sixth.js";

webix.ui({
    padding: 20,
    type: "wide",
    rows: [
        {
            cols: [
                {
                    view: "label",
                    label: "Activities of  the day",
                    css: "main-label"
                },
                {
                    view: "button",
                    width: 150,
                    align: "right",
                    css: "top-button",
                    label: "<span>Quick Actions</span><span class='webix_icon wxi-angle-down'></span>"
                }
            ]
        },
        {
            margin: 20,
            cols: [
                first,
                second
            ]
        },
        {height: 10},
        {
            margin: 20,
            cols: [
                third,
                fourth,
                fifth,
                sixth
            ]
        }
    ]
});
