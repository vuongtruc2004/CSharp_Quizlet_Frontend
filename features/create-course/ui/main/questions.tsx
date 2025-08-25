import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import AddIcon from '@mui/icons-material/Add';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Box, Button } from "@mui/material";
import { Fragment } from "react";
import { Virtuoso } from 'react-virtuoso';
import { v4 as uuidv4 } from 'uuid';
import CreateCourseFooter from "./create.course.footer";
import QuestionElement from "./question.element";

const Questions = () => {
    const { questions, setQuestions, state } = useCreateCourse();

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
        const newQuestion: IQuestion = {
            id: uuidv4(),
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

            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <SortableContext items={questions} strategy={verticalListSortingStrategy}>
                    <Virtuoso
                        components={{
                            Footer: CreateCourseFooter
                        }}
                        useWindowScroll
                        data={questions}
                        itemContent={(index, question) => {
                            if (index < questions.length - 1) {
                                return (
                                    <Fragment key={question.id}>
                                        <QuestionElement question={question} index={index + 1} />
                                        <Box sx={{
                                            height: '20px',
                                            position: 'relative',
                                            ':hover': { 'button': { opacity: 1 } }
                                        }}>
                                            <CustomTooltip title="Thêm thẻ" placement="bottom">
                                                <Button
                                                    onClick={() => handleAddAfterIndex(index)}
                                                    variant="contained"
                                                    color="primary"
                                                    sx={{
                                                        minWidth: '40px',
                                                        borderRadius: '50%',
                                                        padding: 0,
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        opacity: 0,
                                                        transition: 'all .2s ease'
                                                    }}
                                                >
                                                    <AddIcon />
                                                </Button>
                                            </CustomTooltip>
                                        </Box>
                                    </Fragment>
                                )
                            }
                            return <QuestionElement key={question.id} question={question} index={index + 1} />
                        }}
                    />
                </SortableContext>
            </DndContext>
        </>
    )
}

export default Questions;