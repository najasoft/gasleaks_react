import axios from 'axios';

const API_URL = 'http://localhost:5292/api/Gasleaks';

export const getDataSensors = () => axios.get(API_URL);

export const getDataSensorById = (id) => axios.get(`${API_URL}/${id}`);

export const createDataSensor = (data) => axios.post(API_URL, data);

export const updateDataSensor = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const deleteDataSensor = (id) => axios.delete(`${API_URL}/${id}`);
