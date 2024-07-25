"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { addLink, removeLink } from '@/store/Link';
import { addToPhone, removeFromPhone } from "@/store/SavedLinks";
import LinkCard from "@/components/LinkCard";
import SavedLinkCard from "@/components/SavedLinkCard";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

interface Link {
    id: string;
    platform: string;
    url: string;
}

export default function Home() {
    const { userLoggedIn } = useAuth();
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const links = useSelector((state: RootState) => state.link.links);
    const savedLinks = useSelector((state: RootState) => state.savedLink.savedLinks);
    const [url, setUrl] = useState<string>("");
    const [selectedPlatform, setSelectedPlatform] = useState<string>("Github");
    const [tempLinks, setTempLinks] = useState<Link[]>([]);

    const handleSelect = (platform: string) => {
        setSelectedPlatform(platform);
    };

    const handleAddLinks = () => {
        const id = uuid();
        const newLink: Link = { id, platform: selectedPlatform, url };
        dispatch(addLink(newLink));
        setTempLinks(prevLinks => [...prevLinks, newLink]);
        setUrl("");
    };

    const handleSaveLinks = () => {
        if (tempLinks.length > 0) {
            tempLinks.forEach(link => {
                dispatch(addToPhone(link));
            });
            setTempLinks([]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const handleRemoveLinks = (id: string) => {
        dispatch(removeFromPhone(id));
        dispatch(removeLink(id));
    };

    

    return (
        <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-[560px_808px] gap-6 md:gap-8 lg:gap-12 h-auto justify-evenly p-4 lg:p-0">
            <div className="bg-bg-primary p-4 lg:p-6 rounded-2xl">
                <div className="bg-[url('/preview.svg')] h-[300px] md:h-[400px] lg:h-[631px] w-full md:w-[307px] mx-auto mt-8 md:mt-16 lg:mt-[101.5px] relative">
                    <div className="flex flex-col w-full md:w-[237px] h-auto md:h-[514px] mx-auto top-16 md:top-[65px] absolute gap-4 md:gap-8 lg:gap-[56px]">
                        <div className="w-full h-24 md:h-[158px]"></div>
                        <div className="flex flex-col w-full h-auto md:h-[300px] border gap-2 md:gap-4 lg:gap-[20px]">
                            {savedLinks.map((link) => (
                                <SavedLinkCard key={link.id} link={link} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-bg-primary rounded-2xl flex flex-col gap-2 p-4 lg:p-6">
                <div className="flex flex-col gap-4 lg:gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl lg:text-2xl font-semibold">Customise your links</h2>
                        <p className="text-base lg:text-lg text-gray-500">Add/edit/remove links below and then share all your profiles with the world!</p>
                    </div>
                    <Button
                        className='border border-bg-btn w-full h-12 text-bg-btn gap-2 hover:bg-bg-btn-2'
                        onClick={handleAddLinks}
                    >
                        + Add new link
                    </Button>
                    <div className={`w-full ${links.length > 0 ? 'min-h-[200px] md:min-h-[400px] lg:min-h-[539px]' : 'h-[200px] md:h-[400px] lg:h-[539px]'}`}>
                        {!links.length ? (
                            <div className="bg-bg-primary-2 w-full h-full mx-auto mt-4 md:mt-8 lg:mt-12 flex flex-col items-center justify-center text-center">
                                <Image src='/drag.svg' alt="drag and drop link" width={150} height={100} className="mb-4 md:mb-8" />
                                <h3 className="text-xl lg:text-2xl font-semibold">Let&apos;s get you started</h3>
                                <p className="text-base lg:text-lg text-gray-500">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We&apos;re here to help you share your profiles with everyone!</p>
                            </div>
                        ) : (
                            <div className="h-auto">
                                {links.map((item) => (
                                    <LinkCard
                                        key={item.id}
                                        link={item}
                                        handleChange={handleChange}
                                        handleRemoveLinks={handleRemoveLinks}
                                        handleSelect={handleSelect}
                                        selectedPlatform={selectedPlatform}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="border-t border-bg-primary-3 w-full flex justify-end items-center pt-4 mt-4">
                    <Button
                        className='bg-bg-btn-2 w-24 h-12 text-bg-primary hover:bg-bg-btn'
                        onClick={handleSaveLinks}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}
