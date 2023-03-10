import React, { useEffect } from 'react';
import ClickIcon from '../clickIcon';
import Field from '../field';
import './typeDetails.css';
import makeRequest from '../../utils/makeRequest';
import { EDIT_TYPE } from '../../constants/apiEndPoints';

export default function TypeDetails({ activeType, setActiveType, setTypes }) {
  const handleCLick = async () => {
    const name = prompt('Enter new name');
    setActiveType((prev) => ({ ...prev, name }));
  };

  const updateContentType = async () => {
    try {
      const { id, name, structure } = activeType;
      const res = await makeRequest(EDIT_TYPE(id), { data: { name, structure } });
      console.log('this is res', res);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    updateContentType();
  }, [activeType.name]);

  const addField = async () => {
    setActiveType((prev) => {
      const newStructure = { ...prev.structure };
      newStructure[`field${Object.keys(newStructure).length}`] = ['', ''];
      return { ...prev, structure: newStructure };
    });
  };

  return (
    <div className="type-details">
      <div className="type-details-header">
        <h1 className="type-details-heading">
          {activeType.name + ' '}
          <ClickIcon icon="pencil" handleClick={handleCLick} />
        </h1>
        <button onClick={addField}>Add Field</button>
      </div>
      {activeType &&
        Object.keys(activeType?.structure ? activeType.structure : {})?.map((key) => (
          <Field
            key={activeType?.id + key}
            field={{ key, value: activeType?.structure[key] }}
            activeType={activeType}
            setActiveType={setActiveType}
            setTypes={setTypes}
          />
        ))}
    </div>
  );
}
