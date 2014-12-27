const
    AdjacencyMatrix = require('./AdjacencyMatrix');


var Graph = function (vertices, edges) {

    if (false === (this instanceof Graph)) {
        return new Graph (vertices, edges);
    }

    var distances,
        i,
        x,
        y;

    distances = new AdjacencyMatrix(vertices.length);

    for (i = 0; i < edges.length; i++) {

        x = edges[i][0];
        y = edges[i][1];

        // console.log(x, y);

        distances
            .set(x, y, 1)
            .set(y, x, 1);
    }

    this.vertices  = vertices;
    this.distances = distances;
}

module.exports = Graph;