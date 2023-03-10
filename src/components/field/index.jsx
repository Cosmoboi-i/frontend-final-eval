import React, { useState, useEffect } from 'react';
import { EDIT_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import ClickIcon from '../clickIcon';
import './field.css';

export default function Field({ field, activeType, setActiveType, setTypes }) {
  const [name, setName] = useState(field.value[0]);
  const [type, setType] = useState(field.value[1]);

  const deleteField = () => {
    setActiveType((prev) => {
      const newStructure = { ...prev.structure };
      delete newStructure[field.key];
      return { ...prev, structure: newStructure };
    });
  };

  const updateContentType = async () => {
    try {
      const { id, name, structure } = activeType;
      const res = await makeRequest(EDIT_TYPE(id), { data: { name, structure } });
      console.log('this is res', res);
    } catch (e) {
      console.log('sdsddddd', e);
    }
  };

  useEffect(() => {
    updateContentType();
  }, [activeType.structure]);

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
      <ClickIcon icon="delete" handleClick={deleteField} />
    </div>
  );
}
