import React, { useState, useEffect } from 'react';
import { animate, motion, Variants } from 'framer-motion';

const Cursor = (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', mMove);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', mMove);

        };

        const mMove = (el) => {
            setPosition({ x: el.clientX, y: el.clientY });
        };

        addEventListeners();
        return () => { removeEventListeners(); setPosition({ x: 0, y: 0 }) };
    }, []);



    return (
        <div>

            {props.isShown &&
                <motion.div
                    className={'w-20 h-20 fixed flex items-center justify-center rounded-[50%] bg-[#CA34FF]  pointer-events-none text-center '}
                    onMouseEnter={() => props.hoverHandler(true)}
                    onMouseLeave={() => props.hoverHandler(true)}
                    animate={{ scale: [0, 1] }}

                    style={{ left: `${position.x - 30}px`, top: `${position.y - 30}px ` }}
                >
                    <p className='text-xs font-["Lexend"]' >Learn more</p>
                </motion.div>

            }
        </div >

    );
};

export default Cursor;