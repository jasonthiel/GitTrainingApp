Ext.define('SE.store.SessionPresenters', {
    extend: 'Ext.data.Store',

    requires: [
        'SE.model.SessionPresenter',
        'Ext.util.Filter'
    ],

    model: 'SE.model.SessionPresenter',

    // loads data from proxy automatically.  not used, data hard coded.
    //autoload: true,

    // legacy for how to identify it.
    // usually use string in define above.
    storeId: 'SessionPresenters',

    pageSize: 999,

    // replace this with a proxy call to rest service.
    data: [// hard code data in for now...  map session to presenter.
    { id: 990, sessionId: 101, presenterId: 1001, sequence: 1, speakerName: "jt"},
    { id: 991, sessionId: 102, presenterId: 1002, sequence: 2, speakerName: "ct" },
    { id: 992, sessionId: 103, presenterId: 1003, sequence: 3, speakerName: "gt" }
    ]
});