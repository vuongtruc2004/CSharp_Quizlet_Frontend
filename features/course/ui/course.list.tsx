'use client'
import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CourseElement from "./course.element";

const CourseList = ({ page }: { page: PageDetailsResponse<CourseResponse[]> }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('pageNumber', value.toString());
        replace(`${pathname}?${params}`);
    }

    return (
        <>
            <div className="flex flex-col gap-y-3 mt-3">
                {page.content.map(course => (
                    <CourseElement course={course} key={course.id} />
                ))}
            </div>

            <div className="flex justify-end mt-5">
                <Pagination count={page.totalPages} page={page.pageNumber} shape="rounded" showFirstButton showLastButton onChange={handleChangePage} />
            </div>
        </>
    )
}

export default CourseList