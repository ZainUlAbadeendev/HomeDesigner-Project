import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Assuming you are using react-router-dom
import axios from "axios";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const activationEmail = async () => {
      try {
        const res = await axios.post(`${server}/activation`, {
          activation_token,
        });

        console.log(res.data.message);
      } catch (error) {
        console.error(error.response.data.message);
        setError(true);
      }
    };

    if (activation_token) {
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created successfully</p>
      )}
    </div>
  );
};

export default ActivationPage;
