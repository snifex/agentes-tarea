import { BoardComponent } from './BoardComponent'
import { ScoreboardComponent } from './ScoreboardComponent'
import { ControlComponent } from './ControlComponent'
import { useStopwatch } from '../hooks/useStopwatch'

export const App = () => {
    const { isActive, isPaused, handlePauseResume, handleReset, handleStart, time} = useStopwatch()

    return (
        <>
            <ScoreboardComponent
                time = { time }
            />
            <BoardComponent
                numberRows={6}
            />
            <ControlComponent
                isActive = { isActive }
                isPaused = { isPaused }
                handleReset = { handleReset }
                handleStart = { handleStart }
                handlePauseResume = { handlePauseResume }
            />
        </>
        
    )
}
