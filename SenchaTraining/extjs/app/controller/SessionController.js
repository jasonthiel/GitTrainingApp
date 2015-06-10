// Controller used to manipulate and control flow of the UI.
Ext.define("SE.controller.SessionController", {
    extend: 'Ext.app.Controller',

    // references to all the stores that this controller can use.
    stores: [
        'Sessions', 'Presenters', 'SessionPresenters'
    ],

    // references to other components, namely views.
    refs: [
        {
            ref: 'details',            // local reference variable.
            selector: 'detailspanel'   // selector is alias of the component.
        },
        {
            ref: 'presenters',
            selector: 'presenters'
        },
        {
            ref: 'sessions',
            selector: 'sessiongridpanel'
        }
    ],

    // Handle double clicks on items in the gridpanel.
    onSessionItemDblClick: function (gridpanel, record, item, e) {
        // create popup window for editing session row.
        var formWindow = Ext.create('SE.view.EditSession');  

        // dive down into the window to get its lone form. 
        var form = formWindow.down('form');  //  if multiple forms, use id...

        // load the record into the form.  all matching fields are updated on the form.
        form.loadRecord(record);

        // display the newly populated form.
        formWindow.show();  
    },

    // Handle single click (select) on items in the gridpanel.
    onSessionSelect: function (rowmodel, record, index, eOpts) {

        // turn off layout events while we process session select.
        Ext.suspendLayouts();
        var sessionData = record.getData("id");
        var sessionId = sessionData.id;

        // figure out what presenter is for the session.
        // The presenter ids are in the Presenters store.
        var presenterIds = [];

        // reference to session presenter store that maps session to presenter
        // This is the xreference 'table'!
        var spstore = this.getSessionPresentersStore();

        // iterate over store.
        spstore.each(function(rec) {
            // if the sessionid of the record in the store matches the one in the chosen selection, keep it.
            if (rec.get("sessionId") === sessionId) {
                presenterIds.push(rec.get("presenterId"));
            }
        });

        // presenterIds contains all the presenters for the chosen session.
        // we want to use this to get the presenter specific data from presentersstore.
        // first clear any filter on the presenter store to eliminate previous filtered data.
        this.getPresentersStore().clearFilter();

        // create own filter to find presenter in presenters store whose id matches
        // the one associated with the session in the sessionpresenters store.
        this.getPresentersStore().filterBy(function(rec) {
            var foundMatch = false;
            for (var i = 0; i < presenterIds.length; i++) {
                if (rec.get("id") === presenterIds[i]) {
                    foundMatch = true;
                }
            }
            return foundMatch;
        });

        // Now fill in the detail on the right hand side.
        
        // get a reference to the details panel
        var detPanel = this.getDetails();

        // we also want to put in presenter data to show we can traverse other stores.
            
        // first put a new array on sessionData to hold presenters.
        sessionData.presenters = [];
        
        // now pull the presenters from the presenter store.
        // and stuff them into the array.
        this.getPresentersStore().each(function(presenterRecord) {
            sessionData.presenters.push(presenterRecord.getData());
        });

        // update the display template with data from record clicked.
        // includes the presenter array we just put on it.
        detPanel.update(sessionData);

        // finally resume handling events.
        Ext.resumeLayouts();
    },

    // upon initilization, we want to capture all events coming from views.
    // define this function to handle user events at initialization time.
    init: function() {

        //  'case' statement to handle various events on various screens.
        this.control({
            // handle events on the panel w/ this alias.
            "sessiongridpanel": {   

                // Handle double click on the session grid.
                itemdblclick: "onSessionItemDblClick",

                // handle when user select row in session grid.
                select: "onSessionSelect"
            }
        });
    }
});