import { useStopwatch } from "../hooks/useStopwatch"

export const ScoreboardComponent = ({ time, counter } ) => {  
    

    return (
        <div className="scoreboard">
            <div className="score">
                <h3>Basuras restantes</h3>
                <p>{ counter }</p>
            </div>
            
            <div className="timer">
                <h3>Cronometro</h3>
                <span>{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}:{time.centiseconds.toString().padStart(2, '0')}</span>
            </div>
        </div>
    )
}
