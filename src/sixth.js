export const sixth = {
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
                    label: "Today's hours",
                    borderless: true,
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
                            template: "Name",
                            type: "clean",
                            css: "gray",
                            autoheight: true
                        },
                        {
                            template: "Time",
                            type: "clean",
                            autoheight: true,
                            css: "text-right gray"
                        }
                    ]
                }
            ]
        },        
        {},
        {
            cols: [
                {},
                {
                    view: "icon",
                    icon: "far fa-clock",
                    disabled: true
                },
                {}
            ]
        },
        {
            template: "No time entries today",
            borderless: true,
            css: "text-center"
        },
        {}
    ]
}