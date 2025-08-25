import { CustomProgressBar } from "@/components/mui-custom/custom.progress.bar";
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import LearnIcon from "@/components/quizlet-icon/learn.icon";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Link from "next/link";

const LearnCourseProgressBar = ({ quiz }: { quiz: QuizResponse }) => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between">
                <Link href={"/home"} className="flex items-center gap-x-3">
                    <LearnIcon />
                    <p className="text-gray-800-gray-200 font-semibold">Học</p>
                </Link>
                <div className="flex items-center gap-x-3">
                    <CustomTooltip title="Chỉnh sửa">
                        <span
                            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer"
                        >
                            <SettingsOutlinedIcon sx={{ fontSize: '1rem' }} />
                        </span>
                    </CustomTooltip>

                    <CustomTooltip title="Đọc">
                        <span
                            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-300-gray-800 cursor-pointer"
                        >
                            <CloseOutlinedIcon sx={{ fontSize: '1rem' }} />
                        </span>
                    </CustomTooltip>
                </div>
            </div>
            <CustomProgressBar variant="determinate" value={50} />
        </div>
    )
}

export default LearnCourseProgressBar