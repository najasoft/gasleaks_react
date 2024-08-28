import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ViewSensor from './pages/ViewSensor';
import EditSensor from './pages/EditSensor';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="view/:id" element={<ViewSensor />} />
                    <Route path="edit/:id" element={<EditSensor />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
