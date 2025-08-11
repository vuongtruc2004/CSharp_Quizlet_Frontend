'use client'
import { Fragment, useState } from "react"
import CreateCourseQuestionElement from "./create.course.question.element";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from "@mui/material";
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

const CreateCourseQuestions = () => {
    const [items, setItems] = useState<IQuestion[]>([
        { id: 1, terminology: "sadas", define: "" },
        { id: 2, terminology: "", define: "" },
        { id: 3, terminology: "", define: "" },
        { id: 4, terminology: "", define: "asdasd" },
        { id: 5, terminology: "", define: "" }
    ]);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id === over?.id) return;

        const originalPos = items.findIndex(item => item.id === active.id);
        const newPos = items.findIndex(item => item.id === over?.id);
        setItems(items => {
            return arrayMove(items, originalPos, newPos);
        });
    }

    return (
        <div>
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} modifiers={[restrictToParentElement]}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    {items.map((question, index) => {
                        if (index < 4) {
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
                            <CreateCourseQuestionElement key={question.id} question={question} index={index} />
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
        </div>
    )
}

export default CreateCourseQuestions