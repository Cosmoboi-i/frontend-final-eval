import React from 'react';
import './entry.css';

export default function Entry({ entry }) {
  return (
    <div className="entry">
      <div className="entry-item">{entry.id}</div>
      {Object.keys(entry?.content ? entry.content : {})?.map((key) => (
        <div key={entry?.id + key} className="entry-item">
          {entry?.content[key]}
        </div>
      ))}
    </div>
  );
}
