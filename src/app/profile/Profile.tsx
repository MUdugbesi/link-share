"use client"

import React, { ChangeEvent, useState, useEffect } from 'react'
import ProfileForm from './ProfileForm'
import PhoneForm from './PhoneForm'
import { useDispatch, } from 'react-redux';
import { setUserProfile } from '@/store/Profile';
import { AppDispatch } from "@/store";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: File | null;

}

const Profile = () => {
    const { userLoggedIn } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (userLoggedIn) {
            router.push('/auth/login');
        } else {
            return;
        }
    }, [userLoggedIn, router]);

    const dispatch = useDispatch<AppDispatch>();


    const [profile, setProfile] = useState<Profile>({
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: null
    });

    const [savedProfile, setSavedProfile] = useState<Profile>(
        {
            firstName: '',
            lastName: '',
            email: '',
            profilePicture: null
        }
    )

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpg') && selectedFile.size < 2000000) {
            setProfile(prevProfile => ({
                ...prevProfile,
                profilePicture: selectedFile
            }));
        } else {
            console.log(selectedFile?.size);
        }
    };


    const handleChange = (e: { target: { name: any; value: any; }; }) => {

        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));


    };
    const handleProfileSave = () => {
        let valid = true;
        let newErrors = {
            firstName: '',
            lastName: '',
            email: ''
        };

        if (!profile.firstName) {
            valid = false;
            newErrors.firstName = 'First name is required';
        }

        if (!profile.lastName) {
            valid = false;
            newErrors.lastName = 'Last name is required';
        }

        if (!profile.email) {
            valid = false;
            newErrors.email = 'Email is required';
        }

        setErrors(newErrors);

        if (valid) {
            setSavedProfile(profile)
            dispatch(setUserProfile(profile))
        }
    };



    return (

        <div className="grid grid-cols-[560px_808px] gap-[24px] h-[858px] justify-evenly">
            <PhoneForm profile={savedProfile} />
            <ProfileForm handleChange={handleChange} handleProfileSave={handleProfileSave} profile={profile} handleFileSelect={handleFileSelect} errors={errors} />
        </div>
    )
}

export default Profile