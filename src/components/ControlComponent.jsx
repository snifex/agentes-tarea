import { useCleaning } from "../hooks/useCleaning";


export const ControlComponent = ({ handleStart, handleReset, isPaused , handlePauseResume, isActive, handleRandomize, handleNewBoard, garbageCounter, setCoordinates, decrementGarbage, board, generateDirection, xCoordinate, yCoordinate }) => {
    const [startCleaning] = useCleaning(garbageCounter, decrementGarbage, generateDirection, xCoordinate, yCoordinate, setCoordinates, board);

    const resetBoard = () => {
        handleReset();
        handleNewBoard();
        
    };

    const startingBoard = () => {
        handleStart();
        handleRandomize();
        startCleaning();
    };

    
    const StartButton = (
      <div>
        <button onClick={ startingBoard }>Iniciar</button>
      </div>  
    );

    const ActiveButtons = (
        <div className="controlContainer">
            <button onClick={ handleRandomize }>Colocar basura</button>
            <button onClick={ handlePauseResume } >{isPaused ? "Continuar" : "Pausa"}</button>
            <button onClick={ resetBoard }>Nuevo</button>
        </div>
    );

    return (
        <div className="controlButtons">
            { isActive ? ActiveButtons : StartButton}
        </div>
        
    )
}
