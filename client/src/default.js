
/////////////////////
//
// default.js
//
// This file is responsible for the rendering of nodes on a screen, on initial load
//
/////////////////////
//

var graphData = {
    "graph": {
        "name": "A Sample Network (move nodes to make a ring)",
        "r": 250,
        "drag": true,
        "width": 500,
        "height": 500
    },
    "nodes": [
        {
            "name": "0",
            "color": "blue",
            "shape": "square",
            "y": 105.0,
            "x": 104.0,
            "id": 0,
            "size": 10
        },
        {
            "name": "1",
            "color": "black",
            "shape": "circle",
            "y": 215.0,
            "x": 360.0,
            "id": 1,
            "size": 10
        },
        {
            "name": "2",
            "color": "red",
            "shape": "square",
            "y": 215.0,
            "x": 260.0,
            "id": 2,
            "size": 10
        },
        {
            "name": "3",
            "color": "green",
            "shape": "circle",
            "y": 315.0,
            "x": 10.0,
            "id": 3,
            "size": 15
        }
    ],
    "links": [
        {
            "source": 0,
            "target": 1
        },
        {
            "source": 0,
            "target": 2
        },
        {
            "source": 3,
            "target": 2
        },
        {
            "source": 3,
            "target": 1
        }
    ]
}

var newMap = generateTopology(50, 5, {

  graphSpecific: {
    r: 4,
    width: 700,
    height: 500
  },

  nodeSpecific: {
    color: 'blue',
    shape: 'circle',
    size: 10
  }

});

console.log("GENERATED");
console.log(newMap); 

// displayNetwork(graphData);
displayNetwork(newMap);
