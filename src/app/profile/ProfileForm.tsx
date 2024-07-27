"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';
import FilePreview from './FilePreview';

// Define the types for profile and errors
interface Profile {
    profilePicture?: File | null;
    firstName: string;
    lastName: string;
    email: string;
}

interface Errors {
    firstName?: string;
    lastName?: string;
    email?: string;
}

// Define the props interface for the ProfileForm component
interface ProfileFormProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleProfileSave: () => void;
    profile: Profile;
    handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errors: Errors;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
    handleChange,
    handleProfileSave,
    profile,
    handleFileSelect,
    errors
}) => {
    return (
        
            <div className="h-auto bg-bg-primary rounded-[12px] gap-2 max-sm:w-[375px]">
                <div className="h-[739px] p-[40px] gap-[40px] flex flex-col">
                    <div className="h-[80px] w-[311px] md:w-[728px] gap-[8px]">
                        <h2 className="heading_M">Profile Details</h2>
                        <p className="body_M">Add your details to create a personal touch to your profile.</p>
                    </div>

                    <div className="flex md:w-[728px] w-[311px] h-auto gap-[24px] bg-bg-primary-2 rounded-[12px]">
                        <div className='w-[688px] md:h-[233px] h-[255px] mx-auto grid md:grid-cols-[240px_432px] gap-[16px] items-center'>
                            <p className='body_M w-[240px]'>Profile Picture</p>
                            <div className='flex max-sm:flex-col h-[193px] w-[432px] gap-[24px] md:items-center'>
                                <div className='h-[193px] w-[193px] rounded-lg bg-bg-btn-2 flex justify-center items-center relative'>
                                    {!profile.profilePicture ? (
                                        <label htmlFor='dropzone'>
                                            <Image src='/upload.svg' alt='upload' width={116} height={72} className='hover:cursor-pointer' />
                                        </label>
                                    ) : (
                                        <FilePreview file={profile.profilePicture} className='w-[193px] h-[193px] object-contain rounded-lg' width={193} height={193} />
                                    )}
                                    {profile.profilePicture && (
                                        <label htmlFor='dropzone'>
                                            <Image src='/change.svg' alt='change' width={116} height={72} className='absolute top-[50px] right-[45px] hover:cursor-pointer' />
                                        </label>
                                    )}
                                    <input id='dropzone' type='file' className='hidden' onChange={handleFileSelect} />
                                </div>
                                <p className='body_S w-[215px]'>Image must be below 1024x1024px. Use PNG or JPG format.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:w-[728px] w-[311px] h-auto bg-bg-primary-2 rounded-[12px]">
                        <div className='md:w-[688px] w-[311px] h-[233px] mx-auto flex flex-col justify-evenly'>
                            <div className='w-full h-[48px] bg-bg-primary-2 flex max-sm:flex-col justify-between md:items-center max-sm:mb-[40px]'>
                                <p className='body_M'>First name <sup>*</sup></p>
                                <div className='flex flex-col'>
                                    <Input
                                        className='md:w-[432px] h-[48px]'
                                        placeholder='e.g. John'
                                        name='firstName'
                                        value={profile.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.firstName && <p className="text-text-red text-xs mt-1">{errors.firstName}</p>}
                                </div>
                            </div>
                            <div className='w-full h-[48px] bg-bg-primary-2 flex max-sm:flex-col justify-between md:items-center max-sm:mb-[40px]'>
                                <p className='body_M'>Last name <sup>*</sup></p>
                                <div className='flex flex-col'>
                                    <Input
                                        className='md:w-[432px] h-[48px]'
                                        placeholder='e.g. Appeased'
                                        name='lastName'
                                        value={profile.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.lastName && <p className="text-text-red text-xs mt-1">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className='w-full h-[48px] bg-bg-primary-2 flex max-sm:flex-col justify-between md:items-center'>
                                <p className='body_M'>Email<sup>*</sup></p>
                                <div className='flex flex-col'>
                                    <Input
                                        className='md:w-[432px] h-[48px]'
                                        placeholder='e.g. email@example.com'
                                        name='email'
                                        type='email'
                                        value={profile.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <p className="text-text-red text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="h-[95px] border-t border-bg-primary-3 w-full flex justify-end items-center md:pr-[40px]">
                    <Button className='bg-bg-btn-2 w-[311px] max-sm:mx-auto md:w-[91px] h-[46px] text-bg-primary gap-[8px] hover:bg-bg-btn' onClick={handleProfileSave}>Save</Button>
                </div>
            </div>
        
    );
}

export default ProfileForm;
