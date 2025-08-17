'use server'

export async function validateCreateCourse(questions: IQuestion[], prevState: any, formData: FormData): Promise<CreateCourseValidateResponse> {
    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    let isHaveAtLeast1ValidQuestion = false;

    const questionsValidateResponse: SingleQuestionValidateResponse[] = questions.map(question => {
        const questionResponse: SingleQuestionValidateResponse = {
            id: question.id,
            terminology: {
                isError: false
            },
            define: {
                isError: false
            }
        }

        if (question.terminology.trim() !== "" && question.define.trim() === "") {
            questionResponse.define.isError = true;
            questionResponse.define.errorMessage = "Vui lòng không để trống định nghĩa!";
        } else if (question.terminology.trim() === "" && question.define.trim() !== "") {
            questionResponse.terminology.isError = true;
            questionResponse.terminology.errorMessage = "Vui lòng không để trống thuật ngữ!"
        } else if (question.terminology.trim() !== "" && question.define.trim() !== "" && !isHaveAtLeast1ValidQuestion) {
            isHaveAtLeast1ValidQuestion = true;
        }
        return questionResponse;
    })

    const result: CreateCourseValidateResponse = {
        title: {
            isError: false,
            value: title
        },
        description,
        questions: questionsValidateResponse,
        isHaveAtLeast1ValidQuestion
    }

    if (title.trim() === "") {
        result.title.isError = true;
        result.title.errorMessage = "Tiêu đề không được để trống!";
    }

    return result;
}