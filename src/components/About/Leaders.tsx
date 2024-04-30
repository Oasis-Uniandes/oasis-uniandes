import PeopleCard from "./PeopleCard";

import { Reveal, RevealGroup } from '@utils/Reveal/index'; 

const Leaders: React.FC = () => {
    return (
        <div className="container pt-8 flex gap-8 gap-x-16 flex-wrap justify-center">
            <Reveal className="divider text-3xl w-full" delay={0.2} easing="easeOut">
            <span>Líderes</span>
            </Reveal>
            <RevealGroup className="flex gap-8 gap-x-16 flex-wrap justify-center" delay={0.1} duration={0.35} easing="easeOut">
            <PeopleCard size="lg" name="Angel Abel Arismendy" title="Ingeniería de Sistemas" roles={["Líder",  "Monitor de Colivri", "Desarrollador Web", "Diseñador gráfico"]} image="abel.png" url="https://abel.arismendy.co"
            ring/>
            <PeopleCard size="lg" name="Juan Esteban Rodriguez" title="Ingeniería de Sistemas" roles={["Líder", "Monitor de Vivero Virtual"]} image="juan.png" ring/>
            <PeopleCard size="lg" name="Juan José Sierra" title="Ingeniería de Sistemas" roles={["Líder", "Monitor de Videojuegos"]} image="juanjo.jpg" ring/>
            <PeopleCard size="lg" name="Julian Mora" title="Maestría en Ingeniería de Sistemas" roles={["Líder", "Asistente Graduado"]} image="julian.png" ring/>
            </RevealGroup>
        </div>
    )
}

export default Leaders;