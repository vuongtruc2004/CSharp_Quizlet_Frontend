import { Metadata } from "next"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AlphabetTab from "@/components/alphabet-page/alphabet.tab";


export const metadata: Metadata = {
    title: 'Bảng chữ cái',
}

const AlphabetPage = () => {

    return (
        <>
            <div className="ml-27">
                <div className="flex text-twilight-500-twilight-300">
                    <AutoStoriesIcon sx={{ fontSize: 40 }} className="mr-3 " />
                    <p className="text-4xl mb-5 font-black ">Chữ cái tiếng Nhật</p>
                </div>
                <p>Tiếng Nhật có 3 loại chữ là: Hiragana, Katakana và Kanji tức chữ Hán.</p>
                <p>Hiragana và Katakana là chữ biểu âm, mỗi chữ thể hiện 1 âm, còn chữ Hán là chữ biểu ý, mỗi chữ có ý nghĩa nhất định.</p>
            </div>
            <div className="mt-8 flex justify-center">
                <AlphabetTab />
            </div>
        </>

    )
}

export default AlphabetPage