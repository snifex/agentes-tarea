import { useStopwatch } from "../hooks/useStopwatch"

export const ControlComponent = ({ handleStart, handleReset, isPaused , handlePauseResume, isActive, handleRandomize, handleNewBoard }) => {

    const resetBoard = () => {
        handleReset();
        handleNewBoard();
    };

    const startBoard = () => {
        handleStart();
        handleRandomize();
    };

    const StartButton = (
      <div>
        <button onClick={ startBoard }>Iniciar</button>
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
