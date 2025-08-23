// import { IVocabulary } from "@/features/vocabulary/services/vocabulary.table";
import VocabularySearch from "@/features/vocabulary/ui/vocabulary.search";
import VocabularyTable from "@/features/vocabulary/ui/vocabulary.table";
import { sendRequest } from "@/utils/fetch.api";
import { apiUrl } from "@/utils/url";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Từ Vựng",
};

const VocabularyPage = async () => {
  const vocabularies: IVocabulary[] = [
    { id: 1, kanji: "水", japanese: "みず", meaning: "nước" },
    { id: 2, kanji: "火", japanese: "ひ", meaning: "lửa" },
    { id: 3, kanji: "山", japanese: "やま", meaning: "núi" },
    { id: 4, kanji: "川", japanese: "かわ", meaning: "sông" },
    { id: 5, kanji: "人", japanese: "ひと", meaning: "người" },
    { id: 6, kanji: "日", japanese: "ひ", meaning: "mặt trời / ngày" },
    { id: 7, kanji: "月", japanese: "つき", meaning: "mặt trăng / tháng" },
    { id: 8, kanji: "田", japanese: "た", meaning: "ruộng" },
    { id: 9, kanji: "雨", japanese: "あめ", meaning: "mưa" },
    { id: 10, kanji: "木", japanese: "き", meaning: "cây" },
  ];

  const historySearch = [
    { id: 1, title: "水" },
    { id: 2, title: "木" },
    { id: 3, title: "雨" },
  ];

  const vocabularyResponse = await sendRequest<
    ApiResponse<VocabularyResponse[]>
  >({
    url: `${apiUrl}/Vocabularies`,
  });

  return (
    <div className="pl-4.5">
      <VocabularySearch historySearch={historySearch} />
      <VocabularyTable vocabularies={vocabularyResponse.data} />
    </div>
  );
};

export default VocabularyPage;
