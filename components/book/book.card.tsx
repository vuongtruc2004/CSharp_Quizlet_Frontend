import React from 'react';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

interface BookCardProps {
  title: string;
  description: string;
  chapters: number[];
  image: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, description, chapters, image }) => {
  return (
    <div className="bg-[#2E3553] text-white rounded-xl p-4 shadow-lg w-full relative">
      <div className="absolute top-2 right-2 cursor-pointer">
        <StarBorderPurple500OutlinedIcon />
      </div>
      <div className="flex gap-6">
        <img src={image} alt={title} className="w-32 h-44 object-cover rounded" />
        <div className="flex-1">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm opacity-75 mb-2">{description}</p>
          <p className="mb-1 font-semibold">Chương:</p>
          <div className="flex flex-wrap gap-2">
            {chapters.map((ch) => (
              <button
                key={ch}
                className="px-3 py-1 text-xs border border-gray-500 rounded hover:bg-[#3f4a7a]"
              >
                {ch}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
