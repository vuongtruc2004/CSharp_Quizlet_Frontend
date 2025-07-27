export const SORT_OPTIONS = [
    { key: 1, value: 'all', label: 'Tất cả' },
    { key: 2, value: 'createdDate', label: 'Ngày tạo' },
    { key: 3, value: 'terminology', label: 'Thuật ngữ' },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]['value'];