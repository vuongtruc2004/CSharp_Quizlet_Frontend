'use client';
import { Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { SORT_OPTIONS, SortOptions, SortOrders } from "../services/course.constants";
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CourseSort = () => {
    const [sortOption, setSortOption] = useState<SortOptions>('createdDate');
    const [sortOrder, setSortOrder] = useState<SortOrders>('desc');

    const handleChangeSortOrder = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    }

    return (
        <div className="flex items-center gap-x-3">
            <CustomTooltip title={`${sortOrder === 'asc' ? 'Giảm dần' : 'Tăng dần'}`} arrow placement="bottom">
                <Button onClick={handleChangeSortOrder} variant="contained" color="primary" size="small" sx={{ borderRadius: '50%', width: '40px', height: '40px', minWidth: '40px' }}>
                    {sortOrder === 'asc' ? <KeyboardArrowUpIcon sx={{ fontSize: '1.2rem' }} /> : <KeyboardArrowDownIcon sx={{ fontSize: '1.2rem' }} />}
                </Button>
            </CustomTooltip>

            <Select
                value={sortOption} IconComponent={ArrowDropDownIcon} size="small"
                onChange={(e) => setSortOption(e.target.value)}
                sx={{
                    borderRadius: '12.5rem',
                    paddingInline: '12px',
                }}
                slotProps={{
                    notchedOutline: {
                        sx: {
                            borderColor: 'var(--color-gray-400-gray-600)',
                            borderWidth: '2px',
                        }
                    },
                }}
                MenuProps={{
                    slotProps: {
                        paper: {
                            sx: {
                                bgcolor: 'var(--color-gray200-twilight900)',
                                border: '1px solid var(--color-gray-400-gray-600)',
                                backgroundImage: 'none',
                                borderRadius: '8px',
                            }
                        }
                    }
                }}>
                {SORT_OPTIONS.map(option => {
                    return (
                        <MenuItem key={option.key} value={option.value}>
                            {option.label}
                        </MenuItem>
                    )
                })}
            </Select>
        </div>
    )
}

export default CourseSort