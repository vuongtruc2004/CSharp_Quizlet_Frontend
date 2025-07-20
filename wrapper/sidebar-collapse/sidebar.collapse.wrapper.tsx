'use client';
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ISidebarCollapseWrapperProps {
    isCollapse: boolean;
    setIsCollapse: Dispatch<SetStateAction<boolean>>;
}

const SidebarCollapseContext = createContext<ISidebarCollapseWrapperProps | undefined>(undefined);

export const SidebarCollapseWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isCollapse, setIsCollapse] = useState<boolean>(false);

    return (
        <SidebarCollapseContext.Provider value={{ isCollapse, setIsCollapse }}>
            {children}
        </SidebarCollapseContext.Provider>
    )
}

export const useSidebarCollapse = () => {
    const context = useContext(SidebarCollapseContext);
    if (!context) {
        throw new Error("useSidebarCollapse must be used within a SidebarCollapseWrapper");
    }
    return context;
};