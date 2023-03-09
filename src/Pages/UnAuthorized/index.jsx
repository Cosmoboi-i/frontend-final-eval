import React from 'react';
import { useParams } from 'react-router-dom';
import './error.css';

export default function UnAuthorized() {
  return (
    <div className="error">
      <h1>401</h1>
      <div>Unauthorized</div>
    </div>
  );
}
