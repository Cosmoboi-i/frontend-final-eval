import React, { useEffect } from 'react';
import { GET_ALL_TYPES } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './sidePane.css';

export default function SidePane({ types, setIsBuilderOpen, handleType }) {
  return (
    <div className="sidepane">
      <div className="sidepane-header">CMS+</div>
      <div className="sidepane-body">
        <div className="sidepane-types">
          <div className="type-heading">COLLECTION TYPES</div>
          <ul className="types">
            {types &&
              types.map((type) => (
                <li className="type-item" onClick={() => handleType(type.id)}>
                  {type?.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="type-builder" onClick={() => setIsBuilderOpen(true)}>
          CONTENT TYPE BUILDER
        </div>
      </div>
    </div>
  );
}
