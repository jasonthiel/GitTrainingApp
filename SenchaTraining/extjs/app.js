
// enagle loader to dynamically load dependencies.
Ext.Loader.setConfig({
    enabled: true
});

// Here is our main application.
Ext.application(
{
    name: 'SE', // name of application

    requires: ['SE.view.MainView'], // load js we need ahead of time.  This is first screen we will see.

    // Controllers used by this app.
    controllers: [
        'SE.controller.SessionController'
    ],

    // Define the stores used by this application.
    stores: [
        'Sessions',  // app/store/Sessions.js
        'Presenters',  // app/store/Presenter.js
        'SessionPresenters'  // app/store/SessionPresenter.js
    ],

    // Define the models used by this application.
    models: [
        'Session',   // app/model/Session.js
        'Presenter',  // app/model/Presenter.js
        'SessionPresenter'  //  app/model/SessionPresenter.js
    ],

    // views used by this app.
    views : [
        'Sessions',  // main screen area to view session list.  
        'Presenters',  // main screen area to view presenter info.
        // it knows to use SE.view.Sessions SE.view is implied by name of app and structure of sencha app (has view sub dir).
        'EditSession',  // popup for editing a session.
        'Details'
    ],

    // run this function when app is loaded and ready to go.
    launch: function() { 
        // Create initial start up screen.
        Ext.create('SE.view.MainView'); 
    }
});