import React from 'react';
import { DELETE_ENTRY } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import ClickIcon from '../clickIcon';
import './entry.css';

export default function Entry({ entry, getCollectionByTypeId }) {
  const deleteEntry = async () => {
    const res = await makeRequest(DELETE_ENTRY(entry?.id));
    getCollectionByTypeId();
    console.log('res', res);
  };

  return (
    <div className="entry">
      <div className="entry-item">{entry.id}</div>
      {Object.keys(entry?.content ? entry.content : {})?.map((key) => (
        <div key={entry?.id + key} className="entry-item">
          {entry?.content[key][1] === '' ? <span>&#8203;</span> : entry?.content[key][1]}
        </div>
      ))}
      <ClickIcon icon="delete" handleClick={deleteEntry} />
    </div>
  );
}
