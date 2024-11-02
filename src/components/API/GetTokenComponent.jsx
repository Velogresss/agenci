import React, { useState } from "react";

const FetchDataComponent = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = (url) => {
    let r = navigator.userAgent;
    let formData = new FormData();
    formData.append("user_agent", r);

    fetch(url, {
      method: "POST",
      headers: {},
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.meta.code === 201) {
          localStorage.setItem("dc_auth_key", data.data.token);
          localStorage.setItem("dc_server_salt", data.data.salt);
        }
        setResponse(data);
        console.log("Відповідь сервера:", data);
      })
      .catch((err) => {
        setError(err); 
        console.error("Сталася помилка:", err.message); 
      });
  };

  return (
    <div>
      <button onClick={() => sendRequest("http://localhost:5083")}>
        Надіслати запит
      </button>
    </div>
  );
};

export default FetchDataComponent;
