const
	Graph 			= require('./algorithm/Graph'),
	FloydWarshall 	= require('./algorithm/FloydWarshall');

var graph, fw, edges, vertices;

vertices = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
edges    = [ 
  [ 1, 4 ],
  [ 1, 2 ],
  [ 1, 7 ],
  [ 2, 7 ],
  [ 2, 3 ],
  [ 2, 17 ],
  [ 2, 6 ],
  [ 2, 4 ],
  [ 3, 17 ],
  [ 3, 6 ],
  [ 3, 10 ],
  [ 3, 5 ],
  [ 4, 5 ],
  [ 4, 6 ],
  [ 5, 6 ],
  [ 5, 10 ],
  [ 7, 17 ],
  [ 7, 9 ],
  [ 7, 16 ],
  [ 7, 8 ],
  [ 9, 16 ],
  [ 9, 18 ],
  [ 10, 12 ],
  [ 10, 11 ],
  [ 10, 17 ],
  [ 10, 13 ],
  [ 10, 19 ],
  [ 11, 20 ],
  [ 11, 19 ],
  [ 11, 12 ],
  [ 11, 14 ],
  [ 11, 15 ],
  [ 11, 13 ],
  [ 11, 21 ],
  [ 13, 14 ],
  [ 14, 20 ],
  [ 15, 19 ],
  [ 15, 16 ],
  [ 15, 21 ],
  [ 16, 17 ],
  [ 16, 18 ],
  [ 16, 19 ],
  [ 17, 19 ],
  [ 20, 21 ]
];
graph 	= new Graph(vertices, edges),
fw 		= new FloydWarshall(graph.distances, edges, true);

fw.compute();
console.log(fw.getPath(1, 21));