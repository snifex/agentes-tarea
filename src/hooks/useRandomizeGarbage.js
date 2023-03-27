import { useState } from "react";
import { useCounter } from "./useCounter";


export const useRandomizeGarbage = () => {
    const [board, setBoard] = useState([]);
    const [garbages, setGarbages] = useState( new Set());
    const { counter, incrementCounter, resetCounter, decrementCounter } = useCounter(12);

    const generateRandomNumbers = () => {
        const nums = new Set();
        while(nums.size !== 12){
            nums.add(Math.floor(Math.random() * (36 - 2 + 1) + 2))
        } 
        setGarbages(nums);
    }

    const handleRandomize = () => {
        let contador = 0;
        
        generateRandomNumbers();
        
        const newMatrix = [];

        for (let i = 0; i < 6; i++) {
            const row = [];
            for (let j = 0; j < 6; j++) {
                contador++;
                if ( garbages.has(contador) ) {
                    row.push({ "hasGarbage": true });
                } else {
                    row.push({ "hasGarbage": false });
                }   
            }     
            newMatrix.push(row);   
        }

        setBoard(newMatrix);
    }; 

    const handleEmptyBoard = () => {
        generateRandomNumbers();
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
        handleEmptyBoard,
        counter,
        resetCounter,
        decrementCounter,
        setBoard
    }
}
