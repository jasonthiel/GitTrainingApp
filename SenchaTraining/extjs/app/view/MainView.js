// Main view of application. 
Ext.define('SE.view.MainView', {
    extend: "Ext.container.Viewport",
    layout: 
    {
        type: 'border'
    },
    // all sub components of the main view.
    items: [
    {
        region: 'west',  // left hand side.
        xtype: 'panel',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        split: 'true',
        flex: 1,
        items: [
                // Sessions on top.
                {
                    xtype: "sessiongridpanel",  // alias of SE.view.Sessions
                    flex: 3
                },
                // line.
                {
                    xtype: 'splitter',
                    width: '1'
                },
                // presenters on bottom.
                {
                    xtype: 'presenters',    // alias of SE.view.Presenters
                    flex: 1
                }
            ]
        },
        {
            region: 'center',
            xtype: 'detailspanel',
            flex: 1,
            title: 'details',
            collapsible: true,
            collapseDirection: 'right'
        }
    ]        
});
