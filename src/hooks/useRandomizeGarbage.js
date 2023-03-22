import { useState } from "react";

export const useRandomizeGarbage = () => {
    const [board, setBoard] = useState([]);

    const handleRandomize = () => {
        let objectCount = Math.floor(Math.random() * (13 - 9 + 1) + 9);
        const newMatrix = [];

        for (let i = 0; i < 6; i++) {
            const row = [];
            for (let j = 0; j < 6; j++) {
                if ( Math.random() * .5 < objectCount / 36) {
                    row.push({ "hasGarbage": true });
                    objectCount--;
                } else {
                    row.push({ "hasGarbage": false });
                }   
            }     
            newMatrix.push(row);   
        }

        setBoard(newMatrix);
    }; 

    const handleEmptyBoard = () => {
        const newMatrix = [];

        for (let i = 0; i < 6; i++) {
            const row = [];
            for (let j = 0; j < 6; j++) {
                row.push({ "hasGarbage" : false })
            }     
            newMatrix.push(row);   
        }

        setBoard(newMatrix);
    }; 

    return {
        board,
        handleRandomize,
        handleEmptyBoard
    }
}
