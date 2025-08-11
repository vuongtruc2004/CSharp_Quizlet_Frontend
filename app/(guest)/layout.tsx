import LoginSlider from "@/features/login/ui/login.slider"

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-[2fr_1.5fr] items-center bg-gray200-twilight900">
            <LoginSlider />
            {children}
        </div>
    )
}

export default GuestLayout