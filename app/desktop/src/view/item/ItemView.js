Ext.define('TutorialApp.view.item.ItemView',{
	extend: 'Ext.grid.Grid',
	xtype: 'itemview',
	cls: 'itemview',
	id:'itemViewGrid',
	requires: [

	],
	controller: {type: 'itemviewcontroller'},
	viewModel: {type: 'itemviewmodel'},
	store: {type: 'itemviewstore'},
    autoDestroy:true,
	columns: [
		{ 
			text: 'Name',
			dataIndex: 'name',
			width: 100,
			cell: {userCls: 'bold'}
		},
		{
			text: 'Description',
			dataIndex: 'description',width: 230
		},
		{
			text: 'Price',
			dataIndex: 'price',
			width: 150 
		},
        {
            text: 'Stock on Hand',
            dataIndex: 'stockOnHand',
            width: 150
        },
        {
            text: 'Usage unit',
            dataIndex: 'usageUnit',
            width: 150
        }

	],
	listeners: {
		select: 'onItemSelected'
	},
    plugins: {
        pagingtoolbar: true
    },
    // // selectionModel: 'spreadsheet'
    selectable: {
        columns: false, // Can select cells and rows, but not columns
        extensible: true, // Uses the draggable selection extender
		checkbox:true,
		mode:'multi',
        checkboxSelect:true

    },



});
