import { useStopwatch } from "../hooks/useStopwatch"

export const ScoreboardComponent = ({ time } ) => {  
    

    return (
        <div className="scoreboard">
            <div className="score">
                <h3>Basuras removidas</h3>
                <p>0</p>
            </div>
            
            <div className="timer">
                <h3>Cronometro</h3>
                <span className="digits">
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
        </div>
    )
}
