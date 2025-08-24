'use client';
import { validateCreateCourse } from "@/features/create-course/services/actions";
import { createContext, Dispatch, SetStateAction, useActionState, useContext, useState } from "react";

interface ICreateCourseWrapperProps {
    questions: IQuestion[];
    setQuestions: Dispatch<SetStateAction<IQuestion[]>>;
    state: CreateCourseValidateResponse | null;
    formAction: (payload: FormData) => void;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const CreateCourseContext = createContext<ICreateCourseWrapperProps | undefined>(undefined);

export const CreateCourseWrapper = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<IQuestion[]>([
        { id: 1, terminology: "", define: "" },
        { id: 2, terminology: "", define: "" },
        { id: 3, terminology: "", define: "" },
        { id: 4, terminology: "", define: "" },
        { id: 5, terminology: "", define: "" }
    ]);

    const validateCreateCoursePlus = validateCreateCourse.bind(null, questions);
    const [state, formAction] = useActionState(validateCreateCoursePlus, null);

    return (
        <CreateCourseContext.Provider value={{ questions, setQuestions, state, formAction, loading, setLoading }}>
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