interface ISidebarElement {
    id: number;
    name: string;
    icon: React.ReactNode;
    link: string;
    hasBadge?: boolean;
}