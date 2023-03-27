import { useState, useEffect } from 'react';

export function useCleaning(garbageCounter, decrementGarbage, generateDirection, xCoordinate, yCoordinate, setCoordinates, board) {
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
                //Limpiar basuras y mover este useEffect en el custom hook,pausar
            }, 100);
        }

        return () => clearInterval(idInterval);
    }, [isUsing, garbageCounter, xCoordinate, yCoordinate, decrementGarbage]);

    function startCleaning() {
        setIsUsing(true);
    }

    return [startCleaning];
}
