import "./libs/webix/webix.css";
import "./libs/fontawesome-free-5.12.0-web/css/all.css";

// CSS
import "./assets/css/list.css";
import "./assets/css/main.css";

//JS
import {actionsSection} from "./actions.js";
import {assignmentsSection} from "./assignments.js";
import {balancesSection} from "./balances.js";
import {invoicesSection} from "./invoices.js";
import {jobsSection} from "./jobs.js";
import {hoursSection} from "./hours.js";

webix.ready(() => {

    // available with Webix Pro
    // if (!webix.env.touch && webix.env.scrollSize)
    //     webix.CustomScroll.init();

    webix.ui({
        padding: 10,
        type: "wide",
        margin: 20,
        rows: [
            {
                cols: [
                    {
                        view: "label",
                        label: "Activities of  the day",
                        css: "font-16"
                    },
                    {
                        view: "button",
                        width: 150,
                        align: "right",
                        css: "webix_primary",
                        label: "<span>Assignements</span><span class='webix_icon wxi-angle-down'></span>"
                    }
                ]
            },
            {
                margin: 20,
                minHeight:200,
                cols: [
                    actionsSection,
                    assignmentsSection
                ]
            },
            {
                margin: 20,
                cols: [
                    balancesSection,
                    invoicesSection,
                    jobsSection,
                    hoursSection
                ]
            }
        ]
    });
}); 
