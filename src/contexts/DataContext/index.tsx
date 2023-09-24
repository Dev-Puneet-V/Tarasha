// WorkContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_ENDPOINT } from '../../utils/constant';
import { DataContextType} from './type';
import { GlobalProps, SiteData } from '../../utils/type';

const DataContext = createContext<DataContextType>({
  data: {},
  setData: () => { }
});

export const DataProvider: React.FC<GlobalProps> = ({ children }) => {
  const [data, setData] = useState<SiteData>({});

  useEffect(() => {
    const updateData = async () => {
      try {
        const response = await fetch(API_ENDPOINT.SITE_DATA);
        const data = await response.json();
        console.log(data)
        setData(data[`site-data`]);
      } catch (error) {
        console.error('Error fetching work data:', error);
      }
    };
    updateData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a WorkProvider');
  }
  return context;
};
