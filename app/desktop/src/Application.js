Ext.define('TutorialApp.Application', {
    extend: 'Ext.app.Application',

    name: 'TutorialApp',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        this.removeSplash()

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype:'login'
        });

    },
    removeSplash: function () {
        Ext.getBody().removeCls('launching')
        var elem = document.getElementById("splash")
        elem.parentNode.removeChild(elem)
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});


// Ext.define('TutorialApp.Application', {
// 	extend: 'Ext.app.Application',
// 	name: 'TutorialApp',
// 	requires: ['TutorialApp.*'],
// 	// defaultToken: 'personnelview',
//

//
// 	launch: function () {
// 		this.removeSplash()
// 		var whichView = 'login'
// 		Ext.Viewport.add([{xtype: whichView}])
// 	},
//
// 	onAppUpdate: function () {
// 		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
// 			function (choice) {
// 				if (choice === 'yes') {
// 					window.location.reload();
// 				}
// 			}
// 		);
// 	}
// });
