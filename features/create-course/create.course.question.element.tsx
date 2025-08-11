import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import { TextField } from '@mui/material';
import { useSortable } from "@dnd-kit/sortable"

const CreateCourseQuestionElement = ({ id, index }: { id: number, index: number }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    return (
        <div className='bg-gray-100-gray-700 rounded-lg cursor-move group'>
            <div className='flex items-center justify-between p-3 border-b-2 border-gray-200-gray-900'>
                <h2 className='font-semibold w-10 flex items-center justify-center'>{index}</h2>
                <div className='flex items-center gap-x-3 text-gray-400-gray-600'>
                    <DragHandleOutlinedIcon sx={{ fontSize: '1.5rem' }} className='group-hover:text-gray-800-gray-200 transition-all duration-200' />
                    <span className='w-8 h-8 rounded-full text-gray-800-gray-200 hover:bg-gray-300-gray-800 transition-all duration-200 cursor-pointer flex items-center justify-center'>
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: '1.25rem' }} />
                    </span>
                </div>
            </div>

            <form action="" className='grid grid-cols-2 gap-x-5 p-6'>
                <TextField
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