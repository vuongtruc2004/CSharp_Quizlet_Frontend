import { Pagination } from "@mui/material"
import CourseElement from "./course.element"

const CourseList = () => {
    return (
        <>
            <div className="flex flex-col gap-y-3 mt-3">
                {Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <CourseElement key={index} />
                    )
                })}
            </div>

            <div className="flex justify-end mt-5">
                <Pagination count={10} shape="rounded" showFirstButton showLastButton />
            </div>
        </>
    )
}

export default CourseList