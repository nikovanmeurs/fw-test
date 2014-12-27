const
	_ 		= require('../node_modules/lodash/dist/lodash'),
	Matrix 	= require('./Matrix');

var AdjacencyMatrix;

AdjacencyMatrix = function (size) {

	var i, j, matrix;

	matrix = [];

	for (var i = 0; i < size; i++) {

		matrix.push([]);

		for (var j = 0; j < size; j++) {
			matrix[i].push(i == j ? 0 : Infinity);
		}
	}

	this.data = matrix;
	this.size = size;
};

AdjacencyMatrix.prototype = Matrix.prototype;

module.exports = AdjacencyMatrix;