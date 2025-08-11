'use client';
import { Box } from '@mui/material';
import { useSidebarCollapse } from '@/wrapper/sidebar-collapse/sidebar.collapse.wrapper';
import { SIDEBAR_ELEMENTS } from '../services/sidebar.constants';
import SidebarListItem from './sidebar.list.item';
import LogoButtons from '@/features/header/logo.buttons';

const CreatorSidebar = () => {
    const { isCollapse, setIsCollapse } = useSidebarCollapse();

    return (
        <Box sx={{
            position: 'fixed',
            zIndex: 100,
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            transition: 'all .3s ease',
            transform: isCollapse ? 'translateX(-100%)' : 'none',
            display: 'flex',
        }}>
            <Box sx={{
                width: '242px',
                height: '100%',
                paddingInline: '18px 24px',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'var(--color-gray200-twilight900)',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.2)'
            }}>
                <div className='py-3.5'>
                    <LogoButtons />
                </div>

                <ul className="flex flex-col gap-y-1 w-max">
                    {SIDEBAR_ELEMENTS.map((element) => (
                        <SidebarListItem key={element.id} element={element} />
                    ))}
                </ul>
            </Box>
            <div className='flex-1' onClick={() => setIsCollapse(true)} />
        </Box>
    )
}

export default CreatorSidebar