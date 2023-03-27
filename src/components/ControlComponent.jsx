import { useCleaning } from "../hooks/useCleaning";


export const ControlComponent = ({ handleStart, handleStop , handleReset, isActive, handleRandomize, handleNewBoard, garbageCounter, setCoordinates, decrementGarbage, board, generateDirection, xCoordinate, yCoordinate, resetCounter }) => {
    const [startCleaning, stopCleaning] = useCleaning(garbageCounter, decrementGarbage, generateDirection, xCoordinate, yCoordinate, setCoordinates, board, handleStop, resetCounter);

    const resetBoard = () => {
        handleReset();
        handleNewBoard();
        resetCounter();
        stopCleaning();
    };

    const startingBoard = () => {
        handleReset();
        handleStart();
        handleRandomize();
        startCleaning();
    };


    const randomizeBoard = () => {
        handleRandomize();
        resetCounter();
        startCleaning();
    }
    
    const StartButton = (
      <div>
        <button onClick={ startingBoard }>Iniciar</button>
      </div>  
    );

    const ActiveButtons = (
        <div className="controlContainer">
            <button onClick={ randomizeBoard }>Colocar basura</button>
            <button onClick={ resetBoard }>Nuevo</button>
        </div>
    );

    return (
        <div className="controlButtons">
            { isActive ? ActiveButtons : StartButton}
        </div>
        
    )
}
