import PropTypes from 'prop-types';
import { useState } from 'react';

export const BoardComponent = ({numberRows}) => {
    const [board, setBoard] = useState(Array(numberRows).fill(Array(numberRows).fill("X")))

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="cell"
                        >
                            {cell}
                        </div>
                    ))}
                    
                </div>
            ))}
        </div>
    );
}

BoardComponent.propTypes = {
    numberRows: PropTypes.number.isRequired
}
