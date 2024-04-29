
interface PeopleCardProps {
    name: string;
    title?: string;
    image: string;
    url?: string;
    roles?: string[];
}

const PeopleCard: React.FC<PeopleCardProps> = ({ name, title, image, url, roles }) => {
    return (
        <div className="flex flex-col">
        <div className="avatar">
        <div className="w-64 rounded-full ring-4 ring-primary">
            <img src={image} alt={name} />
        </div>
        </div>
        <div className="text-center mt-4 w-64">
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