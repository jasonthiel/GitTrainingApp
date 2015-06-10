// Grid panel to display info about the presenters (lower left)
Ext.define('SE.view.Presenters', {
extend: 'Ext.grid.Panel',
title: 'Presenter(s)',
alias: 'widget.presenters',   // allows controller to use 'presenters' to reference this panel.
store: "Presenters",
columns: [
    {
        xtype: 'gridcolumn',
        dataIndex: 'fullName',
        text: "Presenter Name",
        flex: 1  // take up as all space if it can.
    },
    {
        xtype: 'numbercolumn',
        dataIndex: 'id',
        text: 'Presenter Id'
    }
]
})