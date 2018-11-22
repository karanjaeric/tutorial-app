Ext.define('TutorialApp.view.item.ItemViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.itemviewstore',
    pageSize: 3,
	fields: [
		'name', 'email', 'phone'
	],
	data: { items: [
		{ name: 'Jean Luc',   description: "jeanluc.picard@enterprise.com", price: 10,stockOnHand:100,usageUnit:"kg" },
		{ name: 'Jean Luc',   description: "jeanluc.picard@enterprise.com", price: 10,stockOnHand:100,usageUnit:"kg" },
		{ name: 'Jean Luc',   description: "jeanluc.picard@enterprise.com", price: 10,stockOnHand:100,usageUnit:"kg" },
		{ name: 'Jean Luc',   description: "jeanluc.picard@enterprise.com", price: 10,stockOnHand:100,usageUnit:"kg" },
		{ name: 'Jean Luc',   description: "jeanluc.picard@enterprise.com", price: 10,stockOnHand:100,usageUnit:"kg" },
		{ name: 'Jean Luc',   description: "jeanluc.picard@enterprise.com", price: 10,stockOnHand:100,usageUnit:"kg" }


	]},
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
