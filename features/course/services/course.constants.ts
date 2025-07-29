export const SORT_OPTIONS = [
    { key: 1, value: 'createdDate', label: 'Ngày tạo' },
    { key: 2, value: 'terminology', label: 'Thuật ngữ' },
] as const;

export type SortOptions = (typeof SORT_OPTIONS)[number]['value'];

export const SORT_ORDERS = [
    { key: 1, value: 'asc', label: 'Tăng dần' },
    { key: 2, value: 'desc', label: 'Giảm dần' },
] as const;

export type SortOrders = (typeof SORT_ORDERS)[number]['value'];

