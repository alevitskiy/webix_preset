const data = [
    { id: "1", task: "Task", description: "Description", unscheduled: "Unscheduled/<br>Unassigned" }
];
export const second = {
    type: "section",
    padding: {
        top: 5
    },
    rows: [
        {
            paddingX: 20,
            cols: [
                {
                    view: "label",
                    height: 50,
                    label: "Assignements",
                }
            ]
        },
        {
            view: "scrollview",
            borderless: "true",
            body: {
                type: "clean",
                rows: [
                    {
                        css: "list-header orange",
                        height: 30,
                        padding: {
                            left: 20
                        },
                        rows: [
                            {
                                template: "Unscheduled",
                                type: "clean",
                            }
                        ]                        
                    },
                    {
                        padding: {
                            left: 20,
                            top: 5
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
                                        const html = `
                    <div class="list-col-3"><span class="list-row-icon"><i class="fas fa-check"></i></span> <span style='vertical-align: top; font-weight: 500'>${obj.task}</span></div> 
                    <div class="list-col-3 gray">${obj.description}</div>
                    <div class="list-col-3 gray">${obj.unscheduled}</div>
                    `
                                        return html
                                    },
                                },
                                data: data
                            }
                        ]
                    },
                    {}
                ]
            }
        }
    ]
}