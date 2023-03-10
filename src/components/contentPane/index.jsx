import React, { useEffect } from 'react';
import { ADD_NEW_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Modal from '../modal';
import TypeDetails from '../typeDetails';
import './contentPane.css';

export default function ContentPane({ types, setTypes }) {
  const [activeType, setActiveType] = React.useState({});

  const handleActiveType = (id) => {
    const type = types.find((type) => type.id === id);
    setActiveType(type);
  };

  useEffect(() => {
    if (types && types.length) {
      setActiveType(types[0]);
    }
  }, [types]);

  const makeNewType = async () => {
    const name = prompt('Enter name of new type');
    const newType = {
      name,
      structure: {},
    };
    setTypes((prev) => [...prev, newType]);
    setActiveType(newType);
    try {
      const res = await makeRequest(ADD_NEW_TYPE, { data: newType });
      console.log('this is res', res);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    console.log('activeType', activeType);
  }, [activeType]);

  return (
    <div className="contentpane">
      <div className="contentpane-header">Content</div>
      <div className="contentpane-body">
        <div className="content-types">
          <div className="type-adder" onClick={makeNewType}>
            + New Type
          </div>
          <div className="type-list">
            {types &&
              types.map((type) => (
                <div className="content-type-item" key={type.id} onClick={() => handleActiveType(type.id)}>
                  {type.name}
                </div>
              ))}
          </div>
        </div>
        <TypeDetails activeType={activeType} setActiveType={setActiveType} setTypes={setTypes} />
      </div>
    </div>
  );
}
