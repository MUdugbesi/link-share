"use client"

import React, { ChangeEvent, useState, useEffect } from 'react'
import ProfileForm from './ProfileForm'
import PhoneForm from './PhoneForm'
import { useDispatch, } from 'react-redux';
import { setUserProfile } from '@/store/Profile';
import { AppDispatch } from "@/store";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

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
        if (!userLoggedIn) {
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
            if (selectedFile && selectedFile?.type !== 'image/png' || selectedFile?.type !== 'image/jpg') {
                toast("Wrong image type - upload the right type")
            }
            if (selectedFile && selectedFile?.size > 2000000) {
                toast("Size is over 2MB")
            }
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
            setProfile({email:'', lastName:'', firstName: ''})
            toast.success('Profile Saved')
        }
    };



    return (
        <>
            {userLoggedIn &&
                <div className="w-[375px] md:w-[1440px] mx-auto">
                    <div className="grid md:grid-cols-[560px_808px] w-full gap-6 md:gap-8 h-[858px] justify-evenly">
                        <PhoneForm profile={savedProfile} />
                        <ProfileForm handleChange={handleChange} handleProfileSave={handleProfileSave} profile={profile} handleFileSelect={handleFileSelect} errors={errors} />
                    </div>
                </div>

            }

        </>
    )

}

export default Profile