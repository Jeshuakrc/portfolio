export default class GridGraph {

    //FIELDS
    #matrix;
    #x; #y;

    //CONSTRUCTOR
    constructor(x, y) {
        this.#x = x; this.#y = y;

        this.#matrix = new Array(y);
        for(let i = 0; i < this.#matrix.length; i++) {
            this.#matrix[i] = new Array(x);
        }
    }

    //SETS
    set(x, y, val) {
        const node = this.emptyNodeAt(x, y);
        node.val = val;
    }
    emptyNodeAt(x, y) {
        const node = new Node(this, x, y);
        this.#matrix[y][x] = node;
        return node;
    }

    //GETS
    get size() {
        return this.#x * this.#y;
    }
    get width() { return this.#x; }
    get height() { return this.#y; }
    get indexes() {
        const grid = this;
        return function*() {
            for (let y = 0; y < grid.height; y++) {
                for (let x = 0; x < grid.width; x++) {
                    yield [x, y];
                }
            }
        }();
    }
    get nodes() {
        let nodes = [];
        for (let i of this.indexes) { nodes.push(this.nodeAt(i[0], i[1])); }
        return nodes;
    }
    get(x, y) {
        return this.#matrix[y][x]
    }
    nodeAt(x, y) {
        const node = this.#matrix[y][x];
        if (node) { return node; }
        return this.emptyNodeAt(x, y);
    }
    valueAt(x, y) {
        const node = this.nodeAt(x, y);
        return node.val;
    }
    adjacencentsOf(x, y) {
        if (
                x < 0
            ||  x >= this.width
            ||  y < 0
            ||  y >= this.height
        ) {
            throw `Out of bounds index [${x} - ${y}]`;
        }

        const xNodes = [], yNodes = [], diagonalNodes = [];
        
        if (x < (this.width - 1)) {
            xNodes.push(this.nodeAt(x + 1, y));
        }
        if (x > 0) {
            xNodes.push(this.nodeAt(x - 1 , y));
        }
        if (y < (this.height - 1)) {
            yNodes.push(this.nodeAt(x, y + 1));
        }
        if (y > 0) {
            yNodes.push(this.nodeAt(x, y - 1));
        }

        for(let xa of xNodes) {
            for(let ya of yNodes) {
                diagonalNodes.push(this.nodeAt(xa.x, ya.y));
            }
        }
        
        return xNodes.concat(yNodes).concat(diagonalNodes);
    }
    [Symbol.iterator]() {
        return this.nodes[Symbol.iterator]();
    }
}

export class Node {

    //FIELD
    #x; #y; #gridGraph; val;

    //CONSTRUCTOR
    constructor(gridgraph, x, y) {
        this.#x = x;
        this.#y = y;
        this.#gridGraph = gridgraph
    }

    //GETS
    get x() { return this.#x; }
    get y() { return this.#y; }
    get isEmpty() {
        return (this.val !== undefined);
    }
    get adjacents() {
        return this.#gridGraph.adjacencentsOf(this.#x, this.#y);
    }
    get emptyAdjacents() {
        return this.adjacents.filter(n => n.isEmpty);
    }
}