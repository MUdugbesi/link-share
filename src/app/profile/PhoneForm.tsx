"use client";

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "@/store";
import SavedLinkCard from '@/components/SavedLinkCard';
import FilePreview from './FilePreview';


interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: File | null;
}

interface PhoneFormProps {
    profile: Profile;
}

const PhoneForm: React.FC<PhoneFormProps> = ({ profile }) => {
    const savedLink = useSelector((state: RootState) => state.savedLink.savedLinks);

    const [saved, setSaved] = useState(savedLink);

    useEffect(() => {
        setSaved(savedLink);
    }, [savedLink]);

    return (
        <div className="h-[834px] bg-bg-primary p-[24px] rounded-[12px] hidden md:flex">
            <div className="bg-[url('/preview.svg')] h-[631px] w-[307px] mx-auto mt-[101.5px] relative">
                <div className="flex flex-col w-[237px] h-[514px] mx-auto top-[65px] left-[34px] absolute gap-[56px]">
                    <div className="w-full h-[158px]">
                        {profile.profilePicture && (
                            <div className='w-[96px] h-[96px] rounded-full border-[4px] border-bg-btn mx-auto bg-[white]'>
                                <FilePreview
                                    file={profile.profilePicture}
                                    className='w-[96px] h-[96px] object-contain'
                                    width={96}
                                    height={96}
                                />
                            </div>
                        )}
                        <p className='font-[600] text-[18px] text-[black] text-center mt-[18px] bg-bg-primary'>
                            {profile.firstName} {profile.lastName}
                        </p>
                        <p className='text-center text-[black] text-[14px] font-[400]'>{profile.email}</p>
                    </div>
                    <div className="flex flex-col w-full h-[300px] gap-[20px]">
                        {saved.map((link) => (
                            <SavedLinkCard key={link.id} link={link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneForm;
