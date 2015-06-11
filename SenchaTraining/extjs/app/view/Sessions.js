// Grid Panel to show the sessions list.
Ext.define("SE.view.Sessions",
    {
        extend: 'Ext.grid.Panel',
        alias: 'widget.sessiongridpanel',   // allows controller to use 'sessiongridpanel'
        store: 'Sessions',  // refers to the store named "Sessions" defined in app.js.

        columns: [
//             {
//                 xtype: 'gridcolumn',
//                 dataIndex: 'id',
//                 text: 'UserId'
//             },
             {
                 xtype: 'gridcolumn',
                 dataIndex: 'name',
                 text: 'Name',
                 flex: 1,
                 minWidth: 100,   // fixes min column width
                 width: 75
             },
             {
                 xtype: 'gridcolumn',
                 dataIndex: 'presenter',
                 text: 'Presenter'
             },
             {
                 xtype: 'gridcolumn',
                 dataIndex: 'coursetaken',
                 text: 'Course Presented',
                 flex: 1
             },
            {
                xtype: 'gridcolumn',
                dataIndex: 'completeDate',
                text: 'Date Presented'
            }
            //,
            //{
            //    xtype: 'gridcolumn',
            //    dataIndex: 'completeTime',
            //    text: 'Time Completed'
            //}
        ],
        features: [
            {   // field you are grouping on is defined by group field in the store.
                ftype: 'grouping', // feature type
                groupHeaderTpl: [  // define a template for displaying the header that appears above each group.

                    '{[values.rows[0].get(\'coursetaken\')]} ({rows.length})'  // course taken defined as group field in store...
                ]
            }
        ]
    });
