import { Divider, Pagination } from "@mui/material"
import CourseListItem from "./course.list.item"

const CourseList = () => {
    return (
        <div>
            <div className="flex items-center gap-x-5">
                <h2 className="text-sm font-semibold uppercase">Tháng 6 năm 2025</h2>
                <Divider className="flex-1" />
            </div>

            <div className="flex flex-col gap-y-3 mt-3">
                {Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <CourseListItem key={index} />
                    )
                })}
            </div>

            <div className="flex justify-end mt-5">
                <Pagination count={10} shape="rounded" showFirstButton showLastButton />
            </div>
        </div>
    )
}

export default CourseList