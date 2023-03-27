import { BoardComponent } from './BoardComponent'
import { ScoreboardComponent } from './ScoreboardComponent'
import { ControlComponent } from './ControlComponent'
import { useStopwatch } from '../hooks/useStopwatch'
import { useRandomizeGarbage } from '../hooks/useRandomizeGarbage'
import { useVacuum } from '../hooks/useVacuum';

export const App = () => {
    const { isRunning, handleStop , handleReset, handleStart , time} = useStopwatch()
    const { board, handleRandomize, handleEmptyBoard, resetCounter, counter, decrementCounter} = useRandomizeGarbage()
    const { xCoordinate, yCoordinate, generateDirection, handleInitialPosition, startCleaning, setIsUsing, isUsing, setCoordinates } = useVacuum();
    
    return (
        <>
            <ScoreboardComponent
                time = { time }
                counter = { counter }
            />
            <BoardComponent
                board = { board }
                handleFirstTime = { handleEmptyBoard }
                xCoordinate = { xCoordinate }
                yCoordinate = { yCoordinate }
                handleInitialPosition = { handleInitialPosition }
            />
            <ControlComponent
                isActive = { isRunning }
                handleReset = { handleReset }
                handleStart = { handleStart }
                handleStop = { handleStop }
                handleRandomize = { handleRandomize }
                handleNewBoard = { handleEmptyBoard }
                startCleaning = { startCleaning }
                resetCounter = { resetCounter }
                garbageCounter = { counter }
                decrementGarbage = { decrementCounter }
                setCoordinates = { setCoordinates }
                isCleaning = { isUsing }
                setIsCleaning = { setIsUsing }
                generateDirection={generateDirection}
                xCoordinate={ xCoordinate }
                yCoordinate={ yCoordinate }
                board = { board }
            />
        </>
        
    )
}
