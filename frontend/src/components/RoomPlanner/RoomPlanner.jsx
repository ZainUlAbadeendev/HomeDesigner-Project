import React from 'react';

const RoomPlanner = () => {
    const openRoomPlanner = () => {
        window.open('http://localhost:8000', '_blank'); // Replace with the actual URL of your room planner tool
    };

    return (
        <button onClick={openRoomPlanner}>
            Open 3D Room Planner
        </button>
    );
};

export default RoomPlanner
