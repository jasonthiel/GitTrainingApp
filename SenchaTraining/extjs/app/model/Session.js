Ext.define('SE.model.Session', {
    extend: 'Ext.data.Model',

    // Define the fields that will be available to the UI.
    // some of these are from the actual data, others are built from
    // fields in the data.
    fields: ['id', 'presenter', 'taken', 'description',
        // name is an expanded object to allow for customized sort.
        // look up asUCText:  upper case text:  basically upcases to ensure a = A....
        { name: 'name', sortType: 'asUCText' },

        // coursetaken is converts boolean to show "Completed" for true
        // "NOT Completed" for false.
        {
            convert: function (v, rec) {
                if (rec.get('taken') == true)
                    return "Yes";
                else
                    return "No";
            },
            name: 'coursetaken',
            type: 'string'
        },
        {   // this maps the completed field in the store.  we need this to be used in the completeDate and completeTime converters.
            dateFormat: 'c',
            name: 'completed',
            sortType: 'asDate',
            type: 'date'
        },

        {   // date part of completed.  NOTE:  not in store.
            convert: function (v, rec) {
                var convertT = Ext.util.Format.dateRenderer('m/d/Y'),
                value = convertT(rec.get('completed'));
                return value;
            },
            name: 'completeDate',
            type: 'string'
        },

        {   // time part of completed.  NOTE:  not in store.
            convert: function (v, rec) {
                var convertT = Ext.util.Format.dateRenderer('g:i A'),
                value = convertT(rec.get('completed'));
                return value;
            },
            name: 'completeTime',
            type: 'string'
        }
    ]
});