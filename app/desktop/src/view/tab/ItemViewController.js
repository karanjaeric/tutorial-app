Ext.define('TutorialApp.view.item.ItemViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.itemviewcontroller',

	onItemSelected: function (sender, record) {

		var itemsGrid=Ext.getCmp('itemViewGrid');
        if (itemsGrid. getSelectable().hasSelection()) {
            var row = itemsGrid. getSelectable().getSelection()[0];
            console.log(itemsGrid. getSelectable().getSelectedRecord().get('name'));
        }
		Ext.Msg.confirm('Confirm', 'Are you sure you want to delete'+itemsGrid. getSelectable().getSelectedRecord().get('name')+' ?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
            var itemsGrid=Ext.getCmp('itemViewGrid');
            var selectionModel = itemsGrid. getSelectable();
            selectionModel.deselectAll();

			alert('test');
		}
	}
});
