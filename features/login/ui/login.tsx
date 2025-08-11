import Link from "next/link"
import LoginForm from "./login.form"
import SocialLoginButtons from "./social.login.buttons"
import LoginAppLogo from "./login.app.logo"

const Login = () => {
    return (
        <div className="flex items-center justify-center h-full p-10 relative">
            <LoginAppLogo />

            <div className="w-full">
                <h1 className="font-bold text-2xl text-center">Chào mừng trở lại</h1>
                <p className="text-sm text-gray-800-gray-400 font-semibold text-center mt-3 mb-5">Nhập email để truy cập tài khoản của bạn</p>

                <LoginForm />
                <SocialLoginButtons />

                <p className="text-sm font-semibold text-gray-800-gray-400 text-center mt-5">Bạn chưa có tài khoản? <Link href={"/register"} className="text-gray-100-twilight-500 hover:underline">Đăng kí ngay</Link></p>
            </div>
        </div>
    )
}

export default Login