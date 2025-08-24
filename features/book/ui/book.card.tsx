'use client';
import React from 'react';
import Link from 'next/link';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import EditRounded from '@mui/icons-material/EditRounded';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import { IconButton, Tooltip } from '@mui/material';

interface BookCardProps {
    id: string;
    slug: string;
    title: string;
    description: string;
    chapters: number[];
    image: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
    slug, title, description, chapters, image, onEdit, onDelete
}) => {
    return (
        <div className="bg-[#2E3553] text-white rounded-xl p-4 shadow-lg w-full relative">
            <div className="absolute top-2 right-2 flex gap-1">
                <StarBorderPurple500OutlinedIcon className="opacity-80" />
                <Tooltip title="Sửa">
                    <IconButton size="small" onClick={onEdit}><EditRounded className="text-white" fontSize="small" /></IconButton>
                </Tooltip>
                <Tooltip title="Xóa">
                    <IconButton size="small" onClick={onDelete}><DeleteRounded className="text-white" fontSize="small" /></IconButton>
                </Tooltip>
            </div>

            {/* bấm vào card để đi đến trang chương, sau này bạn làm pages/[slug] */}
            <Link href={`/books/${slug}`} className="block">
                <div className="flex gap-6">
                    <img src={image} alt={title} className="w-32 h-44 object-cover rounded" />
                    <div className="flex-1">
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-sm opacity-75 mb-2">{description}</p>
                        <p className="mb-1 font-semibold">Chương:</p>
                        <div className="flex flex-wrap gap-2">
                            {chapters.map((ch) => (
                                <span key={ch} className="px-3 py-1 text-xs border border-gray-500 rounded hover:bg-[#3f4a7a]">
                                    {ch}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;
