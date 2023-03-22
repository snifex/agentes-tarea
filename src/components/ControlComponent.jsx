import { useStopwatch } from "../hooks/useStopwatch"

export const ControlComponent = ({ handleStart, handleReset, isPaused , handlePauseResume, isActive }) => {

    const StartButton = (
      <div>
        <button onClick={ handleStart }>Iniciar</button>
      </div>  
    );

    const ActiveButtons = (
        <div className="controlContainer">
            <button >Colocar basura</button>
            <button onClick={ handlePauseResume } >{isPaused ? "Continuar" : "Pausa"}</button>
            <button onClick={ handleReset }>Nuevo</button>
        </div>
    );

    return (
        <div className="controlButtons">
            { isActive ? ActiveButtons : StartButton}
        </div>
        
    )
}
