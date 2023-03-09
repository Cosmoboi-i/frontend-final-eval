import React from "react";
import { useParams } from "react-router-dom";
import "./error.css";

export default function Error() {
  const { statusCode } = useParams();

  return (
    <div className="error">
      <h1>{statusCode}</h1>
      <div>Something went wrong!</div>
    </div>
  );
}
