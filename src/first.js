const data = [
    { id: "item1", type: "folder", icon: "far fa-calendar", class: "item-violet", num: "44", value: "Scheduled items overdue", data: [
        {id: "item1.1", value: "Scheduled item 1"},
        {id: "item1.2", value: "Scheduled item 2"}
    ] },
    { id: "item2", icon: "fas fa-shopping-bag", type: "folder", class: "item-red", num: "11", value: "Jobs ending within 30 days", data: [
        {id: "item2.1", value: "Job 1"},
        {id: "item2.2", value: "Job 2"}
    ] },
    { id: "item3", icon: "fas fa-file", num: "2", class: "item-green", value: "Jobs waiting for invoicing", data: [
        {id: "item3.1", value: "Job 1"},
        {id: "item3.2", value: "Job 2"}
    ] },
    { id: "item4", icon: "fas fa-user", num: "41", class: "item-orange", value: "Unassigned sheduled items", data: [
        {id: "item4.1", value: "Item 1"},
        {id: "item4.2", value: "Item 2"}
    ] },
    { id: "item5", icon: "far fa-calendar", num: "1", class: "item-blue", value: "Approved quotes to convert to jobs", data: [
        {id: "item5.1", value: "Quote 1"},
        {id: "item5.2", value: "Quote 2"}
    ] },
    { id: "item6", icon: "fas fa-clipboard-list", class: "item-violet", num: "1", value: "Requests with completed assessements", data: [
        {id: "item6.1", value: "Request 1"},
        {id: "item6.2", value: "Request 2"}
    ] },
]

export const first = {
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
                    label: "Recomended actions",
                }
            ]
        },
        {
            paddingX: 10,
            rows: [
                {
                    view: "grouplist",
                    scroll: false,
                    borderless: true,
                    autoheight: true,
                    data: data,
                    css: "custom-list",
                    item: {
                        height: 50,
                        template(obj) {
                            var html;        
                            if(obj.$level != 1){
                                html = obj.value
                            } else {
                                html = `
                                <span class="${obj.class}">
                                    <span class="list-item-icon">
                                        <span class="${obj.icon}"></span> 
                                    </span>
                                    
                                    <strong>${obj.num}</strong>
                                </span> -  ${obj.value}
                                `;
                            }                    
                            return html
                        }
                    }
                }
            ]
        },
        {}
    ],
}

