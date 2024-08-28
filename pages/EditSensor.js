import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataSensorById } from '../services/api';
import DataSensorForm from '../components/DataSensorForm';

function EditSensor() {
    const { id } = useParams();
    const [sensor, setSensor] = useState(null);

    useEffect(() => {
        getDataSensorById(id)
            .then(response => setSensor(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!sensor) return <p>Loading...</p>;

    return <DataSensorForm initialData={sensor} isEdit={true} />;
}

export default EditSensor;
