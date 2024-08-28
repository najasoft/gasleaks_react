import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataSensorById } from '../services/api';

function ViewSensor() {
    const { id } = useParams();
    const [sensor, setSensor] = useState(null);

    useEffect(() => {
        getDataSensorById(id)
            .then(response => setSensor(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!sensor) return <p>Loading...</p>;

    return (
        <div>
            <h1>Drone: {sensor.DroneID}</h1>
            <p>Status: {sensor.Status}</p>
            <p>Time: {sensor.Time}</p>
            <p>Day: {sensor.Day}</p>
            <p>Location: {sensor.Location.Latitude}, {sensor.Location.Longitude}</p>
            <p>Gas Concentration: {sensor.GasConcentration}</p>
        </div>
    );
}

export default ViewSensor;
