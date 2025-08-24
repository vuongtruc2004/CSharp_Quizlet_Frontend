'use client'
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { arrayMove } from "@dnd-kit/sortable";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Button } from "@mui/material";
import Questions from "./questions";

const CreateCourseQuestions = () => {
    const { questions, setQuestions, state, loading } = useCreateCourse();

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id === over?.id) return;

        const originalPos = questions.findIndex(question => question.id === active.id);
        const newPos = questions.findIndex(question => question.id === over?.id);
        if (active.id !== over?.id && originalPos !== newPos) {
            setQuestions(qs => arrayMove(qs, originalPos, newPos));
        }
    }

    const handleAddAfterIndex = (index: number) => {
        const id = questions.length ? Math.max(...questions.map(question => question.id)) + 1 : 1;
        const newQuestion: IQuestion = {
            id,
            terminology: "",
            define: ""
        };

        const newQuestions = [...questions];
        newQuestions.splice(index + 1, 0, newQuestion);
        setQuestions(newQuestions);
    }

    return (
        <>
            {state?.hasAtLeast1ValidQuestion === false && (
                <p className="flex items-center gap-x-1 text-custom-error mb-3 text-sm">
                    <ErrorOutlineRoundedIcon sx={{ fontSize: '16px' }} />
                    {state?.hasAtLeast1ValidQuestion ? "" : "Học phần phải chứa ít nhất 1 thuật ngữ"}
                </p>
            )}

            <div>
                <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} modifiers={[restrictToParentElement]}>
                    <Questions />
                </DndContext>
            </div>

            <div onClick={() => handleAddAfterIndex(questions.length - 1)} className="w-full bg-gray-100-gray-700 rounded-lg h-28 my-5 flex items-center justify-center group cursor-pointer">
                <span className="transition-all duration-200 font-bold text-gray-800-gray-200 border-b-4 border-sky-400 pb-3 group-hover:border-sunset-400-sunset-300 group-hover:text-sunset-400-sunset-300">THÊM THẺ</span>
            </div>

            <div className="flex justify-end mb-5">
                <Button loading={loading} type="submit" variant="contained" color="primary" sx={{
                    borderRadius: '32px',
                    height: '64px',
                    width: '100px'
                }}>
                    Tạo
                </Button>
            </div>
        </>
    )
}

export default CreateCourseQuestions