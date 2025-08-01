import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import HomeIcon from '@/components/quizlet-icon/home.icon';
import FolderOpenedIcon from '@/components/quizlet-icon/folder.opened.icon';

export const SIDEBAR_ELEMENTS: ISidebarElement[] = [
    { id: 1, name: 'Trang chủ', icon: <HomeIcon />, link: '/home' },
    { id: 2, name: 'Học phần của bạn', icon: <FolderOpenedIcon />, link: '/your-course' },
    { id: 3, name: 'Sách', icon: <ImportContactsOutlinedIcon />, link: '/book' },
    { id: 4, name: 'Từ vựng', icon: <TranslateOutlinedIcon />, link: '/vocabulary' },
    { id: 5, name: 'Bảng chữ cái', icon: <AbcOutlinedIcon />, link: '/alphabet' },
];