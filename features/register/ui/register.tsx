import RegisterForm from "./register.form";
import LoginAppLogo from "@/features/login/ui/login.app.logo";
import SocialLoginButtons from "@/features/login/ui/social.login.buttons";
import Link from "next/link";

const Register = () => {
    return (
        <div className="flex items-center justify-center h-full p-10 relative">
            <LoginAppLogo />

            <div className="w-full">
                <h1 className="font-bold text-2xl text-center">Đăng kí</h1>
                <p className="text-sm text-gray-800-gray-400 font-semibold text-center mt-3 mb-5">Điền các thông tin dưới đây để tạo tài khoản mới</p>

                <RegisterForm />
                <SocialLoginButtons />

                <p className="text-sm font-semibold text-gray-800-gray-400 text-center mt-5">Bạn dã có tài khoản? <Link href={"/login"} className="text-gray-100-twilight-500 hover:underline">Đăng nhập ngay</Link></p>
            </div>
        </div>
    );
};

export default Register;