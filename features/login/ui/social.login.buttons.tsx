import { Button, Divider } from "@mui/material"

const SocialLoginButtons = () => {
    return (
        <>
            <Divider sx={{ marginBlock: '20px' }}>
                <p className="text-gray-800-gray-400 font-semibold px-5 text-sm">Hoặc đăng nhập với</p>
            </Divider>

            <div className="grid grid-cols-2 gap-x-3">
                <Button variant="outlined" color="third" sx={{ columnGap: '8px' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="google-icon" width={20} height={20} />
                    Google
                </Button>

                <Button variant="outlined" color="third" sx={{ columnGap: '8px' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="google-icon" width={20} height={20} />
                    Facebook
                </Button>
            </div>
        </>
    )
}

export default SocialLoginButtons