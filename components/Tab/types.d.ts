interface IContext {
   selectedTab: number;
   setSelectedTab: Dispatch<SetStateAction<number>>;
}

type TabPropsT = {
   children: ReactNode;
};

type TabListPropsT = {
   children: ReactNode | ReactNode[];
};

type TabItemPropsT = {
   children: ReactNode;
   id?: number;
};

type TabPanelsPropsT = {
   children: ReactNode | ReactNode[];
};

type TabPanelPropsT = {
   children: ReactNode;
};
