const tasks = [
    // { id: "1", task: "Task", description: "Description", unscheduled: "Unscheduled/<br>Unassigned", $css: "semi-bold" },
    { id: "2", task: "Check email notification", description: "Sort all Letters by Importance", unscheduled: "Twice a day", css: "" },
    { id: "3", task: "Collect documents for business meetings", description: "Request information from an accountant", unscheduled: "Accountant, Lawyer", css: "" },
    { id: "4", task: "Meeting in conference hall", description: "Take all the necessary information for the meeting", unscheduled: "Secretary", css: "" }
];

export const assignmentsSection = {
    css:"webix_layout_custom",
    padding: {
        top: 5
    },
    rows: [
        {
            view: "label",
            height: 50,
            label: "Assignments",
            css:"list-label"
        },
        {
            template: "Unscheduled",
            type: "clean",
            css: "list-header orange",
            height: 30
        },
        {
            view: "datatable",
            borderless: true,
            scroll:"xy",
            css: "custom-table-clean",
            rowHeight:50,
            rowLineHeight:15,
            headerRowHeight:50,
            columns:[
                { 
                    template:`<span class="list-icon-check"><i class="fas fa-check"></i></span>`,
                    header:`<span class="list-icon-check"><i class="fas fa-check"></i></span>`,
                    css:"cell-icon-pos",
                    width:50
                },
                { id:"task", header:"Task", fillspace:true, minWidth:180 },
                { id:"description", header:"Description", fillspace:true, minWidth:210 },
                { id:"unscheduled", header:{text:"Unscheduled/<br>Unassigned", css:"header-multiline"}, fillspace:true, minWidth:130 }
            ],
            data: tasks
        }
    ]
}