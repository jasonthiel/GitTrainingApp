// details panel (right hand side of screen).
Ext.define('SE.view.Details', {
    extend: 'Ext.panel.Panel',  // NOTE:  not a grid.
    alias: 'widget.detailspanel',

    autoScroll: true,  // add scroller if necessary.
    bodyPadding: 10,
    
    // Template to allow us to pull stuff from store to display.
    tpl: [
        // NOTE:  you can reference .css in index.html, you can use the classes/etc in here(these snippets are part of index.html).
        '<br/> Course Title: {title}',
        '<br/> Course Description: {description}',
        '<br/>',
        '<tpl for="presenters">',  // template iterator to iterate over the presenters array.
        '   <br/>Presenter: {first} {last}',
        '</tpl>'

    ]
})