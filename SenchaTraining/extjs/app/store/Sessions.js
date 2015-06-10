Ext.define('SE.store.Sessions', {
    extend: 'Ext.data.Store',
    model: 'SE.model.Session',

    // basically default sorter.  user will be able to resort clicking grid headers.
    sorters: [
        { property: 'name' }
    ],

    // groupField is used to add groupings to the data.
    groupField: 'coursetaken',

    //proxy: {...}  use proxy in model for real application.
        data: [// hard code data in for now...
            { id: 101, name: 'Introduction to Git', presenter: 'Jason McFall', taken: true, completed: "2015-06-09T10:00:00", description: "General intro to Git." },
            { id: 102, name: 'Introduction to GitFlow', presenter: 'Jason Thiel', taken: false, completed: "2016-02-01T10:00:00", description: "Introduction to Git Flow work flow." },
            { id: 103, name: 'Git Mastery', presenter: 'Jason McFall', taken: false, completed: "2016-03-01T10:00:00", description:  "All things Git." }
        ]
})