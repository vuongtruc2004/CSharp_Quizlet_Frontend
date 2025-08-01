'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

interface IAlphabet {
    selectedTab: string;
    setSelectedTab: Dispatch<SetStateAction<string>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const AlphabetContext = createContext<IAlphabet | null>(null);

export const AlphabetWrapper = ({ children }: { children: React.ReactNode }) => {
    const [selectedTab, setSelectedTab] = useState<string>("HIRAGANA");
    const [loading, setLoading] = useState(true);


    return (
        <AlphabetContext.Provider value={{ selectedTab, setSelectedTab, loading, setLoading }}>
            {children}
        </AlphabetContext.Provider>
    )
}

export const useAlphabet = () => {
    const context = useContext(AlphabetContext);
    if (!context) {
        throw new Error("Loi");
    }
    return context;
}