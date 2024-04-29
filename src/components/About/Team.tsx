import PeopleCard from "./PeopleCard";

import teamData from '@data/team.json'; 


const Team: React.FC = () => {
    teamData.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className="container pt-8 flex gap-8 gap-x-16 flex-wrap justify-center">
            <div className="divider text-3xl w-full">Equipo</div>
            {teamData.map((person, index) => (
                <PeopleCard key={index} size="md" name={person.name} title={person.title} roles={person.roles} image={person.image} url={person.url}/>
            ))}
        </div>
    )
}

export default Team;