const
	_ 	   = require('../node_modules/lodash/dist/lodash'),
	Matrix = require('./Matrix');

var FloydWarshall = function (adjacencyMatrix, edges, shouldReconstructPaths) {

	var i,
		j,
		x,
		y,
		array,
		next;

	console.log(adjacencyMatrix);

	if (shouldReconstructPaths) {

		next = new Matrix(adjacencyMatrix.size, null);

		for (i = 0; i < edges.length; i++) {

			x = edges[i][0];
			y = edges[i][1];

			next.set(x, y, y);
		}

		this.data = adjacencyMatrix.clone();
		this.next = next;
	}
}

FloydWarshall.prototype = {

	compute: function () {

		var data, k, i, j, next, size;

		next = this.next;
		data = this.data;
		size = data.size;

		for (k = 1; k <= size; k++) {
			for (i = 1; i <= size; i++) {
				for (j = 1; j <= size; j++) {

					var distIK = data.get(i, k),
						distKJ = data.get(k, j);

					if (distIK + distKJ < data.get(i, j)) {
						data.set(i, j, distIK + distKJ);
						next.set(i, j, k);
					}
				}
			}
		}
		console.log(data);
		// console.log(next);
	},

	getPath: function (from, to) {

		var next = this.next,
			path = [];

		if (null === next.get(from, to)) {
			return path;
		}

		path.push(from);

		while (from != to) {
			from = next.get(from, to);
			path.push(from);
		}

		return path;
	}
};

module.exports = FloydWarshall;