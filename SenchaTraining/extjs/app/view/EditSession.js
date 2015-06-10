// View for pop up edit window of the session list.
Ext.define("SE.view.EditSession",
 {
     extend: 'Ext.window.Window',
     alias: 'widget.editsession',
     padding: 5,
     width: 600,
     title: 'Edit Course',
     model: 'true',
     items: [
         {   // a submittable form within the window.
             // i.e.  the items the user will edit.
             xtype: 'form',
             bodyPadding: 10,
             title: "",

             // Define some default attributes for all items in the contained items array.
             defaults: {
                 labelWidth: 100,
                 margin: '0 0 10 0',  // push fields apart.
                 anchor: '90%'  // only take up 90% of given space (leaves white space after input box)
             },
             items: [   // container to hold the fields within the form.
                 {
                     xtype: 'textfield',
                     fieldLabel: 'Course Name',
                     name: 'name',
                     allowBlank: false   // validation rule for validating on save.
                 },
                 {
                     xtype: 'checkboxfield',
                     fieldLabel: 'Course Completed',
                     name: 'taken'
                 }
             ]
         },

         {
             // container to hold and layout the save/cancel buttons.
             xtype: 'container',  // container to allow layout mgmt.
             padding: '10 10 10 10',
             layout: {
                 type: 'hbox',
                 align: 'middle',
                 pack: 'center'
             },
             items: [
                 {
                     xtype: 'button',
                     text: 'Save',
                     margin: '5 5 5 5',
                     formBind: true,  // if form is invalid, disable the save button.  see allowBlank on course name field.
                     handler: function (button) {
                         debugger;
                         var form = button.up().up().down('form').getForm();  // go up two levels:  container-window.  then down into form.
                         if (form.isValid()) {
                             form.updateRecord(); // this updates the record.

                             // look into using the following when we hook this up to a real store.
                             // Ext.getStore('storea').reload();

                             // close the window 1 level up from the button.
                             button.up('window').destroy();
                         }
                     }
                 },
                 {
                     xtype: 'button',
                     text: 'Cancel',
                     margin: '5 5 5 5',
                     handler: function (button) {
                         // close the window 1 level up from the button.
                         button.up('window').destroy();
                     }
                 }]
           }]
 });

