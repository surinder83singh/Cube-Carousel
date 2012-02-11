function _dir(d){
	if(!console){
		return;
	}	
	if(Ext.isObject(d)){
		console.dir(d);		
	}else{
		console.log(d);		
	}
}
Ext.setup({
	tabletStartupScreen: 'Default-Portrait~ipad.jpg',
	phoneStartupScreen: 'Default.jpg',
	icon: 'icon.jpg',
	glossOnIcon: false,
	onReady: function () {
		// Create a Carousel of Items
		var imagePath = 'images/iphone/';
		if (Ext.is.Desktop || (window.devicePixelRatio && window.devicePixelRatio > 1)) {
			imagePath = 'images/iphone4/';
		}
		var tabpanel = new Ext.TabPanel({
			tabBar: {
				dock: 'bottom',
				layout: {
					pack: 'center'
				}
			},
			cls: 'imgOuter',
			html: '<div style="background-image:url(' + imagePath + 'cubeFace2.jpg)" class="img"></div>',
			items: [{
				iconCls: 'bookmarks',
				title: 'Bookmarks'
			},{
				iconCls: 'download',
				title: 'Download'
			},{
				iconCls: 'favorites',
				title: 'Favorites'
			},{
				iconCls: 'info',
				title: 'Info'
			},{
				iconCls: 'more',
				title: 'More'
			},{
				iconCls: 'search',
				title: 'Search'
			},{
				iconCls: 'settings',
				title: 'Settings'
			},
			],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'top',
				layout: {
					pack: 'center'
				},
				defaults: {
					iconMask: true,
					ui: 'plain'
				},
				items: [{
					iconCls: 'action'
				},{
					iconCls: 'add'
				},{
					iconCls: 'arrow_up'
				},{
					iconCls: 'arrow_right'
				},{
					iconCls: 'arrow_down'
				},{
					iconCls: 'arrow_left'
				},{
					iconCls: 'compose'
				}]
			}]
		});
		Ext.regModel('Ranks', {
			fields: [{
				name: 'rank',
				type: 'string'
			},{
				name: 'title',
				type: 'string'
			}]
		});
		var ranksStore = new Ext.data.JsonStore({
			data: [{
				rank: 'master',
				title: 'Master'
			},{
				rank: 'padawan',
				title: 'Student'
			},{
				rank: 'teacher',
				title: 'Instructor'
			},{
				rank: 'aid',
				title: 'Assistant'
			}],
			model: 'Ranks',
			autoLoad: true,
			autoDestroy: true
		});
		var formBase = {
			scroll: 'vertical',
			items: [{
				xtype: 'fieldset',
				title: 'Personal Info',
				instructions: 'Please enter the information above.',
				defaults: {
					required: true,
					labelAlign: 'left',
					labelWidth: '40%'
				},
				items: [{
					xtype: 'textfield',
					name: 'name',
					label: 'Name',
					useClearIcon: true,
					autoCapitalize: false
				},{
					xtype: 'passwordfield',
					name: 'password',
					label: 'Password',
					useClearIcon: false
				},{
					xtype: 'textfield',
					name: 'disabled',
					label: 'Disabled',
					disabled: true,
					useClearIcon: true
				},{
					xtype: 'emailfield',
					name: 'email',
					label: 'Email',
					placeHolder: 'you@sencha.com',
					useClearIcon: true
				},{
					xtype: 'urlfield',
					name: 'url',
					label: 'Url',
					placeHolder: 'http://sencha.com',
					useClearIcon: true
				},{
					xtype: 'checkboxfield',
					name: 'cool',
					label: 'Cool',
					value: true
				},{
					xtype: 'spinnerfield',
					name: 'spinner',
					label: 'Spinner'
				},{
					xtype: 'selectfield',
					name: 'rank',
					label: 'Rank',
					valueField: 'rank',
					displayField: 'title',
					store: ranksStore,
					tpl: '<tpl for=".">' + '<tpl if="this.group != values.group">' + '<tpl exec="this.group = values.group"></tpl>' + '<h1>{group}</h1>' + '</tpl>' + '<div class="x-combo-list-item">{text}</div>' + '</tpl>'
				},{
					xtype: 'hiddenfield',
					name: 'secret',
					value: 'false'
				},{
					xtype: 'textareafield',
					name: 'bio',
					label: 'Bio',
					maxLength: 60,
					maxRows: 10
				},{
					xtype: 'sliderfield',
					name: 'height',
					label: 'Height'
				},{
					xtype: 'togglefield',
					name: 'enable',
					label: 'Security Mode'
				},{
					xtype: 'radiofield',
					name: 'team',
					label: 'Red Team',
					value: 'redteam'
				},{
					xtype: 'radiofield',
					name: 'team',
					label: 'Blue Team',
					value: 'blueteam'
				}]
			},{
				xtype: 'fieldset',
				title: 'Favorite color',
				defaults: {
					xtype: 'radiofield'
				},
				items: [{
					name: 'color',
					label: 'Red',
					value: 'red'
				},{
					name: 'color',
					label: 'Green',
					checked: true,
					value: 'green'
				}]
			},{
				xtype: 'fieldset',
				title: 'HTML5',
				items: [{
					xtype: 'numberfield',
					name: 'number',
					label: 'Number',
					maxValue: 20,
					minValue: 2
				},{
					xtype: 'emailfield',
					name: 'email2',
					label: 'Email',
					useClearIcon: true
				},{
					xtype: 'urlfield',
					name: 'url2',
					label: 'URL',
					useClearIcon: true
				}]
			},{
				xtype: 'fieldset',
				title: 'Single Select (in fieldset)',
				items: [{
					xtype: 'selectfield',
					name: 'options',
					options: [{
						text: 'This is just a big select with text that is overflowing',
						value: '1'
					},
					{
						text: 'Another item',
						value: '2'
					}]
				}]
			},{
				xtype: 'fieldset',
				title: 'Single Text (in fieldset)',
				items: [{
					xtype: 'textfield',
					name: 'single_text',
					useClearIcon: true
				}]
			},{
				xtype: 'fieldset',
				title: 'Single Toggle (in fieldset)',
				items: [{
					xtype: 'togglefield',
					name: 'single_toggle',
					value: 1
				}]
			},{
				xtype: 'fieldset',
				title: 'Single Slider (in fieldset)',
				items: [{
					xtype: 'sliderfield',
					name: 'single_slider',
					value: 60
				}]
			}],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'top',
				title: 'Sample Form'
			},{
				xtype: 'toolbar',
				dock: 'bottom',
				items: [{
					text: 'Load Model',
					ui: 'round'
				},{
					xtype: 'spacer'
				},{
					text: 'Reset'
				},{
					text: 'Save',
					ui: 'confirm'
				}]
			}]
		};
		var carousel = new Ext.CubeCarousel({
			direction: 'horizontal',
			defaults: {
				cls: 'imgOuter'
			},
			items: [tabpanel, formBase, {
				html: '<div style="background-image:url(images/iphone/cubeFace3.jpg)" class="img" ></div>'
			},{
				html: '<div style="background-image:url(' + imagePath + 'cubeFace4.jpg)" class="img"></div>'
			},{
				html: '<div style="background-image:url(' + imagePath + 'cubeFace5.jpg)" class="img"></div>'
			},{
				html: '<div style="background-image:url(' + imagePath + 'cubeFace6.jpg)" class="img"></div>'
			},{
				html: '<div style="background-image:url(' + imagePath + 'cubeFace7.jpg)" class="img"></div>'
			},{
				html: '<div style="background-image:url(' + imagePath + 'cubeFace8.jpg)" class="img"></div>'
			},{
				html: '<div style="background-image:url(' + imagePath + 'cubeFace9.jpg)" class="img"></div>'
			}]
		});
		new Ext.Panel({
			fullscreen: true,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			defaults: {
				flex: 1
			},
			items: [carousel]
		});
	}
});