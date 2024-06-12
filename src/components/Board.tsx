import React from "react";
import Square from "./Square";
import '../index.css';

interface BoardProps {
    values: number[][];
    setValues: (vals: number[][]) => void;
}

const Board = ({ values, setValues }: BoardProps) => {
    
    const onSquareClick = (x: number, y: number) => { //incrementing each cell on click for now until typing is enabled
        let tempVals = values.slice();
        if (tempVals[x][y] === 9) tempVals[x][y] = 0;
        else tempVals[x][y] = tempVals[x][y] + 1; 
        setValues(tempVals);
    }

    return (
        <div>
            <div className="sector-row">
                <Square x={0} y={0} sector={1} value={values[0][0]} onSquareClick={onSquareClick} />
                <Square x={0} y={1} sector={1} value={values[0][1]} onSquareClick={onSquareClick} />
                <Square x={0} y={2} sector={1} value={values[0][2]} onSquareClick={onSquareClick} />
                <Square x={0} y={3} sector={2} value={values[0][3]} onSquareClick={onSquareClick} />
                <Square x={0} y={4} sector={2} value={values[0][4]} onSquareClick={onSquareClick} />
                <Square x={0} y={5} sector={2} value={values[0][5]} onSquareClick={onSquareClick} />
                <Square x={0} y={6} sector={3} value={values[0][6]} onSquareClick={onSquareClick} />
                <Square x={0} y={7} sector={3} value={values[0][7]} onSquareClick={onSquareClick} />
                <Square x={0} y={8} sector={3} value={values[0][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={1} y={0} sector={1} value={values[1][0]} onSquareClick={onSquareClick} />
                <Square x={1} y={1} sector={1} value={values[1][1]} onSquareClick={onSquareClick} />
                <Square x={1} y={2} sector={1} value={values[1][2]} onSquareClick={onSquareClick} />
                <Square x={1} y={3} sector={2} value={values[1][3]} onSquareClick={onSquareClick} />
                <Square x={1} y={4} sector={2} value={values[1][4]} onSquareClick={onSquareClick} />
                <Square x={1} y={5} sector={2} value={values[1][5]} onSquareClick={onSquareClick} />
                <Square x={1} y={6} sector={3} value={values[1][6]} onSquareClick={onSquareClick} />
                <Square x={1} y={7} sector={3} value={values[1][7]} onSquareClick={onSquareClick} />
                <Square x={1} y={8} sector={3} value={values[1][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={2} y={0} sector={1} value={values[2][0]} onSquareClick={onSquareClick} />
                <Square x={2} y={1} sector={1} value={values[2][1]} onSquareClick={onSquareClick} />
                <Square x={2} y={2} sector={1} value={values[2][2]} onSquareClick={onSquareClick} />
                <Square x={2} y={3} sector={2} value={values[2][3]} onSquareClick={onSquareClick} />
                <Square x={2} y={4} sector={2} value={values[2][4]} onSquareClick={onSquareClick} />
                <Square x={2} y={5} sector={2} value={values[2][5]} onSquareClick={onSquareClick} />
                <Square x={2} y={6} sector={3} value={values[2][6]} onSquareClick={onSquareClick} />
                <Square x={2} y={7} sector={3} value={values[2][7]} onSquareClick={onSquareClick} />
                <Square x={2} y={8} sector={3} value={values[2][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={3} y={0} sector={4} value={values[3][0]} onSquareClick={onSquareClick} />
                <Square x={3} y={1} sector={4} value={values[3][1]} onSquareClick={onSquareClick} />
                <Square x={3} y={2} sector={4} value={values[3][2]} onSquareClick={onSquareClick} />
                <Square x={3} y={3} sector={5} value={values[3][3]} onSquareClick={onSquareClick} />
                <Square x={3} y={4} sector={5} value={values[3][4]} onSquareClick={onSquareClick} />
                <Square x={3} y={5} sector={5} value={values[3][5]} onSquareClick={onSquareClick} />
                <Square x={3} y={6} sector={6} value={values[3][6]} onSquareClick={onSquareClick} />
                <Square x={3} y={7} sector={6} value={values[3][7]} onSquareClick={onSquareClick} />
                <Square x={3} y={8} sector={6} value={values[3][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={4} y={0} sector={4} value={values[4][0]} onSquareClick={onSquareClick} />
                <Square x={4} y={1} sector={4} value={values[4][1]} onSquareClick={onSquareClick} />
                <Square x={4} y={2} sector={4} value={values[4][2]} onSquareClick={onSquareClick} />
                <Square x={4} y={3} sector={5} value={values[4][3]} onSquareClick={onSquareClick} />
                <Square x={4} y={4} sector={5} value={values[4][4]} onSquareClick={onSquareClick} />
                <Square x={4} y={5} sector={5} value={values[4][5]} onSquareClick={onSquareClick} />
                <Square x={4} y={6} sector={6} value={values[4][6]} onSquareClick={onSquareClick} />
                <Square x={4} y={7} sector={6} value={values[4][7]} onSquareClick={onSquareClick} />
                <Square x={4} y={8} sector={6} value={values[4][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={5} y={0} sector={4} value={values[5][0]} onSquareClick={onSquareClick} />
                <Square x={5} y={1} sector={4} value={values[5][1]} onSquareClick={onSquareClick} />
                <Square x={5} y={2} sector={4} value={values[5][2]} onSquareClick={onSquareClick} />
                <Square x={5} y={3} sector={5} value={values[5][3]} onSquareClick={onSquareClick} />
                <Square x={5} y={4} sector={5} value={values[5][4]} onSquareClick={onSquareClick} />
                <Square x={5} y={5} sector={5} value={values[5][5]} onSquareClick={onSquareClick} />
                <Square x={5} y={6} sector={6} value={values[5][6]} onSquareClick={onSquareClick} />
                <Square x={5} y={7} sector={6} value={values[5][7]} onSquareClick={onSquareClick} />
                <Square x={5} y={8} sector={6} value={values[5][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={6} y={0} sector={7} value={values[6][0]} onSquareClick={onSquareClick} />
                <Square x={6} y={1} sector={7} value={values[6][1]} onSquareClick={onSquareClick} />
                <Square x={6} y={2} sector={7} value={values[6][2]} onSquareClick={onSquareClick} />
                <Square x={6} y={3} sector={8} value={values[6][3]} onSquareClick={onSquareClick} />
                <Square x={6} y={4} sector={8} value={values[6][4]} onSquareClick={onSquareClick} />
                <Square x={6} y={5} sector={8} value={values[6][5]} onSquareClick={onSquareClick} />
                <Square x={6} y={6} sector={9} value={values[6][6]} onSquareClick={onSquareClick} />
                <Square x={6} y={7} sector={9} value={values[6][7]} onSquareClick={onSquareClick} />
                <Square x={6} y={8} sector={9} value={values[6][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={7} y={0} sector={7} value={values[7][0]} onSquareClick={onSquareClick} />
                <Square x={7} y={1} sector={7} value={values[7][1]} onSquareClick={onSquareClick} />
                <Square x={7} y={2} sector={7} value={values[7][2]} onSquareClick={onSquareClick} />
                <Square x={7} y={3} sector={8} value={values[7][3]} onSquareClick={onSquareClick} />
                <Square x={7} y={4} sector={8} value={values[7][4]} onSquareClick={onSquareClick} />
                <Square x={7} y={5} sector={8} value={values[7][5]} onSquareClick={onSquareClick} />
                <Square x={7} y={6} sector={9} value={values[7][6]} onSquareClick={onSquareClick} />
                <Square x={7} y={7} sector={9} value={values[7][7]} onSquareClick={onSquareClick} />
                <Square x={7} y={8} sector={9} value={values[7][8]} onSquareClick={onSquareClick} />
            </div>
            <div className="sector-row">
                <Square x={8} y={0} sector={7} value={values[8][0]} onSquareClick={onSquareClick} />
                <Square x={8} y={1} sector={7} value={values[8][1]} onSquareClick={onSquareClick} />
                <Square x={8} y={2} sector={7} value={values[8][2]} onSquareClick={onSquareClick} />
                <Square x={8} y={3} sector={8} value={values[8][3]} onSquareClick={onSquareClick} />
                <Square x={8} y={4} sector={8} value={values[8][4]} onSquareClick={onSquareClick} />
                <Square x={8} y={5} sector={8} value={values[8][5]} onSquareClick={onSquareClick} />
                <Square x={8} y={6} sector={9} value={values[8][6]} onSquareClick={onSquareClick} />
                <Square x={8} y={7} sector={9} value={values[8][7]} onSquareClick={onSquareClick} />
                <Square x={8} y={8} sector={9} value={values[8][8]} onSquareClick={onSquareClick} />
            </div>
        </div>
    );
}

// const Row = (x: number, sector: number, values: number[][], onSquareClick: (x: number, y: number) => void) => 
//     <div className="sector-row topRow">
//         <Square x={x} y={0} sector={sector} value={values[x][0]} onSquareClick={onSquareClick} />
//         <Square x={x} y={1} sector={sector} value={values[x][1]} onSquareClick={onSquareClick} />
//         <Square x={x} y={2} sector={sector} value={values[x][2]} onSquareClick={onSquareClick} />
//         <Square x={x} y={3} sector={sector + 1} value={values[x][3]} onSquareClick={onSquareClick} />
//         <Square x={x} y={4} sector={sector + 1} value={values[x][4]} onSquareClick={onSquareClick} />
//         <Square x={x} y={5} sector={sector + 1} value={values[x][5]} onSquareClick={onSquareClick} />
//         <Square x={x} y={6} sector={sector + 2} value={values[x][6]} onSquareClick={onSquareClick} />
//         <Square x={x} y={7} sector={sector + 2} value={values[x][7]} onSquareClick={onSquareClick} />
//         <Square x={x} y={8} sector={sector + 2} value={values[x][8]} onSquareClick={onSquareClick} />
//     </div>;

export default Board;