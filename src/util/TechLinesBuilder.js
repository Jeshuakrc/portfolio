export function breathFirstSearch(graph, from, to) {

    const queue = [];

    const start = graph.nodeAt(from.x, from.y)
    start.value = { parent: undefined };
    queue.unshift(start);

    let current, found;
    while(queue.length !== 0) {
        current = queue.pop();
        if (current.x === to.x && current.y === to.y) {
            found = true;
            break;
        }
        for (let n of current.adjacents) {
            if (n.value) { continue; }
            n.value = {
                parent: current
            };
            queue.unshift(n);
        }
    }

    if (!found) { return []; }

    const backtrack = [];
    while(current) {
        backtrack.push(current);
        current = current.value?.parent;
    }

    return backtrack;
}