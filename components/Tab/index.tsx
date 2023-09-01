"use client";
import { useContext, createContext, cloneElement, ReactElement, useState } from "react";

const TabContext = createContext<IContext>({ selectedTab: 0, setSelectedTab: () => {} });

export const Tab = ({ children }: TabPropsT) => {
   const [selectedTab, setSelectedTab] = useState<number>(0);

   return (
      <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
         <div className='tab'>{children}</div>
      </TabContext.Provider>
   );
};

Tab.List = function TabList({ children }: TabListPropsT) {
   const TabListItems = children.map((child: ReactElement, index: number) =>
      cloneElement(child, { key: index, id: index })
   );

   return <ul className='tab-list'>{TabListItems}</ul>;
};

Tab.Item = function TabItem({ children, id }: TabItemPropsT) {
   const { selectedTab, setSelectedTab } = useContext(TabContext);

   return (
      <li
         onClick={() => setSelectedTab(id)}
         className={`tab-item ${id === selectedTab ? "active" : ""}`}>
         {children}
      </li>
   );
};

Tab.Panels = function TabPanels({ children }: TabPanelsPropsT) {
   const { selectedTab } = useContext(TabContext);

   return <div className='tab-panels'>{children[selectedTab]}</div>;
};

Tab.Panel = function TabPanel({ children }: TabPanelPropsT) {
   return <div className='tab-panel'>{children}</div>;
};
