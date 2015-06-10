Ext.define('SE.store.Presenters', {
    extend: 'Ext.data.Store',

    requires: [
        'SE.model.Presenter',
        'Ext.util.Filter'
    ],

    model: 'SE.model.Presenter',

    // enable when we hook this up to real data source.
    // loads data from proxy automatically.
    //autoload: true,

    // legacy for how to identify it.
    // usually use string in define above.
    storeId: 'Presenters',

    pageSize: 999,

    filters: {
        filterFn: function (item) {
            // no records show on the first render.
            return false;
        }
    },


    // Replace this with a proxy to get real data from rest svc.
    data: [// hard code data in for now...
    { id: 1001, first: 'Jason', last: 'McFall'},
    { id: 1002, first: 'Jason', last: 'Thiel' },
    //{ id: 1003, first: 'Luke', last: 'Duke'}
    ]
});