import React, { useEffect } from 'react';
import './App.css';

function App() {
    const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const makeAPICall = async () => {
        try {
            const response = await fetch(`${baseUrl}/api`);
            const data = await response.json();
            console.log({ data });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        makeAPICall().then(() => console.log("ready"));
    }, [makeAPICall]);

    return (
        <div className="App">
            <h1>123123</h1>
        </div>
    );
}

export default App;

