const data = [
    {
        id: "5.1",
        sum: "544",
        jobs: "3",
        color: "green",
        label: "Next 2 Days"
    },
    {
        id: "5.2",
        sum: "100",
        jobs: "1",
        color: "bright-blue",
        label: "Next 2 Days"
    },
    {
        id: "5.3",
        sum: "124",
        jobs: "0",
        color: "gray",
        label: "Next 2 Days"
    }
]

const data2 = [
    { id: "5.1.1", customer: "Alex Smith", hours: "1" },
]

export const jobsSection = {
    type: "section",
    padding: {
        top: 5
    },
    rows: [
        {
            paddingX: 20,
            rows: [
                {
                    view: "label",
                    height: 50,
                    label: "Upcoming Jobs"
                },
                {
                    view: "list",
                    borderless: true,
                    autoheight: true,
                    css: "custom-list-2",
                    type: {
                        height: 50,
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
                        }
                    },
                    data: data,
                },
            ]
        },
        {
            rows: [
                {
                    css: "list-header",
                    height: 30,
                    paddingX: 20,
                    cols: [
                        {
                            template: "Customer",
                            type: "clean",
                            css: "gray"
                        },
                        {
                            template: "Amount/time",
                            type: "clean",
                            css: "text-right gray"
                        }
                    ]
                }

            ]
        },
        {
            paddingX: 20,
            padding: {
                top: 10
            },
            cols: [
                {
                    view: "list",
                    borderless: true,
                    autoheight: true,
                    css: "custom-list-2",
                    type: {
                        height: 50,
                        template(obj) {
                            const html =
                                `
                                    <div class="list-col-2 semi-bold"> 
                                        ${obj.customer}
                                    </div>

                                    <div class="list-col-2 text-right semi-bold"> 
                                    ${obj.hours} h 
                                    </div>
                                `
                            return html
                        }
                    },
                    data: data2
                }
            ]
        },
        {},
        {
            view: "button",
            type: "icon",
            label: "<span>View All Jobs</span><span class='webix_icon wxi-angle-right'></span>",
            css: "webix_transparent"
        }
    ]
}