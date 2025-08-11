import { Button, Checkbox, Divider, FormControlLabel, InputAdornment, TextField } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const LoginForm = () => {
    return (
        <form action="">
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

            <FormControlLabel sx={{ marginBlock: '12px' }} control={<Checkbox size="small" />} label={<p className="font-semibold text-sm">Ghi nhớ dăng nhập</p>} />

            <Button variant="contained" color="primary" fullWidth size="small" type="submit">Tiếp tục</Button>
        </form>
    )
}

export default LoginForm