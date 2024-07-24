import React from 'react';
import Image from 'next/image';
import ForwardArrow from '../../public/forward-arrow.svg';

//
interface Link {
    id: string,
    platform: string;
    url?: string;
}

interface SavedLinkCardProps {
    link: Link;
}

const SavedLinkCard: React.FC<SavedLinkCardProps> = ({ link }) => {
    return (
        <div className='w-[234px] h-[44px]'>
            {link.platform ? (
                <div className='bg-[black] flex h-full items-center justify-between p-[8px] rounded-lg'>
                    <p className='text-[white]'>{link.platform}</p>
                    {link.url && <span>{link.url}</span>}
                    <Image src={ForwardArrow} alt="arrow" />
                </div>
            ) : link.platform === "Youtube" ? (
                <div className='flex items-center'>
                    <p>{link.platform}</p>
                    <Image src={ForwardArrow} alt="arrow" />
                </div>
            ) : null}
        </div>
    );
};

export default SavedLinkCard;
