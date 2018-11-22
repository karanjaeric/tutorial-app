Ext.define('TutorialApp.view.login.Login2', {
    extend: 'Ext.window.Window',
    xtype: 'login2',
    requires: [

        'Ext.form.Panel',
        'TutorialApp.view.login.LoginController'
    ],
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
    controller:'login',

    items: {
        xtype: 'formpanel',
        reference: 'formpanel',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,

            listeners: {
                tap: 'onLoginClick'
            }

        }
        ]
    }
});