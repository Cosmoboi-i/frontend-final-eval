import React, { useEffect, useState } from 'react';
import { ADD_NEW_ENTRY, GET_COLLECTION_BY_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Entry from '../Entry';
import './collectionPane.css';

const entry = {
  id: '1',
  content: {
    title: 'title',
    description: 'description',
  },
  content_type_id: '1',
};

export default function CollectionPane({ tid, types }) {
  const [collection, setCollection] = useState([]);

  const getCollectionByTypeId = async () => {
    try {
      const res = await makeRequest(GET_COLLECTION_BY_TYPE(tid));
      console.log('res', res);
      setCollection(res.collections);
    } catch (e) {
      console.log('error', e);
    }
  };

  const createNewEntry = async (entry) => {
    try {
      const res = await makeRequest(ADD_NEW_ENTRY, { data: entry });
      console.log('res', res);
      const res1 = getCollectionByTypeId();
      setCollection(res1.collections);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    getCollectionByTypeId();
  }, [tid]);

  return (
    <div className="collectionpane">
      <div className="collectionpane-header">{types.find((type) => type.id === tid).name}</div>
      <div className="collectionpane-body">
        <h1 className="collectionpane-heading">{collection.length} entries found</h1>
        <div className="collectionpane-list">
          {collection.map((entry) => (
            <Entry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
