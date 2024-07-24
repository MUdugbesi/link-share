import React from "react";
import Image from "next/image";
import GitIcon from "../../public/Git.svg";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select";

interface SelectPlatformProps {
    selectedPlatform: string;
    handleSelect: (platform: string) => void;
}

const SelectPlatform: React.FC<SelectPlatformProps> = ({ selectedPlatform, handleSelect }) => {

    return (
        <Select onValueChange={handleSelect}>
            <SelectTrigger>
                <SelectValue placeholder={selectedPlatform || "Select a platform"} />
            </SelectTrigger>
            <SelectContent className="bg-bg-primary min-h-[343px]">
                <SelectGroup className="h-[48px]">
                    <SelectItem value="Github" className="flex gap-[80px]">
                        <Image src={GitIcon} alt="git icon" className="inline-flex mr-[10px]" />
                        Github
                    </SelectItem>
                    <SelectItem value="Youtube">Youtube</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectPlatform;
