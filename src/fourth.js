const data = [
    {
        id: "4.1",
        sum: "1,353",
        invoice: "5",
        color: "red",
        num: "60+"
    },
    {
        id: "4.2",
        sum: "0",
        invoice: "0",
        color: "yellow",
        num: "30-40"
    },
    {
        id: "4.3",
        sum: "495",
        invoice: "2",
        color: "blue",
        num: "<30"
    }
]

const data2 = [
    {id: "4.2.1", customer: "Thrift Auto Parts", sum: "625", ago: "8"},
    {id: "4.2.2", customer: "David Lynch", sum: "104", ago: "7"},
    {id: "4.2.3", customer: "Willie Gonzalez", sum: "100", ago: "7"},

]

export const fourth = {
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
                    label: "Past due invoices"
                },
                {
                    view: "list",
                    scroll: false,
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
                            ${obj.invoice} invoices
        </div>
         </div>
        <div class="list-col-2 text-right"> <span class="color-item color-${obj.color}"> ${obj.num} </span> </div>
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
                    scroll: false,
                    borderless: true,
                    autoheight: true,
                    css: "custom-list-2",
                    type: {
                        height: 50,
                        template(obj) {
                            const html =
                                `
        <div class="list-col-2 semi-bold"> ${obj.customer}</div>
        <div class="list-col-2 text-right">
        <div class="semi-bold">$ ${obj.sum}</div>
        <div style="padding-top:5px">${obj.ago} months ago</div>
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
            label: "<span>View All Invoices</span><span class='webix_icon wxi-angle-right'></span>",
            css: "section-bottom-button"
        }
    ]
}