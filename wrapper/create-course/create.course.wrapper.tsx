'use client';
import { createCourse } from "@/features/create-course/services/actions";
import { createContext, Dispatch, SetStateAction, useActionState, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ICreateCourseWrapperProps {
    questions: IQuestion[];
    setQuestions: Dispatch<SetStateAction<IQuestion[]>>;
    state: CreateCourseValidateResponse | null;
    formAction: (payload: FormData) => void;
    isPending: boolean;
}

const CreateCourseContext = createContext<ICreateCourseWrapperProps | undefined>(undefined);

export const CreateCourseWrapper = ({ children }: { children: React.ReactNode }) => {
    const [questions, setQuestions] = useState<IQuestion[]>([
        { id: uuidv4(), terminology: "", define: "" },
        { id: uuidv4(), terminology: "", define: "" },
        { id: uuidv4(), terminology: "", define: "" },
        { id: uuidv4(), terminology: "", define: "" },
        { id: uuidv4(), terminology: "", define: "" }
    ]);

    const CreateCourseExtend = createCourse.bind(null, questions);
    const [state, formAction, isPending] = useActionState(CreateCourseExtend, null);

    return (
        <CreateCourseContext.Provider value={{ questions, setQuestions, state, formAction, isPending }}>
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