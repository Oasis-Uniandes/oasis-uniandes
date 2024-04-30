import PeopleCard from "./PeopleCard";
import { Reveal, RevealGroup } from '@utils/Reveal/index';
import teamData from '@data/team.json'; 


const Team: React.FC = () => {
    teamData.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className="container pt-8 flex gap-8 flex-wrap justify-center">
            <Reveal className="divider text-3xl w-full" delay={0.2} easing="easeOut">
            <span>Equipo</span>
            </Reveal>
            <RevealGroup className="flex gap-8 gap-x-16 flex-wrap justify-center" delay={0.1} duration={0.2} easing="easeOut">
            {teamData.map((person, index) => (
                <PeopleCard key={index} size="md" name={person.name} title={person.title} roles={person.roles} image={person.image} url={person.url}/>
            ))}
            </RevealGroup>
        </div>
    )
}

export default Team;