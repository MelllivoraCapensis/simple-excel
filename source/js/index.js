var table = new Vue({
	el: '#table',
	data: {
		columnTitles: [
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		],
		rowNum: 10,
	},
	created: function() {
		this.values = this.getInitialValues();
	},
	methods: {
		getValue: function(i, j) {
			return this.values[i][j];
		},
		getInitialValues: function () {
			var m = this.rowNum;
			var n = this.columnTitles.length;
			var values = [];
			for(var i = 0; i < m; i ++) {
				var row = [];
				for(var j = 0; j < n; j ++) {
					row.push(Math.ceil(Math.random() * 100));
				}
				values.push(row);
			}
			return values;
		},

	},
	computed: {

	},
	watch : {

	}
});
