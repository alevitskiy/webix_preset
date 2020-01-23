const data2 = [
    {id: "6.1", customer: "Alex Smith", hours: "1"},
    {id: "6.2", customer: "Henry Jones", hours: "3"},
    {id: "6.3", customer: "Geoffrey Anderson", hours: "2.5"},
    {id: "6.4", customer: "John Moore", hours: "4"},
    {id: "6.5", customer: "William Thompson", hours: "1"},
    {id: "6.6", customer: "Jane Clark", hours: "5"}
]

export const hoursSection = {
    // type: "section", // invalid type (that's why background is white), only `template` supports it
    css:"webix_layout_custom",
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
                    label: "Today's hours"
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
                            template: "Name",
                            type: "clean",
                            css: "gray",
                        },
                        {
                            template: "Time",
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
        {}
    ]
}