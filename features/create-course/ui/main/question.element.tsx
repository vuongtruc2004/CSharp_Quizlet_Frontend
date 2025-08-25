'use client'
import { CustomTooltip } from '@/components/mui-custom/custom.tooltip';
import { useCreateCourse } from '@/wrapper/create-course/create.course.wrapper';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';

const QuestionElement = ({ question, index }: { question: IQuestion, index: number }) => {
    const { setQuestions, state } = useCreateCourse();
    const currentQuestionValidationResponse = state?.questions.find(q => q.id === question.id);

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: question.id });

    const [terminology, setTerminology] = useState(question.terminology);
    const [define, setDefine] = useState(question.define);

    const handleDelete = (id: string) => {
        setQuestions(qs => qs.filter(q => q.id !== id));
    };

    const saveChange = (field: "terminology" | "define", value: string) => {
        setQuestions(qs =>
            qs.map(q => (q.id === question.id ? { ...q, [field]: value } : q))
        );
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            className="bg-gray-100-gray-700 rounded-lg"
            suppressHydrationWarning
            style={{
                transition,
                transform: CSS.Transform.toString(transform),
            }}
        >
            <div className="flex items-center justify-between p-3 border-b-2 border-gray-200-gray-900">
                <div {...listeners} className="flex items-center justify-between flex-1 group cursor-grab">
                    <h2 className="font-semibold w-10 flex items-center justify-center">{index}</h2>
                    <CustomTooltip title="Kéo để sắp xếp lại">
                        <DragHandleOutlinedIcon
                            sx={{ fontSize: "1.5rem" }}
                            className="text-gray-300-gray-600 group-hover:text-gray-800-gray-200 transition-all duration-200"
                        />
                    </CustomTooltip>
                </div>

                <CustomTooltip title="Xóa thẻ ghi nhớ này">
                    <span
                        onClick={() => handleDelete(question.id)}
                        className="ml-3 w-8 h-8 rounded-full text-gray-800-gray-200 hover:bg-gray-300-gray-800 transition-all duration-200 cursor-pointer flex items-center justify-center"
                    >
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                    </span>
                </CustomTooltip>
            </div>

            <div className="grid grid-cols-2 gap-x-5 p-6 items-start">
                <FormControlLabel
                    sx={{ alignItems: "flex-start" }}
                    labelPlacement="top"
                    label={<span className="text-gray-800-gray-400 font-bold text-[12px]">THUẬT NGỮ</span>}
                    control={
                        <TextField
                            multiline
                            value={terminology}
                            onChange={(e) => setTerminology(e.target.value)}
                            onBlur={() => saveChange("terminology", terminology)}
                            variant="standard"
                            sx={{ width: "100%" }}
                            error={currentQuestionValidationResponse?.terminology.isError}
                            helperText={
                                currentQuestionValidationResponse?.terminology.isError && (
                                    <span className="flex items-center gap-x-1">
                                        <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                                        {currentQuestionValidationResponse.terminology.errorMessage}
                                    </span>
                                )
                            }
                        />
                    }
                />

                <FormControlLabel
                    sx={{ alignItems: "flex-start" }}
                    labelPlacement="top"
                    label={<span className="text-gray-800-gray-400 font-bold text-[12px]">ĐỊNH NGHĨA</span>}
                    control={
                        <TextField
                            multiline
                            value={define}
                            onChange={(e) => setDefine(e.target.value)}
                            onBlur={() => saveChange("define", define)}
                            variant="standard"
                            sx={{ width: "100%" }}
                            error={currentQuestionValidationResponse?.define.isError}
                            helperText={
                                currentQuestionValidationResponse?.define.isError && (
                                    <span className="flex items-center gap-x-1">
                                        <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                                        {currentQuestionValidationResponse.define.errorMessage}
                                    </span>
                                )
                            }
                        />
                    }
                />
            </div>
        </div>
    );
};

export default QuestionElement;