import { useEffect, useState } from "react"
import { useCleaning } from "./useCleaning";

export const useVacuum = () => {
    const [coordinates, setCoordinates] = useState({
        xCoordinate: 0,
        yCoordinate: 0
    });

    const [ isUsing, setIsUsing] = useState(false);

    const { xCoordinate, yCoordinate } = coordinates;

    const handleInitialPosition = () => {
        let coordinates_temp = {x_coor: 0, y_coor: 0}
        
        for (let i = 0; i < 2 ; i++) {
            let random_number = Math.random();
            random_number = Math.floor(Math.random() * (4 - 1 + 1) + 1);
            random_number += 0;

            if( i === 0){
                coordinates_temp.x_coor = random_number
            }else{
                coordinates_temp.y_coor = random_number
            }
        }

        setCoordinates({
            xCoordinate: coordinates_temp.x_coor,
            yCoordinate: coordinates_temp.y_coor
        })
    };

    const generateDirection = () => {
        let direction = ""

        const enum_directions = Object.freeze({
            NORTH: 1,
            SOUTH: 2,
            EAST: 3,
            WEST: 4
        });

        let random_int = Math.floor(Math.random() * (4 - 1 + 1) + 1);

        switch(random_int){
            case enum_directions.NORTH:
                if(coordinates.xCoordinate > 0){
                    direction = "Up" 
                }
                break;

            case enum_directions.SOUTH:
                if(coordinates.xCoordinate < 5){
                    direction = "Down" 
                }
                break;
            
            case enum_directions.EAST:
                if(coordinates.yCoordinate > 0){
                    direction = "Left"
                }
                break;
            
            case enum_directions.WEST:
                if(coordinates.yCoordinate < 5){
                    direction = "Right"
                }
                break;
        }

        return direction
    }

    const startCleaning = (garbageCounter, decrementGarbage) => {
        setIsUsing(true);

        useEffect(() => {            
            const idInterval = setInterval(() => {
                if(garbageCounter === 0 ){
                    setIsUsing(false);
                    return;
                }
                
                
                let direction_movement = generateDirection();
    
                switch(direction_movement){
                    case "Up":
                        setCoordinates({xCoordinate : xCoordinate - 1, yCoordinate : yCoordinate});
                        break;
    
                    case "Down":
                        setCoordinates({xCoordinate : xCoordinate + 1, yCoordinate : yCoordinate});
                        break;
    
                    case "Left":
                        setCoordinates({xCoordinate: xCoordinate, yCoordinate : yCoordinate - 1});
                        break;
    
                    case "Right":
                        setCoordinates({xCoordinate: xCoordinate, yCoordinate : yCoordinate+ 1});
                        break;
                }
    
                if(board[xCoordinate][yCoordinate].hasGarbage === true){
                    board[xCoordinate][yCoordinate].hasGarbage = false;
                    decrementGarbage();
                }
                //Limpiar basuras y mover este useEffect en el custom hook,pausar
            },100)
            
            return () => {
                clearInterval(idInterval)
            }
        }, [xCoordinate, yCoordinate])
    }
    
    return {
        xCoordinate: coordinates.xCoordinate,
        yCoordinate: coordinates.yCoordinate,
        handleInitialPosition,
        generateDirection,
        setIsUsing,
        isUsing,
        setCoordinates,
        startCleaning
    };
}
