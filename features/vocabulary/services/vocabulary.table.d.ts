interface IVocabulary {
    id: number,
    kanji: string,
    japanese: string,
    meaning: string,
}

interface IHistorySearch {
    id: number,
    title: string,
}

interface IProps {
    historySearch: IHistorySearch[];
}