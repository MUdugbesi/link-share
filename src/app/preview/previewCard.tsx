import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "@/store";
import FilePreview from '../profile/FilePreview';
import SavedLinkCard from '@/components/SavedLinkCard';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

const PreviewCard = () => {
    const userProfile = useSelector((state: RootState) => state.profile.profile);
    const savedLinks = useSelector((state: RootState) => state.savedLink.savedLinks);
    const { currentUser } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push('/auth/login');
        } else {
            return;
        }
    }, [currentUser, router]);

    console.log(currentUser)
    return (<>
        {userProfile && currentUser ? <div className="md:w-[349px] w-[311px] min-h-[569px] h-auto absolute rounded-[24px] p-[56px_48px] md:top-[208px] top-[104px] md:left-[646px] z-10 mx-auto md:shadow-lg md:bg-bg-primary">
            <div className="md:w-full h-[158px]">
                {userProfile.profilePicture && (
                    <div className="w-[96px] h-[96px] rounded-full border-[4px] border-bg-btn mx-auto bg-[white]">
                        <FilePreview
                            file={userProfile.profilePicture}
                            className="w-[96px] h-[96px] object-contain"
                            width={96}
                            height={96}
                        />
                    </div>
                )}
                <p className="font-[600] text-[18px] text-[black] text-center mt-[18px] bg-bg-primary">
                    {userProfile.firstName} {userProfile.lastName}
                </p>
                <p className="text-center text-[black] text-[14px] font-[400]">
                    {userProfile.email}
                </p>
            </div>
            <div className="w-[237px] min-h-[208px] h-auto flex gap-[20px] flex-col mt-[40px]">
                {savedLinks.map((link, i) => (
                    <SavedLinkCard link={link} key={i} />
                ))}
            </div>
        </div> : null}
    </>
    );
};

export default PreviewCard;
