import { BoardComponent } from './BoardComponent'
import { ScoreboardComponent } from './ScoreboardComponent'
import { ControlComponent } from './ControlComponent'
import { useStopwatch } from '../hooks/useStopwatch'
import { useRandomizeGarbage } from '../hooks/useRandomizeGarbage'

export const App = () => {
    const { isActive, isPaused, handlePauseResume, handleReset, handleStart, time} = useStopwatch()
    const { board, handleRandomize, handleEmptyBoard } = useRandomizeGarbage()

    return (
        <>
            <ScoreboardComponent
                time = { time }
            />
            <BoardComponent
                board = { board }
                handleFirstTime = { handleEmptyBoard }
                handleRandomize = { handleRandomize }
            />
            <ControlComponent
                isActive = { isActive }
                isPaused = { isPaused }
                handleReset = { handleReset }
                handleStart = { handleStart }
                handlePauseResume = { handlePauseResume }
                handleRandomize = { handleRandomize }
                handleNewBoard = { handleEmptyBoard }
            />
        </>
        
    )
}
