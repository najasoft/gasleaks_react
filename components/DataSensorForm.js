import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createDataSensor, updateDataSensor } from '../services/api';

function DataSensorForm({ initialData, isEdit }) {
    const [formData, setFormData] = useState(initialData || {});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiCall = isEdit ? updateDataSensor : createDataSensor;

        apiCall(formData.Id, formData)
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="DroneID"
                    label="Drone ID"
                    value={formData.DroneID || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="Status"
                    label="Status"
                    value={formData.Status || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="Time"
                    label="Time"
                    value={formData.Time || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="Day"
                    label="Day"
                    value={formData.Day || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="Location.Latitude"
                    label="Latitude"
                    value={formData.Location?.Latitude || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="Location.Longitude"
                    label="Longitude"
                    value={formData.Location?.Longitude || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="GasConcentration"
                    label="Gas Concentration"
                    value={formData.GasConcentration || ''}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    {isEdit ? 'Update' : 'Create'}
                </Button>
            </form>
        </Container>
    );
}

export default DataSensorForm;
