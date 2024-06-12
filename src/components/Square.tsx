import React, { useState } from 'react';
import '../index.css';

interface SquareProps {
    x: number;
    y: number;
    sector: number;
    value: number;
    onSquareClick: (x: number, y: number) => void;
}

const Square = ({ x, y, sector, value, onSquareClick }: SquareProps) => {
    const [candidates, /*setCandidates*/] = useState<number[]>([1,2,3,4,5,6,7,8,9]); //assume any value is possible before checking begins

    const classNames = () => {
        //applies css classes for thicker borders on outer edges & around sectors
        let name = 'square';
        if (x === 0) name += " topRow";
        if (x === 2 || x === 5 || x === 8) name += " bottomRow";
        if (y === 0) name += " leftCol";
        if (y === 2 || y === 5 || y === 8) name += " rightCol";
        return name;
    }

	return (
        <button className={classNames()} onClick={() => onSquareClick(x, y)} title={`Row ${x+1}, Col ${y+1}, Sec ${sector}\nCandidates:\n${candidates.join(", ")}`} >
            {value > 0 ? value : ""}
        </button>
    );
}

export default Square;