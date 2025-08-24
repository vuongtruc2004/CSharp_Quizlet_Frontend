import { Divider } from "@mui/material"
import FlashCardIcons from "./flash.card.icons"

const CardElement = ({ card }: { card: CardResponse }) => {
    return (
        <li className="px-6 py-5 rounded-lg bg-gray-200-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-x-10 text-lg">
                <p className="text-wrap max-w-[300px]">{card.terminology}</p>
                <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px', borderColor: 'var(--color-gray-200-gray-900)' }} />
                <p className="text-wrap max-w-[300px]">{card.define}</p>
            </div>

            <div className='flex items-center gap-x-3'>
                <FlashCardIcons size={10} fontSize={1.25} />
            </div>
        </li>
    )
}

export default CardElement