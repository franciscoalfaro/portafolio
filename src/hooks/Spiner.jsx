import React, { useState, useEffect } from 'react';
import '../assets/css/BarraDeCarga.css'

export const Spiner = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 4.5;
                } else {
                    clearInterval(timer);
                    return 100;
                }
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            onComplete();
        }
    }, [progress, onComplete]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}>
                    {progress}%
                </div>
            </div>
        </div>
    );
};
