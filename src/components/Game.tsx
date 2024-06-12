import React, { useState } from 'react';
import Board from "./Board";
import '../index.css';
import { Puzzles } from '../helpers/puzzles';

const Game = () => {
    const [values, setValues] = useState<number[][]>(
        Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0))
    );

    const applyDefault = (difficulty: string) => {
        setValues([...Puzzles[difficulty]]);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board values={values} setValues={setValues} />
            </div>
            <div className="game-info">
                <h3>Welcome to my sudoku solver!</h3>
                <p>Enter a puzzle manually and I'll try to solve it.</p>
                <p>Or, select a sample puzzle from the list below.</p>
                <button onClick={() => applyDefault("easy")}>Easy</button>
                {/* <button>Medium</button>
                <button>Hard</button> */}
                <br /><br />
                <button onClick={() => applyDefault("clear")}>Clear board</button>
                <br /><br />
                <button>Solve!</button>
            </div>
        </div>
    );
}

export default Game;