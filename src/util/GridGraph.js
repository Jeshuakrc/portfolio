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
        return this.adjacencentsOf(x, y, () => true)
    }
    adjacencentsOf(x, y, criteria) {
        if (
                x < 0
            ||  x >= this.width
            ||  y < 0
            ||  y >= this.height
        ) {
            throw `Out of bounds index [${x} - ${y}]`;
        }

        const xNodes = [], yNodes = [], diagonalNodes = [];
        
        const checkAndPush = (nx, ny, list) => {
            const n = this.nodeAt(nx, ny);
            if (!criteria(n)) { return; }
            list.push(n);
        };

        if (x < (this.width - 1)) {
            checkAndPush(x + 1, y, xNodes);
        }
        if (x > 0) {
            checkAndPush(x - 1, y, xNodes);
        }
        if (y < (this.height - 1)) {
            checkAndPush(x, y + 1, yNodes);
        }
        if (y > 0) {
            checkAndPush(x, y - 1, yNodes);
        }

        for(let xa of xNodes) {
            for(let ya of yNodes) {
                checkAndPush(xa.x, ya.y, diagonalNodes);
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
    getAdjacents(criteria) {
        return this.#gridGraph.adjacencentsOf(this.#x, this.#y, criteria);
    }
}