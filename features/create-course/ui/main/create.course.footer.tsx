import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import { Button } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

const CreateCourseFooter = () => {
    const { questions, setQuestions, isPending } = useCreateCourse();

    const handleAddLast = () => {
        const newQuestion: IQuestion = {
            id: uuidv4(),
            terminology: "",
            define: ""
        };
        questions.push(newQuestion);
        setQuestions([...questions]);
    }

    return (
        <div className="pb-5">
            <div onClick={handleAddLast} className="w-full bg-gray-100-gray-700 rounded-lg h-28 my-5 flex items-center justify-center group cursor-pointer">
                <span className="transition-all duration-200 font-bold text-gray-800-gray-200 border-b-4 border-sky-400 pb-3 group-hover:border-sunset-400-sunset-300 group-hover:text-sunset-400-sunset-300">THÊM THẺ</span>
            </div>

            <div className="flex justify-center">
                <Button loading={isPending} type="submit" variant="contained" color="primary" sx={{
                    borderRadius: '8px',
                    height: '64px',
                    width: '60%'
                }}>
                    Tạo
                </Button>
            </div>
        </div>
    )
}

export default CreateCourseFooter