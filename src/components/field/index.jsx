import React, { useState, useEffect } from 'react';
import './field.css';

export default function Field({ field, setActiveType }) {
  const [name, setName] = useState(field.value[0]);
  const [type, setType] = useState(field.value[1]);

  useEffect(() => {
    setActiveType((prev) => {
      const newStructure = { ...prev.structure };
      newStructure[field.key] = [name, type];
      return { ...prev, structure: newStructure };
    });
  }, [name, type, field.key]);

  return (
    <div className="field">
      <div className="field-label">Name</div>
      <input className="field-input" value={name} onChange={(e) => setName(e.target.value)} />
      <div className="field-label">Type</div>
      <input className="field-input" value={type} onChange={(e) => setType(e.target.value)} />
    </div>
  );
}
