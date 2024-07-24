import Image from 'next/image';
import React, { useState, useEffect } from 'react';


interface FilePreviewProps {
    file: File | null; 
    className?: string; 
    width: number;
    height: number;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, className, width, height }) => {
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file);
            setFileUrl(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setFileUrl(null);
        }
    }, [file]);

    return (
        <div>
            {fileUrl && (
                <Image
                    src={fileUrl}
                    alt={file?.name || 'Preview'}
                    width={width}
                    height={height}
                    className={className}
                />
            )}
        </div>
    );
};

export default FilePreview;
