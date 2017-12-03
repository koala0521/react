let data = [
    {date: '今天', time: '11:20', name: 'Matt', content: '你好', avatar: require("parc/img/matt.jpg")},
    {
        date: '今天', time: '11:20', name: 'Jenny', content: '你好', avatar: require("parc/img/molly.jpg"),
        subComment: [
            { time: '11:20',name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg")},
            { time: '11:20',name: 'Jenny', content: '你好', avatar: require("parc/img/jenny.jpg")},
            { time: '11:20',name: 'Elliot', content: '你好', avatar: require("parc/img/elliot.jpg")},
            { time: '11:20',name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")}
        ]
    },
    {date: '今天', time: '11:20', name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")},
    {date: '今天', time: '11:20', name: 'Elliot', content: '你好', avatar: require("parc/img/matt.jpg")},
    {date: '昨天', time: '11:20', name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg")},
    {date: '昨天', time: '11:20', name: 'Mike', content: '你好', avatar: require("parc/img/matt.jpg")},
    {date: '前天', time: '11:20', name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg")},
    {
        date: '前天', time: '11:20', name: 'Hurley', content: '你好', avatar: require("parc/img/matt.jpg"),
        subComment: [
            {
                time: '11:20',name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg"),
                subComment: [
                    {
                         time: '11:20',name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg"),
                        subComment: [
                            { time: '11:20',name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")}
                        ]
                    },
                    { time: '11:20',name: 'Jenny', content: '你好', avatar: require("parc/img/jenny.jpg")},
                    { time: '11:20',name: 'Elliot', content: '你好', avatar: require("parc/img/elliot.jpg")},
                    { time: '11:20',name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")}
                ]
            }
        ]
    },
    {date: '前天',  time: '11:20', name: 'Ben', content: '你好', avatar: require("parc/img/matt.jpg")},
    {date: '前天',  time: '11:20', name: 'Jane', content: '你好', avatar: require("parc/img/molly.jpg")}
];
