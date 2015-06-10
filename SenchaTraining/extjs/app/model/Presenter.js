Ext.define('SE.model.Presenter', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'first'
        },
        {
            name: 'last'
        },

        // Custom field created by combining first and last name.
        {
            convert: function(v, rec) {
                return rec.get("first") + ' ' + rec.get("last");
            },
            name: 'fullName'
        }
    ]

});