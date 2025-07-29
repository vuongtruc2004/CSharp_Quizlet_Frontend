import VocabularySearch from "@/components/vocabulary/vocabulary.search"
import VocabularyTable from "@/components/vocabulary/vocabulary.table"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Từ Vựng',
}

const VocabularyPage = () => {
    return (
        <>
            <VocabularySearch />
            <VocabularyTable />
        </>

    )
}

export default VocabularyPage