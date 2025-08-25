'use client'
import { Alert, Button, Checkbox, Divider, FilledInput, FormControlLabel, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useState } from "react";
import { validateInput } from "../services/login.validation.input";
import { sendRequest } from "@/utils/fetch.api";
import { Console } from "console";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const [user, setUser] = useState<LoginUserRequest>();
    const [remember, setRemember] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();
    const [typeError, setTypeError] = useState<number>(0);
    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue((s) => ({ ...s, [name]: value }));
    }

    const handleToggleShowPassword = () => {
        setShowPassword(s => !s);
    }

    const validateLogin = () => {
        return validateInput(value, setError, setTypeError);
    }

    const saveToken = (token: string, refreshToken: string) => {
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const isValid = validateInput(value, setError, setTypeError); // validate email + password
        if (!isValid) {
            return;
        }

        try {
            const authors = await sendRequest<ApiResponse<TokenResponse>>({
                url: '/v1/Auth/login',          // hoặc '/auth/login' nếu không versioning
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    email: value.email,
                    password: value.password
                }
            });

            console.log('authors =', authors.data); // <- dòng 53 sẽ chạy nếu không throw
            // ví dụ lưu token
            if (authors?.data?.accessToken && authors?.data?.refreshToken) saveToken(authors.data.accessToken, authors.data.refreshToken);
            router.push("/home");
        } catch (err: any) {
            console.error('login error:', err);
            setError(err?.message || 'Đăng nhập thất bại.');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                sx={{
                    width: '100%',
                    '& fieldset': {
                        borderWidth: 0,
                    },
                    '&:focus fieldset': {
                        borderWidth: '1px'
                    },
                }}
                name="email"
                fullWidth
                placeholder="Nhập email đăng nhập"
                onChange={handleChange}
                helperText={typeError === 1 ? error : ""}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <div className="flex items-center gap-x-2">
                                    <EmailOutlinedIcon />
                                    <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px', borderColor: 'var(--color-gray-300-gray-600)' }} />
                                </div>
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '8px',
                            bgcolor: 'var(--color-gray-200-gray-700)',
                            borderWidth: 0,
                            transition: 'all .2s ease',
                            '&:focus-within': {
                                bgcolor: 'transparent'
                            }
                        }
                    }
                }}
            />

            <TextField
                sx={{
                    width: "100%",
                    mt: 2,
                    "& fieldset": { borderWidth: 0 },
                    "&:focus fieldset": { borderWidth: "1px" },
                    "& .MuiInputBase-root": {
                        borderRadius: "8px",
                        bgcolor: "var(--color-gray-200-gray-700)",
                        transition: "all .2s ease",
                    },
                    "& .MuiInputBase-root.Mui-focused": {
                        bgcolor: "transparent",
                    },
                }}
                name="password"
                fullWidth
                placeholder="Nhập mật khẩu đăng nhập"
                type={showPassword ? 'text' : 'password'}
                helperText={typeError === 2 ? error : ""}
                onChange={handleChange}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <div className="flex items-center gap-x-2 px-1">
                                    <IconButton size="small" onClick={handleToggleShowPassword} edge="start"
                                        sx={{ padding: 0 }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px', borderColor: 'var(--color-gray-300-gray-600)' }} />
                                </div>
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '8px',
                            bgcolor: 'var(--color-gray-200-gray-700)',
                            borderWidth: 0,
                            transition: 'all .2s ease',
                            '&:focus-within': {
                                bgcolor: 'transparent'
                            }
                        }
                    }
                }}
            />




            <FormControlLabel sx={{ marginBlock: '12px' }} control={<Checkbox size="small" />} label={<p className="font-semibold text-sm">Ghi nhớ dăng nhập</p>} />

            <Button variant="contained" color="primary" fullWidth size="small" type="submit">Tiếp tục</Button>
        </form>
    )
}

export default LoginForm