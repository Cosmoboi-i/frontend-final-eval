import React, { useEffect, useState } from 'react';
import { ADD_NEW_ENTRY, DELETE_ENTRY, GET_COLLECTION_BY_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Entry from '../entry';
import Modal from '../modal';
import './collectionPane.css';

const entry = {
  id: '1',
  content: {
    title: 'title',
    description: 'description',
  },
  content_type_id: '1',
};

export default function CollectionPane({ tid, type }) {
  console.log('tid', type);
  const [collection, setCollection] = useState([]);
  const [newEntry, setNewEntry] = useState({}); // entry
  const [isOpen, setIsOpen] = useState(false);

  const createNewDummyEntry = () => {
    let newEntry = JSON.parse(JSON.stringify(type));
    console.log('newEntry', newEntry);
    newEntry.id = collection.length + 1;
    Object.keys(newEntry?.structure)?.forEach((key) => {
      console.log('key', key);
      newEntry.structure[key][1] = '';
    });
    newEntry.content = newEntry.structure;
    console.log('newEntry', newEntry);
    setNewEntry(newEntry);
  };

  const onModalClose = () => {
    createNewEntry({ content: newEntry.content, content_type_id: tid });
    setIsOpen(false);
  };

  const getCollectionByTypeId = async () => {
    try {
      const res = await makeRequest(GET_COLLECTION_BY_TYPE(tid));
      console.log('res', res);
      setCollection(res.collections);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleClick = () => {
    createNewDummyEntry();
  };

  useEffect(() => {
    if (newEntry.id) {
      setIsOpen(true);
    }
  }, [newEntry]);

  const changeInput = (e) => {
    setNewEntry((prev) => {
      const newEntry = { ...prev };
      console.log('newEntry', newEntry);
      console.log('ssss', e.target.name);
      newEntry.content[e.target.name][1] = e.target.value;
      return newEntry;
    });
  };

  const createNewEntry = async (entry) => {
    try {
      const res = await makeRequest(ADD_NEW_ENTRY, { data: entry });
      console.log('res', res);
      const res1 = getCollectionByTypeId();
      console.log(res1);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    getCollectionByTypeId();
  }, [tid]);

  return (
    <div className="collectionpane">
      <div className="collectionpane-header">{type.name}</div>
      <div className="collectionpane-body">
        <div className="space-between">
          <h1 className="collectionpane-heading">{collection.length} entries found</h1>
          <button onClick={handleClick}>Add new entry</button>
        </div>
        <div className="collectionpane-list">
          <div className="collectionpane-list-header">
            <div className="header-item">id</div>
            {Object.keys(collection[0]?.content ? collection[0].content : {})?.map((key) => (
              <div key={entry?.id + key} className="header-item">
                {collection[0]?.content[key][0]}
              </div>
            ))}
          </div>
          {collection.map((entry) => (
            <Entry key={entry.id} entry={entry} getCollectionByTypeId={getCollectionByTypeId} />
          ))}
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onModalClose}>
          {Object.keys(newEntry?.content ? newEntry.content : {})?.map((key) => (
            <>
              <div key={entry?.id + key} className="header-item">
                {newEntry?.content[key][0]}
              </div>
              <input
                className="field-input"
                name={key}
                value={newEntry?.content[key][1]}
                onChange={(e) => changeInput(e)}
              />
            </>
          ))}
        </Modal>
      )}
    </div>
  );
}
