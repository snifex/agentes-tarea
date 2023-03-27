import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const BoardComponent = ({ board, handleFirstTime, xCoordinate, yCoordinate, handleInitialPosition}) => {
    const imgGarbage = (
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/garbage-bag-icon.png" alt="Imagen basura" id="img" />
    );

    const imgVacuum = (
        <img src="https://static.vecteezy.com/system/resources/previews/014/456/386/original/vacuum-green-purple-free-png.png" alt="aspiradora" id="img_vacuum"/>
    );

    useEffect(() => {
        handleFirstTime(),
        handleInitialPosition()
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
                            {
                                rowIndex === xCoordinate && colIndex === yCoordinate ?
                                    imgVacuum :
                                    cell.hasGarbage === true ? 
                                        imgGarbage : 
                                        ""
                            }
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
