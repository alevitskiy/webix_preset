const data = [
    { id: "3.1", name: "Barbara Bradford", amount: "165" },
    { id: "3.2", name: "Company", amount: "102" },
    { id: "3.3", name: "David Lynch", amount: "252" },
    { id: "3.4", name: "Earl Devaney", amount: "571" }
]

export const third = {
    type: "section",
    autoheight: true,
    padding: {
        top: 5,
        bottom: 10
    },
    rows: [
        {
            paddingX: 20,
            cols: [
                {
                    view: "label",
                    height: 50,
                    label: "Outstanding balances",
                    borderless: true
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
                    borderless: "true",
                    rows: [
                        {
                            view: "label",
                            label: "$-9,044",
                            height: 32,
                            css: "num-large item-red"
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
                            css: "text-right num-large gray"
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
            type: "clean",
            rows: [
                {
                    css: "list-header",
                    height: 30,
                    paddingX: 20,
                    cols: [
                        {
                            template: "Customer",
                            type: "clean",
                            autoheight: true,
                            css: "gray"
                        },
                        {
                            template: "Amount",
                            type: "clean",
                            autoheight: true,
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
            css: "section-bottom-button"
        }
    ]
}