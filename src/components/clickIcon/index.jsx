import React from 'react';
import './clickIcon.css';

export default function ClickIcon({ icon, handleClick }) {
  return <button className={`icon ${icon} pencil`} onClick={handleClick} />;
}
