"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { addLink, removeLink } from '@/store/Link';
import { addToPhone, removeFromPhone } from "@/store/SavedLinks";
import LinkCard from "@/components/LinkCard";
import SavedLinkCard from "@/components/SavedLinkCard";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Image from "next/image";
import Drag from "../../../public/drag.svg";
import { Button } from "@/components/ui/button";

interface Link {
    id: string;
    platform: string;
    url: string;
}

export default function HomePage() {
    const dispatch = useDispatch<AppDispatch>();
    // const links = useSelector((state: RootState) => state.link.links);
    // const savedLinks = useSelector((state: RootState) => state.savedLink.savedLinks);
    const [url, setUrl] = useState<string>("");
    const [selectedPlatform, setSelectedPlatform] = useState<string>("Github");
    const [tempLinks, setTempLinks] = useState<Link[]>([]);

    const handleSelect = (platform: string) => {
        setSelectedPlatform(platform);
    };

    const handleAddLinks = () => {
        if (url.trim() === "") return;

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
        <></>
        // <div className="grid grid-cols-[560px_808px] gap-[24px] h-[858px] justify-evenly">
        //     <div className="h-[834px] bg-bg-primary p-[24px] rounded-[12px]">
        //         <div className="bg-[url('/preview.svg')] h-[631px] w-[307px] mx-auto mt-[101.5px] relative">
        //             <div className="flex flex-col w-[237px] h-[514px] mx-auto top-[65px] left-[34px] absolute gap-[56px]">
        //                 <div className="w-full h-[158px]"></div>
        //                 <div className="flex flex-col w-full h-[300px] border gap-[20px]">
        //                     {
        //                         savedLinks.map((link) => (
        //                             <SavedLinkCard key={link.id} link={link} />
        //                         ))}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="h-auto bg-bg-primary rounded-[12px] gap-2">
        //         <div className="h-auto p-[40px] gap-[40px] flex flex-col">
        //             <div className="h-[80px] w-[728px] gap-[8px]">
        //                 <h2 className="heading_M">Customise your links</h2>
        //                 <p className="body_M">Add/edit/remove links below and then share all your profiles with the world!</p>
        //             </div>
        //             <div className="flex flex-col w-[728px] h-auto gap-[24px]">
        //                 <Button
        //                     className='border border-bg-btn w-full h-[46px] text-bg-btn gap-[8px] hover:bg-bg-btn-2'
        //                     onClick={handleAddLinks}
        //                 >
        //                     + Add new link
        //                 </Button>
        //                 <div className={`w-full ${links.length > 0 ? 'min-h-[539px] h-auto' : 'h-[539px]'}`}>
        //                     {links.length > 0 ? (
        //                         <div className="bg-bg-primary-2 w-[688px] h-[344px] mx-auto mt-[50px]">
        //                             <div className="h-[160px] w-[249.53px] mx-auto">
        //                                 <Image src={Drag} alt="drag and drop link" width={249.53} height={160} />
        //                             </div>
        //                             <div className="h-[144px] w-[488px] mx-auto text-center gap-[24px] flex flex-col">
        //                                 <h3 className="heading_M">Let&apos;s get you started</h3>
        //                                 <p className="body_M">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We&apos;re here to help you share your profiles with everyone!</p>
        //                             </div>
        //                         </div>
        //                     ) : (
        //                         <div className="h-auto">
        //                             {links.map((item) => (
        //                                 <LinkCard
        //                                     key={item.id}
        //                                     link={item}
        //                                     handleChange={handleChange}
        //                                     handleRemoveLinks={handleRemoveLinks}
        //                                     handleSelect={handleSelect}
        //                                     selectedPlatform={selectedPlatform}
        //                                 />
        //                             ))}
        //                         </div>
        //                     )}
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="h-[95px] border-t border-bg-primary-3 w-full flex justify-end items-center pr-[40px]">
        //             <Button
        //                 className='bg-bg-btn-2 w-[91px] h-[46px] text-bg-primary gap-[8px] hover:bg-bg-btn'
        //                 onClick={handleSaveLinks}
        //             >
        //                 Save
        //             </Button>
        //         </div>
        //     </div>
        // </div>
    );
}
