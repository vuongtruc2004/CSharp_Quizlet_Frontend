'use server'


export async function validateCreateCourse(
    questions: IQuestion[],
    prevState: any,
    formData: FormData
): Promise<CreateCourseValidateResponse> {
    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    const questionsValidateResponse: SingleQuestionValidateResponse[] = questions.map(question => {
        const questionResponse: SingleQuestionValidateResponse = {
            id: question.id,
            terminology: { isError: false, value: question.terminology },
            define: { isError: false, value: question.define }
        };

        if (question.terminology.trim() !== "" && question.define.trim() === "") {
            questionResponse.define.isError = true;
            questionResponse.define.errorMessage = "Vui lòng không để trống định nghĩa!";
        } else if (question.terminology.trim() === "" && question.define.trim() !== "") {
            questionResponse.terminology.isError = true;
            questionResponse.terminology.errorMessage = "Vui lòng không để trống thuật ngữ!";
        }

        return questionResponse;
    });

    const hasTitle = title.trim() !== "";
    const hasError = questionsValidateResponse.some(q => q.terminology.isError || q.define.isError);
    const hasValidQuestion = questions.some(question => question.define.trim() !== "" && question.terminology.trim() !== "");

    const isValid = hasTitle && hasValidQuestion && !hasError;

    const result: CreateCourseValidateResponse = {
        title: {
            isError: !hasTitle,
            value: title,
            errorMessage: !hasTitle ? "Tiêu đề không được để trống!" : undefined
        },
        description,
        questions: questionsValidateResponse,
        hasAtLeast1ValidQuestion: hasValidQuestion,
        isValid
    };

    return result;
}

export async function validateImport(prevState: any, formData: FormData): Promise<ImportValidateResponse> {
    const data = formData.get('data')?.toString() || "";

    const result: ImportValidateResponse = {
        isValid: true,
        data: {
            value: data,
            isError: false
        }
    }

    if (data.trim().length === 0) {
        result.data.isError = true;
        result.data.errorMessage = "Dữ liệu không được để trống!";
        result.isValid = false;
    }

    return result;
}
