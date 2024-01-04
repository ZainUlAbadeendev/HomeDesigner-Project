import React, { useState, useEffect } from 'react';

const RoomPlanner = () => {
    const [isLoading, setLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const openRoomPlanner = () => {
        // Clear previous interval if exists
        if (intervalId) {
            clearInterval(intervalId);
        }

        setLoading(true);
        setLoadingProgress(0);

        // Simulating an asynchronous operation (replace with your actual logic)
        const newIntervalId = setInterval(() => {
            setLoadingProgress((prevProgress) => {
                const newProgress = prevProgress + 15; // Update more frequently (you can adjust this value)
                if (newProgress >= 100) {
                    clearInterval(newIntervalId);
                    // Use window.location.href to navigate to the Room Planner URL
                    window.location.href = 'http://localhost:8000';
                    setLoading(false);
                }
                return newProgress;
            });
        }, 500); // Faster interval time (you can adjust this value)

        // Save the interval id for later cleanup
        setIntervalId(newIntervalId);
    };

    const handleReload = () => {
        // Clear the interval and reset loading state on reload
        clearInterval(intervalId);
        setLoading(false);
    };

    useEffect(() => {
        window.addEventListener('beforeunload', handleReload);
        return () => {
            window.removeEventListener('beforeunload', handleReload);
        };
    }, [intervalId]);

    return (
        <div>
            <button
                onClick={openRoomPlanner}
                disabled={isLoading}
                className={`bg-blue-500 text-white py-2 px-4 rounded ${isLoading && 'opacity-50 cursor-not-allowed'}`}
            >
                <div className="flex items-center">
                    <img src="https://astrolus.netlify.app/images/clients/microsoft.svg" alt=" Logo" className="mr-2 w-6 h-6" />
                    Open 3D Room Planner
                </div>
            </button>

            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full bg-white opacity-90 flex flex-col items-center justify-center z-50">
                    <img src="/path/to/your/logo.svg" alt="Company Logo" className="mb-4 w-16 h-16" />
                    <p className="text-xl font-semibold mb-2">Loading...</p>
                    <div className="w-60 h-4 bg-gray-300 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#316756]"
                            style={{ width: `${loadingProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomPlanner;
