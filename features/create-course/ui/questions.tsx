import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from "@mui/material";
import { Fragment } from "react";
import QuestionElement from "./question.element";


const Questions = () => {
    const { questions, setQuestions, state, loading } = useCreateCourse();
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
        <SortableContext items={questions} strategy={verticalListSortingStrategy}>
            {questions.map((question, index) => {
                if (index < questions.length - 1) {
                    return (
                        <Fragment key={question.id}>
                            <QuestionElement question={question} index={index + 1} />
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
                    <QuestionElement key={question.id} question={question} index={index + 1} />
                )
            })}
        </SortableContext>
    )
}

export default Questions