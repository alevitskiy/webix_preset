const tasks = [
    { id: "1", task: "Task", description: "Description", unscheduled: "Unscheduled/<br>Unassigned", css: "semi-bold" },
    { id: "2", task: "Check email notification", description: "Sort all Letters by Importance", unscheduled: "Twice a day", css: "" },
    { id: "3", task: "Collect documents for business meetings", description: "Request information from an accountant", unscheduled: "Accountant, Lawyer", css: "" },
    { id: "4", task: "Meeting in conference hall", description: "Take all the necessary information for the meeting", unscheduled: "Secretary", css: "" }
];

export const assignmentsSection = {
    type: "section",
    minWidth: 600,
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
            borderless: true,
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
                                borderless: true,
                                autoheight: true,
                                css: "custom-list-2",
                                type: {
                                    height: 50,
                                    template(obj) {
                                        const html = `
                    <div class="list-col-3 ${obj.css}"><span class="list-icon-check"><i class="fas fa-check"></i></span> <span '>${obj.task}</span></div> 
                    <div class="list-col-3 ${obj.css}">${obj.description}</div>
                    <div class="list-col-3 ${obj.css}">${obj.unscheduled}</div>
                    `
                                        return html
                                    },
                                },
                                data: tasks
                            }
                        ]
                    },
                    {}
                ]
            }
        }
    ]
}