import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { getDataSensors } from '../services/api';

function DataSensorList() {
    const [sensors, setSensors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataSensors()
            .then(response => {
                setSensors(response.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <CircularProgress />;

    return (
        <List>
            {sensors.map(sensor => (
                <ListItem key={sensor.Id} component={Link} to={`/view/${sensor.Id}`}>
                    <ListItemText primary={`Drone: ${sensor.DroneID} - Status: ${sensor.Status}`} />
                </ListItem>
            ))}
        </List>
    );
}

export default DataSensorList;
