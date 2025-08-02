import Link from "next/link"

const LoginAppLogo = () => {
    return (
        <Link href={"/home"} className="flex items-center gap-x-2 justify-center absolute top-10 left-1/2 -translate-x-1/2">
            <img src="/logo.png" alt="app-logo" width={50} height={50} />
            <h2 className="font-semibold text-xl">Quizlet</h2>
        </Link>
    )
}

export default LoginAppLogo