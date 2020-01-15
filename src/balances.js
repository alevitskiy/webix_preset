const data = [
    { id: "3.1", name: "Barbara Bradford", amount: "165" },
    { id: "3.2", name: "Company", amount: "102" },
    { id: "3.3", name: "David Lynch", amount: "252" },
    { id: "3.4", name: "Earl Devaney", amount: "571" }
]

export const balancesSection = {
    type: "section",
    autoheight: true,
    padding: {
        top: 5,
    },
    rows: [
        {
            paddingX: 20,
            rows: [
                {
                    view: "label",
                    height: 50,
                    label: "Outstanding balances"
                }
            ]
        },
        {
            paddingX: 20,
            padding: {
                bottom: 15
            },
            cols: [
                {
                    rows: [
                        {
                            view: "label",
                            label: "$-9,044",
                            height: 32,
                            css: "font-18 item-red"
                        },
                        {
                            view: "label",
                            label: "Total outstanding",
                            height: 16,
                            css: "label-secondary uppercase gray"
                        }
                    ]
                },
                {
                    rows: [
                        {
                            view: "label",
                            label: "8",
                            height: 32,
                            css: "text-right font-18 gray"
                        },
                        {
                            view: "label",
                            label: "Customers",
                            height: 16,
                            css: "text-right label-secondary uppercase gray",
                        }
                    ]
                }
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
                            template: "Amount",
                            type: "clean",
                            css: "text-right gray"
                        }
                    ]
                },
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
                        height: 40,
                        template(obj) {
                            const html =
                                `
                <div class="list-col-2 semi-bold"> ${obj.name}</div>
                <div class="list-col-2 semi-bold text-right">$ - ${obj.amount}</div>
                `
                            return html
                        }
                    },
                    data: data
                }
            ]
        },
        {},
        {
            view: "button",
            type: "icon",
            label: "<span>View All Customers</span><span class='webix_icon wxi-angle-right'></span>",
            css: "webix_transparent"
        }
    ]
}