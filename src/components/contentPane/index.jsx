import React, { useEffect } from 'react';
import Modal from '../modal';
import TypeDetails from '../typeDetails';
import './contentPane.css';

export default function ContentPane({ types }) {
  const [activeType, setActiveType] = React.useState({});

  const handleActiveType = (id) => {
    const type = types.find((type) => type.id === id);
    setActiveType(type);
  };

  useEffect(() => {
    if (types && types.length) {
      setActiveType(types[1]);
    }
  }, [types]);

  const makeNewType = () => {};

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
        <TypeDetails activeType={activeType} setActiveType={setActiveType} />
      </div>
    </div>
  );
}
