import { useState, useEffect } from 'react';

export function useCleaning(garbageCounter, decrementGarbage, generateDirection, xCoordinate, yCoordinate, setCoordinates, board, handleStop) {
    const [isUsing, setIsUsing] = useState(false);
    

    useEffect(() => {           
        let idInterval;

        if (isUsing) {
            idInterval = setInterval(() => {
                if (garbageCounter === 0) {
                    setIsUsing(false);
                    return;
                }

                let direction_movement = generateDirection();

                switch (direction_movement) {
                    case "Up":
                        setCoordinates({ xCoordinate: xCoordinate - 1, yCoordinate: yCoordinate });
                        break;

                    case "Down":
                        setCoordinates({ xCoordinate: xCoordinate + 1, yCoordinate: yCoordinate });
                        break;

                    case "Left":
                        setCoordinates({ xCoordinate: xCoordinate, yCoordinate: yCoordinate - 1 });
                        break;

                    case "Right":
                        setCoordinates({ xCoordinate: xCoordinate, yCoordinate: yCoordinate + 1 });
                        break;
                }

                if (board[xCoordinate][yCoordinate].hasGarbage === true) {
                    board[xCoordinate][yCoordinate].hasGarbage = false;
                    decrementGarbage();
                }
            }, 200);
        }

        return () => {
            clearInterval(idInterval);
        }
    }, [isUsing, garbageCounter, xCoordinate, yCoordinate]);

    function startCleaning() {
        setIsUsing(true);
    }

    const stopCleaning = () => {
        setIsUsing(false);
    }

    return [startCleaning, stopCleaning];
}
