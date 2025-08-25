const FlashCardIcon = ({ size }: { size?: number }) => {
    return (
        <svg
            viewBox="0 0 32 32"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            width={size || 28}
            height={size || 24}
            fill="currentColor"
        >
            <path d="M8.155 12.824C8.155 11.264 9.4 10 10.939 10h16.704c1.538 0 2.784 1.264 2.784 2.824v12.351c0 1.56-1.246 2.825-2.784 2.825H10.94c-1.538 0-2.784-1.265-2.784-2.825v-12.35Z" fill="#51CFFF"></path>
            <path d="M2.428 6.825C2.428 5.265 3.68 4 5.228 4h16.8c1.546 0 2.8 1.265 2.8 2.825v12.35c0 1.56-1.254 2.825-2.8 2.825h-16.8c-1.547 0-2.8-1.265-2.8-2.825V6.825Z" fill="#4255FF"></path>
        </svg>
    )
}

export default FlashCardIcon