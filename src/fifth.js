const data = [
    {
        id: "5.1",
        sum: "0",
        jobs: "0",
        color: "green",
        label: "Next 7 Days"
    },
    {
        id: "5.2",
        sum: "0",
        jobs: "0",
        color: "bright-blue",
        label: "8-14 days"
    },
    {
        id: "5.3",
        sum: "0",
        jobs: "0",
        color: "gray",
        label: "Unscheduled"
    }
]

export const fifth = {
    type: "section",
    padding: {
        top: 5,
        bottom: 10
    },
    rows: [
        {
            paddingX: 20,
            rows: [
                {
                    view: "label",
                    height: 50,
                    label: "Upcoming Jobs",
                    borderless: true,
                },
                {
                    view: "list",
                    scroll: false,
                    borderless: true,
                    type: {
                        templateStart: "<div webix_l_id='#id#' class='list-row'>",
                        template(obj) {
                            const html =
                                `
        <div class="list-col-2 semi-bold font-16">
        <div>
                           $ ${obj.sum}
        </div>
        
        <div class= "label-secondary gray">
                            ${obj.jobs} invoices
        </div>
         </div>
        <div class="list-col-2 text-right"> <span class="color-item color-${obj.color}"> ${obj.label} </span> </div>
        `
                            return html
                        },
                        templateEnd: "</div>"
                    },
                    data: data,
                },
            ]
        },
        {
            type: "clean",
            rows: [
                {
                    css: "list-header",
                    paddingX: 20,
                    cols: [
                        {
                            template: "Customer",
                            type: "clean",
                            autoheight: true,
                            css: "gray"
                        },
                        {
                            template: "Amount/time",
                            type: "clean",
                            autoheight: true,
                            css: "text-right gray"
                        }
                    ]
                },
                {},
                {
                    cols: [
                        {},
                        {
                            view: "icon",
                            icon: "fas fa-briefcase",
                            disabled: true
                        },
                        {}
                    ]
                },
                {
                    template: "No upcoming jobs",
                    borderless: true,
                    css: "text-center"
                },
                {}
            ]
        },
        {
            view: "button",
            type: "icon",
            label: "<span>View All Jobs</span><span class='webix_icon wxi-angle-right'></span>",
            css: "section-bottom-button"
        }
    ]
}