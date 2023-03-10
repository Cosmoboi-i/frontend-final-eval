import React, { useEffect, useState } from 'react';
import { CollectionPane, ContentPane, SidePane } from '../../components';
import ProtectedRoutes from '../../components/ProtectedRoutes';
import { GET_ALL_TYPES, GET_COLLECTION_BY_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './home.css';

export default function Home() {
  const [types, setTypes] = useState([]);
  const [isBuilderOpen, setIsBuilderOpen] = useState(true);
  const [tid, setTid] = useState(null);

  const handleType = async (id) => {
    setIsBuilderOpen(false);
    setTid(id);
  };

  const getTypes = async () => {
    try {
      const res = await makeRequest(GET_ALL_TYPES);
      setTypes(res.contentTypes);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <ProtectedRoutes>
      <div className="home">
        <SidePane types={types} setIsBuilderOpen={setIsBuilderOpen} handleType={handleType} />
        {isBuilderOpen ? <ContentPane types={types} /> : <CollectionPane tid={tid} types={types} />}
      </div>
    </ProtectedRoutes>
  );
}
