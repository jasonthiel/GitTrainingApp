Ext.define('SE.model.SessionPresenter', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'sessionId',
            type: 'int'
        },
        {
            name: 'presenterId',
            type: 'int'
        },
        {
            name: 'sequence',
            sortType: 'asUCString'
        },
        {
            name: 'speakerName'
        }
    ]

});