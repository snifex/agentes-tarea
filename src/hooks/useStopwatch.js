import { useState, useEffect, useRef } from "react"

export const useStopwatch = () => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0, centiseconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const requestRef = useRef();


    useEffect(() => {
        if (isRunning) {
            requestRef.current = requestAnimationFrame(updateTime);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [isRunning]);

    const updateTime = () => {
        setTime((prevTime) => {
            let newCentiseconds = prevTime.centiseconds + 1;
            let newSeconds = prevTime.seconds;
            let newMinutes = prevTime.minutes;
        
            if (newCentiseconds === 100) {
                newCentiseconds = 0;
                newSeconds += 1;
            }
        
            if (newSeconds === 60) {
                newSeconds = 0;
                newMinutes += 1;
            }
        
            return { minutes: newMinutes, seconds: newSeconds, centiseconds: newCentiseconds };
        });
        requestRef.current = requestAnimationFrame(updateTime);
    }

    const handleStart = () => {
        setIsRunning(true);
      }
    
    const handleStop = () => {
        setIsRunning(false);
    }
    
    const handleReset = () => {
        setIsRunning(false);
        setTime({ minutes: 0, seconds: 0, centiseconds: 0 });
    }

    return {
        time,
        isRunning,
        handleStart,
        handleStop,
        handleReset,
    }
}
