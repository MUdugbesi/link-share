"use client";

import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import SelectPlatform from './SelectPlatform';

// Define types for props
interface Link {
    id: string;
    platform: string;
    url: string;
}

interface LinkCardProps {
    link: Link;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelect: (platform: string) => void;
    handleRemoveLinks: (id: string) => void;
    selectedPlatform: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, handleChange, handleSelect, handleRemoveLinks, selectedPlatform }) => {
    return (
        <div className="flex flex-col w-full md:h-[228px] h-auto gap-[24px] bg-bg-primary-2 mt-[20px] p-[20px] rounded-lg">
            <div className='w-full flex justify-between'>
                <p>Link #{link.id}</p>
                <span
                    onClick={() => handleRemoveLinks(link.id)}
                    className='cursor-pointer text-red-500 hover:text-red-700'
                >
                    Remove
                </span>
            </div>
            <div className='w-full'>
                <Label>Platform</Label>
                <SelectPlatform selectedPlatform={selectedPlatform} handleSelect={handleSelect} />
            </div>
            <div>
                <Label>Link</Label>
                <Input
                    type='text'
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    );
};

export default LinkCard;
