
interface PeopleCardProps {
    name: string;
    title?: string;
    image: string;
    url?: string;
    roles?: string[];
    size: 'md' | 'lg';
}

const PeopleCard: React.FC<PeopleCardProps> = ({ name, title, image, url, roles, size }) => {
    return (
        <div className="flex flex-col">
        <div className="avatar">
        <div className={`rounded-full ring-4 ring-primary w-${size === 'md'? '48' : '64' }`}>
            <img src={image} alt={name} />
        </div>
        </div>
        <div className={`text-center mt-4 w-${size === 'md'? '48' : '64' }`}>
            <a className="text-xl font-bold hover:text-primary active:text-accent" href={url} target="_blank" rel="noreferrer">{name}</a>
            <p className="text-secondary/50">{title}</p>
            <ul className="flex justify-center gap-2 mt-2 flex-wrap">
            {roles?.map((role, index) => (
                <li key={index} className="badge badge-outline">{role}</li>
            ))}
            </ul>
        </div>
        </div>
    );
}

export default PeopleCard;