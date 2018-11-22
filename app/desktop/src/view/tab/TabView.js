Ext.define('TutorialApp.view.tab.TabView',{
	extend: 'Ext.tab.Panel',
	xtype: 'tabview',
	requires: [
	    'TutorialApp.view.item.ItemView'
    ],
    autoSize:true,
    scrollable:true,
    //fullscreen: true,
    tabBarPosition: 'top',
    items: [
        {
            title: 'Home',
            iconCls: 'home',
           // html: 'Home Screen',
            xtype:'itemview',

            closable:true
        },
        {
            title: 'Contact',
            iconCls: 'user',
            html: 'Contact Screen',

            closable:true
        },
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'button',
                text: 'Button 1'
            }]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                xtype: 'button',
                text: 'Button 1'
            }]
        }
    ]





});
