"use client"

import React from 'react';
import Image from 'next/image';
import DevLogo from '../../../public/dev_logo.svg'
import DevLink from '../../../public/devlinks.svg'
import { Button } from '../ui/button';
import LinkIcon from "../../../public/link.svg"
import ProfileIcon from "../../../public/profile.svg"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
    return (
        <>

            {!pathname.includes('preview') ?
                <nav className='w-[1392px] h-[78px] mx-auto bg-bg-primary rounded-[12px] mt-[24px] mb-[24px] flex items-center'>
                    <ul className='w-[1352px] mx-auto h-[46px] flex justify-between'>
                        <div className='flex w-[146px] 32px items-center'>
                            <Image src={DevLogo} alt="Logo" width={26.67} height={26.67} />
                            <Image src={DevLink} alt="Logo" width={108} height={21} />
                        </div>
                        <div className='w-[325px] h-[46px] flex gap-[16px]'>
                            <Link href='/home' className={`flex items-center justify-center gap-[8px] heading_S w-[122px] h-full ${pathname.includes('/home') ? `rounded-lg bg-bg-btn-2  text-bg-btn` : `hover:bg-bg-btn-2`}`}><Image src={LinkIcon} alt='link' />Links</Link>
                            <Link href='/profile' className={`w-[187px] flex justify-center items-center gap-[8px] ${pathname.startsWith('/profile') ? `rounded-lg bg-bg-btn-2  text-bg-btn` : ``}`}>
                                <Image src={ProfileIcon} alt='profile' />
                                <span className='heading_S'>Profile Details</span>
                            </Link>
                        </div>
                        <Link href='/preview' className='flex items-center justify-center heading_S border rounded-lg border-bg-btn w-[122px] h-full text-bg-btn gap-[8px] hover:bg-bg-btn-2'>Preview</Link>
                    </ul>
                </nav>
                :
                <div className='bg-bg-btn w-[1440px] h-[357px] flex rounded-bl-[32px] rounded-br-[32px] z-0 mx-auto'>
                    <nav className='w-[1392px] h-[78px] mx-auto bg-bg-primary rounded-[12px] mt-[24px] mb-[24px] flex items-center'>
                        <ul className='w-[1352px] mx-auto h-[46px] flex justify-between'>
                            <Link href='/profile' className='flex items-center justify-center heading_S border rounded-lg border-bg-btn w-[122px] h-full text-bg-btn gap-[8px] hover:bg-bg-btn-2'>Back to Editor</Link>
                            <Link href='' className='flex items-center justify-center heading_S border rounded-lg bg-bg-btn w-[122px] h-full text-bg-primary  gap-[8px] hover:opacity-80'>Share Link</Link>
                        </ul>
                    </nav>
                </div >

            }


        </>
    )
}

export default NavBar