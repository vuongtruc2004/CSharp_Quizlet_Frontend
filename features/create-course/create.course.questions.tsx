'use client'
import { Fragment } from "react"
import CreateCourseQuestionElement from "./create.course.question.element";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from "@mui/material";
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { closestCorners, DndContext } from "@dnd-kit/core"

const CreateCourseQuestions = () => {
    const items = [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 }
    ];
    return (
        <DndContext collisionDetection={closestCorners}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map(item => {
                    if (item.number < 5) {
                        return (
                            <Fragment key={item.id}>
                                <CreateCourseQuestionElement id={item.id} index={item.number} />
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
                                        <Button variant="contained" color="primary" sx={{
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
                        <CreateCourseQuestionElement key={item.id} id={item.id} index={item.number} />
                    )
                })}
            </SortableContext>

            <div className="w-full bg-gray-100-gray-700 rounded-lg h-28 my-5 flex items-center justify-center group cursor-pointer">
                <span className="transition-all duration-200 font-bold text-gray-800-gray-200 border-b-4 border-sky-400 pb-3 group-hover:border-sunset-400-sunset-300 group-hover:text-sunset-400-sunset-300">THÊM THẺ</span>
            </div>

            <div className="flex justify-end mb-5">
                <Button variant="contained" color="primary" sx={{
                    borderRadius: '32px',
                    height: '64px',
                    width: '100px'
                }}>
                    Tạo
                </Button>
            </div>
        </DndContext>
    )
}

export default CreateCourseQuestions