"use client";
import { Button, FormControlLabel, TextField } from "@mui/material";

const RegisterForm = () => {
    return (
        <form action="">
            <FormControlLabel control={<TextField
                sx={{
                    width: '100%',
                    '& fieldset': {
                        borderWidth: 0,
                    },
                    '&:focus fieldset': {
                        borderWidth: '1px'
                    },
                }}
                name="name"
                size="small"
                fullWidth
                placeholder="Nhập tên tài khoản"
                slotProps={{
                    input: {
                        sx: {
                            height: '40px',
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
            />} label={<p className="mb-1 font-semibold">Tên tài khoản</p>} labelPlacement="top" sx={{ width: '100%', alignItems: 'start', marginInline: 0, marginBottom: '12px' }} />

            <FormControlLabel control={<TextField
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
                size="small"
                fullWidth
                placeholder="Nhập email đăng kí"
                slotProps={{
                    input: {
                        sx: {
                            height: '40px',
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
            />} label={<p className="mb-1 font-semibold">Email</p>} labelPlacement="top" sx={{ width: '100%', alignItems: 'start', marginInline: 0, marginBottom: '20px' }} />

            <Button variant="contained" color="primary" fullWidth size="small" type="submit">Tiếp tục</Button>
        </form>
    );
};

export default RegisterForm;