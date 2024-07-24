import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function FilePreview({ file, className, width, height }) {
    const [fileUrl, setFileUrl] = useState('');

    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file);
            setFileUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [file]);

    return (
        <div>
            {fileUrl ? (
                <Image src={fileUrl} alt={file.name} width={width} height={height} className={className} />
            ) : null}
        </div>
    );
}

export default FilePreview;
