'use server'

export async function validateImport(prevState: any, formData: FormData): Promise<ImportValidateResponse> {
    const data = formData.get('data')?.toString() || "";
    const radio1 = formData.get('radio1')?.toString() || "tab";
    const radio2 = formData.get('radio2')?.toString() || "newline";

    const result: ImportValidateResponse = {
        data: {
            value: data,
            isError: false
        }
    }

    if (data.trim().length === 0) {
        result.data.isError = true;
        result.data.errorMessage = "Dữ liệu không được để trống!";
    }

    console.log(result.data.value);

    return result;
}