import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const BoardComponent = ({ board, handleFirstTime, handleRandomize}) => {
    const imgGarbage = (
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/garbage-bag-icon.png" alt="Imagen basura" id="img" />
        );

        useEffect(() => {
            handleFirstTime()
        }, [])

        return (
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className="cell"
                            >
                                { cell.hasGarbage === true ? imgGarbage : `X` }
                            </div>
                        ))}

                    </div>
                ))}
            </div>
        );
}

BoardComponent.propTypes = {
    board: PropTypes.array.isRequired
}
