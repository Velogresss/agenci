import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        const r = navigator.userAgent;
        const e = new FormData();
        e.append("user_agent", r);

        try {
            const res = await fetch('http://localhost:5083', {
                method: "POST",
                headers: {},
                body: e
            });
            const data = await res.json();

            if (data.meta.code === 201) {
                localStorage.setItem("dc_auth_key", data.data.token);
                localStorage.setItem("dc_server_salt", data.data.salt);
            }

            setResponse(data);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        handleFetch(); 
    }, []);

    return (
        <div>
            {/* <button onClick={handleFetch}>Надіслати запит</button>
            {response && <div>Відповідь: {JSON.stringify(response)}</div>}
            {error && <div>Помилка: {error.message}</div>} */}
        </div>
    );
};

export default MyComponent;
