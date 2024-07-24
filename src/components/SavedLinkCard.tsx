import React from 'react'
import ForwardArrow from "../../public/forward-arrow.svg"
import Image from 'next/image';


const SavedLinkCard = ({ link }) => {

    return (
        <div className='w-[234px] h-[44px]'>

            {link.platform ?
                <div className='bg-[black] flex h-full items-center justify-between p-[8px] rounded-lg'>
                    <p className='text-[white]'>{link.platform}</p>
                    <span>{link.url}</span>
                    <Image src={ForwardArrow} alt="arrow" />
                </div>
                : link.platform === "Youtube" ?
                    <div>
                        <p>{link.platform}</p>
                        <Image src={ForwardArrow} alt="arrow" />
                    </div>
                    : ""}

        </div>
    )
}

export default SavedLinkCard