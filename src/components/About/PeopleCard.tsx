import React, { useEffect, useState } from 'react';
import getImage from '@utils/GetImage';
interface PeopleCardProps {
    name: string;
    title?: string;
    image?: string;
    url?: string;
    roles?: string[];
    size: 'md' | 'lg';
    ring?: boolean;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ name, title, image, url, roles, size, ring=false }) => {
    const sizeClass = size === 'md' ? 'w-48' : 'w-64';

    const avatarClass = ring ? 'rounded-full ring-4 ring-primary' : 'rounded-full';

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (image) {
            getImage(`people/${image}`).then(setImageSrc);
        }
    }, [image]);
        
    return (
        <div className="flex flex-col">
        <div className={`avatar ${image? '':'placeholder'}`}>
            {!imageSrc ? (
            <div className={`bg-secondary text-secondary-content ${avatarClass} ${sizeClass}`}>
                <span className="text-3xl">{name[0]}</span>
            </div>
            ) : (
            <div className={`${avatarClass} ${sizeClass}`}>
                <img src={imageSrc} alt={name}/>
            </div>
            )}
        </div>
        <div className={`text-center mt-4 ${sizeClass}`}>
            <a className="text-xl font-bold hover:text-primary active:text-accent" href={url} target="_blank" rel="noreferrer">{name}</a>
            <p className="text-secondary/50">{title}</p>
            <ul className="flex justify-center gap-2 mt-2 flex-wrap">
            {roles?.map((role, index) => (
                <li key={index} className="badge badge-outline hover:badge-primary hover:!text-white">{role}</li>
            ))}
            </ul>
        </div>
        </div>
    );
}

export default PeopleCard;