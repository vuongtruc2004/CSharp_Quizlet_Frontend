'use client';
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ICreateCourseWrapperProps {
    questions: IQuestion[];
    setQuestions: Dispatch<SetStateAction<IQuestion[]>>;
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
}

const CreateCourseContext = createContext<ICreateCourseWrapperProps | undefined>(undefined);

export const CreateCourseWrapper = ({ children }: { children: React.ReactNode }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [questions, setQuestions] = useState<IQuestion[]>([
        { id: 1, terminology: "", define: "" },
        { id: 2, terminology: "", define: "" },
        { id: 3, terminology: "", define: "" },
        { id: 4, terminology: "", define: "" },
        { id: 5, terminology: "", define: "" }
    ]);

    return (
        <CreateCourseContext.Provider value={{ questions, setQuestions, title, setTitle, description, setDescription }}>
            {children}
        </CreateCourseContext.Provider>
    )
}

export const useCreateCourse = () => {
    const context = useContext(CreateCourseContext);
    if (!context) {
        throw new Error("useCreateCourse must be used within a CreateCourseWrapper");
    }
    return context;
};