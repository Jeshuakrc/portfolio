import React, { Children, useEffect, useRef, useState } from "react";
import * as Styles from "../styles/techGrid.module.css";
import GridGraph from "../util/GridGraph";
import { Node as GridgraphNode } from "../util/GridGraph";
import { breathFirstSearch } from "../util/TechLinesBuilder";


class Connection {
    start; end;
    
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    static fromPoints(x1, y1, x2, y2) {
        return new Connection(new Point(x1, y1), new Point(x2, y2));
    }
}

class Point {
    x; y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export function TechGridNode({ x, y, width, height, children }) {


    const nodeStyle = {
        gridColumnStart: x,
        gridColumnEnd: x + (width ?? 1),
        gridRowStart: y,
        gridRowEnd: y + (height ?? 1)
    }

    return <div className={Styles.gridNode} style={nodeStyle}>
        {children}
    </div>
}

export function TechGrid(props) {

    const {
        children,
        style,
        className,
        cellSize,
    } = props;

    const mainClassName = Styles.gridContainer + ((className) ? (` ${className}`) : "");

    const gridStyle = {
        gridTemplateColumns: `repeat(auto-fill, ${cellSize}px)`,
        gridAutoRows: `${cellSize}px`
    };

    const conns = [
        Connection.fromPoints(10,10,420,540),
        Connection.fromPoints(250,200,230,625),
        Connection.fromPoints(20,740,620,810)
    ]

    return <div className={mainClassName}>
        <CircuitBoard conns={conns} />
    </div>
};

const Path = function({ track }) {

    if (track.length === 0) {
        return <path />
    }
    
    let p = track.pop();
    const comms = [`M${p.x} ${p.y}`];
    while (track.length !== 0) {
        p = track.pop();
        comms.push(`L${p.x} ${p.y}`)
    }

    return <path d={comms.join(" ")} />
}

const CircuitBoard = function({ conns, cellSize }) {

    const self = useRef(null);
    const [ dimentions, setDimentions ] = useState(null);
    useEffect(() => {
        const dim = self.current.getBoundingClientRect();
        if (!dimentions) {
            setDimentions(dim);
            return;
        }
        if (dim.height === dimentions.height && dim.width === dimentions.width) {
            return;
        }
        setDimentions(dim);
        
    }, [dimentions]);

    cellSize = cellSize ?? 40;
    const   toCell = val => Math.ceil(val / cellSize),
            fromCell = val => (val * cellSize) + (cellSize / 2);

    const paths = [];
    if (dimentions) {
        const   gridWidth = toCell(dimentions.width),
                gridHeight = toCell(dimentions.height);

        let occupied = [];

        for (let c of conns) {
            const grid = new GridGraph(gridWidth, gridHeight);
            occupied.forEach(p => grid.set(p.x, p.y, { occupied: true }));

            const from = {
                x: toCell(c.start.x),
                y: toCell(c.start.y)
            };
            const to = {
                x: toCell(c.end.x),
                y: toCell(c.end.y)
            };

            let track = breathFirstSearch(grid, from, to);
            occupied = occupied.concat(track);
            track = track.map(p => { return {
                x: fromCell(p.x),
                y: fromCell(p.y)
            }});
            paths.push(track);
        }
    }

    return <svg ref={self} className={Styles.circuitBoard}>
        { paths.map(t => <Path track={t} />) }
    </svg>
}