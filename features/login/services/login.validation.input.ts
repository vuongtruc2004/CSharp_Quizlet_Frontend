
export function validateInput(value: { email: string; password: string }, setError: (message: string) => void, setTypeError: (type: number) => void): boolean {
    if (value.email.trim().length === 0) {
        setError("Email không được để trống!");
        setTypeError(1);
        return false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
        setError("Email không hợp lệ!");
        setTypeError(1);
        return false;
    }

    if (value.password.trim().length === 0) {
        setError("Mật khẩu không được để trống!");
        setTypeError(2);
        return false;
    }
    if (value.password.length < 8 || value.password.length > 32) {
        setError("Mật khẩu phải từ 8 đến 32 ký tự!");
        setTypeError(2);
        return false;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value.password)) {
        setError("Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt!");
        setTypeError(2);
        return false;
    }
    setError("");
    return true;
}