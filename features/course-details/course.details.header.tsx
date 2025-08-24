import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import FlashCardIcon from "@/components/quizlet-icon/flash.card.icon";
import LearnIcon from "@/components/quizlet-icon/learn.icon";
import ShareIcon from "@/components/quizlet-icon/share.icon";
import { slugifyText } from "@/utils/helpers";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from "next/link";

const CourseDetailsHeader = ({ course }: { course: CourseResponse }) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-gray-800-gray-200 text-3xl">{course.title}</h1>
                <div className="flex items-center gap-x-3">
                    <p className="hover:bg-gray100-grayException750 transition-all gap-x-3 duration-200 cursor-pointer w-28 h-10 rounded-4xl flex items-center justify-center border-2 border-gray-200-gray-700 bg-gray200-twilight900">
                        <BookmarkBorderIcon sx={{ fontSize: '1.25rem' }} />
                        <span className="text-sm font-bold text-gray-800-gray-200">Lưu</span>
                    </p>

                    <CustomTooltip title="Chia sẻ">
                        <span className="hover:bg-gray100-grayException750 transition-all duration-200 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-200-gray-700 bg-gray200-twilight900">
                            <ShareIcon />
                        </span>
                    </CustomTooltip>

                    <CustomTooltip title="Xem thêm">
                        <span className="hover:bg-gray100-grayException750 transition-all duration-200 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-200-gray-700 bg-gray200-twilight900">
                            <MoreHorizIcon />
                        </span>
                    </CustomTooltip>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-5 my-5">
                <div className="cursor-pointer bg-gray-200-gray-700 p-4 rounded-lg flex items-center gap-x-3 transition-all duration-300 border-b-4 border-gray-100-gray-700 hover:border-twilight-500-twilight-300">
                    <FlashCardIcon />
                    <p className="font-semibold text-gray-800-gray-200">Thẻ ghi nhớ</p>
                </div>
                <Link href={`/learn-course/${slugifyText(course.title + "-" + course.id)}`} className="bg-gray-200-gray-700 p-4 rounded-lg flex items-center gap-x-3 transition-all duration-300 border-b-4 border-gray-100-gray-700 hover:border-twilight-500-twilight-300">
                    <LearnIcon />
                    <p className="font-semibold text-gray-800-gray-200">Học</p>
                </Link>
            </div>
        </>
    )
}

export default CourseDetailsHeader