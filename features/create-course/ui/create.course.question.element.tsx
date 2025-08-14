import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import { TextField } from '@mui/material';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"
import { CustomTooltip } from '@/components/mui-custom/custom.tooltip';
import { useCreateCourse } from '@/wrapper/create-course/create.course.wrapper';
import { ChangeEvent } from 'react';

const CreateCourseQuestionElement = ({ question, index }: { question: IQuestion, index: number }) => {
    const { setQuestions, questions } = useCreateCourse();
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: question.id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    const handleDelete = (id: number) => {
        setQuestions(questions => questions.filter(question => question.id !== id));
    }

    const handleChangeTerminal = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: number) => {
        setQuestions(questions => questions.map(question => question.id === id ? { ...question, terminology: e.target.value } : question));
    }

    const handleChangeDefine = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: number) => {
        setQuestions(questions => questions.map(question => question.id === id ? { ...question, define: e.target.value } : question));
    }

    return (
        <div ref={setNodeRef} {...attributes} style={style} className='bg-gray-100-gray-700 rounded-lg'>
            <div className='flex items-center justify-between p-3 border-b-2 border-gray-200-gray-900'>
                <div {...listeners} className='flex items-center justify-between flex-1 group cursor-grab'>
                    <h2 className='font-semibold w-10 flex items-center justify-center'>{index}</h2>
                    <CustomTooltip title="Kéo để sắp xếp lại">
                        <DragHandleOutlinedIcon sx={{ fontSize: '1.5rem' }} className='text-gray-300-gray-600 group-hover:text-gray-800-gray-200 transition-all duration-200' />
                    </CustomTooltip>
                </div>

                <span onClick={() => handleDelete(question.id)} className='ml-3 w-8 h-8 rounded-full text-gray-800-gray-200 hover:bg-gray-300-gray-800 transition-all duration-200 cursor-pointer flex items-center justify-center'>
                    <DeleteOutlineOutlinedIcon sx={{ fontSize: '1.25rem' }} />
                </span>
            </div>

            <form className='grid grid-cols-2 gap-x-5 p-6'>
                <TextField
                    defaultValue={question.terminology}
                    multiline
                    onChange={(e) => handleChangeTerminal(e, question.id)}
                    variant="standard"
                    helperText={<span className='text-gray-800-gray-400 font-bold text-[12px]'>THUẬT NGỮ</span>}
                    slotProps={{
                        formHelperText: {
                            sx: {
                                marginTop: '8px'
                            }
                        }
                    }}
                />

                <TextField
                    defaultValue={question.define}
                    multiline
                    onChange={(e) => handleChangeDefine(e, question.id)}
                    variant="standard"
                    helperText={<span className='text-gray-800-gray-400 font-bold text-[12px]'>ĐỊNH NGHĨA</span>}
                    slotProps={{
                        formHelperText: {
                            sx: {
                                marginTop: '8px'
                            }
                        }
                    }}
                />
            </form>
        </div>
    )
}

export default CreateCourseQuestionElement