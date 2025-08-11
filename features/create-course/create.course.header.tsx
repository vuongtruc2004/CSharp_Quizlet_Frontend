import { Button } from "@mui/material"

const CreateCourseHeader = () => {
    return (
        <div className="flex items-center justify-between py-5 sticky top-0 bg-gray200-twilight900 z-10">
            <h1 className="text-3xl font-bold">Tạo một học phần mới</h1>
            <Button variant="contained" disabled sx={{ borderRadius: '32px' }}>
                Tạo
            </Button>
        </div>
    )
}

export default CreateCourseHeader