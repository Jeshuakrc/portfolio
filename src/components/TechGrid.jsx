import React, { Children, useEffect, useRef, useState } from "react";
import * as Styles from "../styles/techGrid.module.css";
import GridGraph from "../util/GridGraph";
import { Node as GridgraphNode } from "../util/GridGraph";
import { breathFirstSearch } from "../util/TechLinesBuilder";



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

    const conns = [[{x: 15, y: 25, dir: "left"}, {x: 215, y: 400, "up"}]]

    return <div className={mainClassName}>
        <CircuitBoard conns={conns} />
    </div>
};

const Path = function({ track }) {

    if (track.lenth === 0) {
        return <path />
    }

    let p = track.pop();
    const comms = [`M${p.x} ${p.y}`];
    while (track.lenth !== 0) {
        p = track.pop();
        comms.push(`L${p.x} ${p.y}`)
    }

    return <path d={comms.join(" ")} />
}

const CircuitBoard = function({ conns, cellSize }) {

    const self = useRef(null);
    const [ dimentions, setDimentions ] = useState(null);
    useEffect(() => {
        setDimentions(self.current.getBoundingClientRect());
    });

    const   toCell = val => Math.ceil(val / cellSize),
            deCell = val => val * cellSize,
            gridHeight = toCell(dimentions.height),
            gridWidth = toCell(dimentions.width),
            grid = new GridGraph(gridWidth, gridHeight);
 
    const paths = conns
        .map((c) => c.map(p => {p.x = toCell(p.x); p.y = toCell(p.y)}))
        .map(breathFirstSearch(grid, c[0], c[1]))
        .map(paths => paths.map(p => {p.x = deCell(p.x); p.y = deCell(p.y)}));

    return <svg ref={self} className={Styles.circuitBoard}>
        { paths.map(t => <Path track={t} />) }
    </svg>
}