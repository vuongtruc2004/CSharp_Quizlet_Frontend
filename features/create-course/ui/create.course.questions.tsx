'use client'
import { Fragment } from "react"
import CreateCourseQuestionElement from "./create.course.question.element";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from "@mui/material";
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";

const CreateCourseQuestions = () => {
    const { questions, setQuestions, title, description } = useCreateCourse();

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id === over?.id) return;

        const originalPos = questions.findIndex(question => question.id === active.id);
        const newPos = questions.findIndex(question => question.id === over?.id);
        setQuestions(questions => {
            return arrayMove(questions, originalPos, newPos);
        });
    }

    const handleAddAfterIndex = (index: number) => {
        const id = questions.length ? Math.max(...questions.map(question => question.id)) + 1 : 1;
        const newQuestion: IQuestion = {
            id,
            terminology: `id: ${id}`,
            define: ""
        };

        const newQuestions = [...questions];
        newQuestions.splice(index + 1, 0, newQuestion);
        setQuestions(newQuestions);
    }

    const handleSubmit = () => {
        console.log(title);
        console.log(description);
        console.log(questions);
    }

    return (
        <div>
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} modifiers={[restrictToParentElement]}>
                <SortableContext items={questions} strategy={verticalListSortingStrategy}>
                    {questions.map((question, index) => {
                        if (index < questions.length - 1) {
                            return (
                                <Fragment key={question.id}>
                                    <CreateCourseQuestionElement question={question} index={index + 1} />
                                    <Box sx={{
                                        height: '20px',
                                        position: 'relative',
                                        ':hover': {
                                            'button': {
                                                opacity: 1
                                            }
                                        }
                                    }}>
                                        <CustomTooltip title="Thêm thẻ" placement="bottom">
                                            <Button onClick={() => handleAddAfterIndex(index)} variant="contained" color="primary" sx={{
                                                minWidth: '40px',
                                                borderRadius: '50%',
                                                padding: 0,
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                opacity: 0,
                                                transition: 'all .2s ease'
                                            }}>
                                                <AddIcon />
                                            </Button>
                                        </CustomTooltip>
                                    </Box>
                                </Fragment>
                            )
                        }
                        return (
                            <CreateCourseQuestionElement key={question.id} question={question} index={index + 1} />
                        )
                    })}
                </SortableContext>

                <div onClick={() => handleAddAfterIndex(questions.length - 1)} className="w-full bg-gray-100-gray-700 rounded-lg h-28 my-5 flex items-center justify-center group cursor-pointer">
                    <span className="transition-all duration-200 font-bold text-gray-800-gray-200 border-b-4 border-sky-400 pb-3 group-hover:border-sunset-400-sunset-300 group-hover:text-sunset-400-sunset-300">THÊM THẺ</span>
                </div>

                <div className="flex justify-end mb-5">
                    <Button onClick={handleSubmit} variant="contained" color="primary" sx={{
                        borderRadius: '32px',
                        height: '64px',
                        width: '100px'
                    }}>
                        Tạo
                    </Button>
                </div>
            </DndContext>
        </div>
    )
}

export default CreateCourseQuestions