import VocabularySearch from "@/features/vocabulary/ui/vocabulary.search";
import VocabularyTable from "@/features/vocabulary/ui/vocabulary.table";
import { sendRequest } from "@/utils/fetch.api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Từ Vựng",
};

const VocabularyPage = async () => {
  const vocabularyResponse = await sendRequest<
    ApiResponse<VocabularyResponse[]>
  >({
    url: `/v1/vocabularies`,
  });

  const lessonResponse = await sendRequest<ApiResponse<LessonResponse[]>>({
    url: `/v1/lessons`,
  });

  console.log("Ls", vocabularyResponse);

  return (
    <div className="pl-4.5">
      <VocabularySearch lessons={lessonResponse.data} />
      <VocabularyTable
        vocabularies={vocabularyResponse.data}
        lessons={lessonResponse.data}
      />
    </div>
  );
};

export default VocabularyPage;
