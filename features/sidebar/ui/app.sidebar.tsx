'use client';
import { Box } from '@mui/material';
import { useSidebarCollapse } from '@/wrapper/sidebar-collapse/sidebar.collapse.wrapper';
import { SIDEBAR_ELEMENTS } from '../services/sidebar.constants';
import SidebarListItem from './sidebar.list.item';

const AppSidebar = () => {
    const { isCollapse } = useSidebarCollapse();

    return (
        <Box sx={{
            position: 'sticky',
            top: '78px',
            left: 0,
            width: isCollapse ? '82px' : '242px',
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 78px)',
            paddingTop: '2px',
            paddingInline: '18px 24px',
            transition: 'all .2s ease'
        }}>
            <ul className="flex flex-col gap-y-1 w-max">
                {SIDEBAR_ELEMENTS.map((element) => (
                    <SidebarListItem key={element.id} element={element} />
                ))}
            </ul>
        </Box>
    )
}

export default AppSidebar