'use client';
import { Box, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SidebarListItem from './sidebar.list.item';
import { useSidebarCollapse } from '@/wrapper/sidebar-collapse/sidebar.collapse.wrapper';
import { SIDEBAR_ELEMENTS } from './sidebar.elements';

const AppSidebar = () => {
    const { isCollapse } = useSidebarCollapse();

    return (
        <Box sx={{
            position: 'sticky',
            top: '78px',
            left: 0,
            width: isCollapse ? '76px' : '236px',
            display: 'flex',
            flexDirection: 'column',
            marginRight: '12px',
            height: 'calc(100vh - 78px)',
            padding: '2px 18px 0'
        }}>
            <ul className="flex flex-col gap-y-1 w-max">
                {SIDEBAR_ELEMENTS.map((element) => (
                    <SidebarListItem key={element.id} element={element} />
                ))}
            </ul>

            <Divider className='border-gray-600-gray-400' sx={{ borderWidth: '1px', marginBlock: '12px' }} />

            <h2 className={`font-bold text-sm text-gray-600-gray-400 overflow-hidden pl-4 transition-all duration-150 ${isCollapse ? 'h-0 my-0' : 'my-3'}`}>Thư mục của bạn</h2>

            <ul>
                <SidebarListItem key={4} element={{
                    id: 4,
                    name: 'Thư mục mục mới',
                    icon: <AddIcon />,
                    link: '/folder'
                }} />
            </ul>

            <Divider className='border-gray-600-gray-400' sx={{ borderWidth: '1px', marginBlock: '12px' }} />
        </Box>
    )
}

export default AppSidebar