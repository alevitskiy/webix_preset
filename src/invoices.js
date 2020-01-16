const data = [
    {
        id: "4.1",
        sum: "1,044",
        invoice: "3",
        color: "red",
        num: "50+"
    },
    {
        id: "4.2",
        sum: "100",
        invoice: "1",
        color: "yellow",
        num: "20-30"
    },
    {
        id: "4.3",
        sum: "324",
        invoice: "0",
        color: "blue",
        num: "<20"
    }
]

const data2 = [
    {id: "4.2.1", customer: "Alex Smith", sum: "300", ago: "6"},
    {id: "4.2.2", customer: "Henry Jones", sum: "100", ago: "5"},
    {id: "4.2.3", customer: "Geoffrey Anderson", sum: "221", ago: "7"},
    {id: "4.2.4", customer: "Jane Clark", sum: "479", ago: "3"}
]

export const invoicesSection = {
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
                    scroll: "auto",
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
            css: "webix_transparent"
        }
    ]
}