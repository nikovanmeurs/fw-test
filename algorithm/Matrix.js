const
	_ = require('../node_modules/lodash/dist/lodash');

var Matrix;

Matrix = function (size, defaultValue) {

	var i, j, matrix;

	matrix = [];

	for (var i = 0; i < size; i++) {

		matrix.push([]);

		for (var j = 0; j < size; j++) {

			matrix[i].push(defaultValue);
		}
	}

	this.data = matrix;
	this.size = size;
};

Matrix.prototype = {

	clone: function () {

		var matrix;

		matrix 		= new Matrix(this.size);
		matrix.data = _.cloneDeep(this.data);

		return matrix;
	},

	set: function (xIndex, yIndex, value) {

		var data = this.data,
			size = data.length;

		if (false === (xIndex - 1 < size && yIndex - 1 < size)) {
			throw new Error('Index out of bounds');
		}

		if (xIndex != yIndex) {
			data[xIndex - 1][yIndex - 1] = value;
		}

		return this;
	},

	get: function (xIndex, yIndex) {

		var size = this.data.length;

		if (false === (xIndex - 1 < size && yIndex - 1 < size)) {
			throw new Error('Index out of bounds');
		}

		return this.data[xIndex - 1][yIndex - 1]
	}
};

module.exports = Matrix;