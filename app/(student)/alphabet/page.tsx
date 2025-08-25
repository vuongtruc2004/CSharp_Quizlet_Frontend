import { Metadata } from "next";
import AlphabetTab from "@/features/alphabet/ui/alphabet.tab";
import { sendRequest } from "@/utils/fetch.api";

export const metadata: Metadata = {
  title: "Bảng chữ cái",
};

const AlphabetPage = async () => {
  const kanjiResponse = await sendRequest<ApiResponse<VocabularyResponse[]>>({
    url: `/v1/vocabularies/kanji`,
  });
  return <AlphabetTab kanjies={kanjiResponse.data} />;
};

export default AlphabetPage;
