import { formatFromNow } from "@/utils/date.format";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Avatar, Button, Divider } from "@mui/material";
import CardElement from "./card.element";

const Cards = ({ course }: { course: CourseResponse }) => {
    return (
        <div>
            <Divider sx={{ borderWidth: '1px', marginBlock: '20px' }} />
            <div className="flex items-start gap-x-3">
                <Avatar sx={{ width: '48px', height: '48px' }}>{course.createdBy.toUpperCase().charAt(0)}</Avatar>
                <div>
                    <p className="text-[12px] font-semibold text-gray-800-gray-400">Tạo bởi</p>
                    <div className="flex items-center gap-x-2">
                        <h2 className="font-semibold text-gray-800-200">{course.createdBy}</h2>
                        <span className="bg-twilight-100-gray-600 text-gray-800-gray-200 rounded-full px-2 text-[0.75rem] font-semibold">Giáo viên</span>
                    </div>
                    {!course.updatedAt ? (
                        <p className="text-gray-500 text-sm">Đã tạo {formatFromNow(course.createdAt)}</p>
                    ) : (
                        <p className="text-gray-500 text-sm">Cập nhật lần cuối {formatFromNow(course.updatedAt)}</p>
                    )}
                </div>
            </div>

            <h3 className="text-lg text-gray-800-gray-200 font-bold my-5">Thuật ngữ trong học phần này ({course.cards.length})</h3>
            <ul className="flex flex-col gap-y-3">
                {course.cards.map(card => {
                    return (
                        <CardElement card={card} key={card.id} />
                    )
                })}
            </ul>
            <div className="mt-5 flex justify-center">
                <Button variant="outlined" color="third" sx={{ borderRadius: '36px', borderWidth: '2px', fontSize: '1rem', fontWeight: 'bold', padding: '12px 22px', height: 'max-content' }} endIcon={<ModeEditOutlineOutlinedIcon />}>
                    Thêm hoặc xóa thuật ngữ
                </Button>
            </div>
        </div>
    )
}

export default Cards