import PeopleCard from "./PeopleCard";

import abelImg from '@assets/img/people/abel.png';
import juanImg from '@assets/img/people/juan.png';
import juanjoImg from '@assets/img/people/juanjo.jpg';
import julianImg from '@assets/img/people/julian.png';


const Leaders: React.FC = () => {
    return (
        <div className="container pt-8 flex gap-8 gap-x-16 flex-wrap justify-center">
            <div className="divider text-3xl w-full">Líderes</div>
            <PeopleCard size="lg" name="Angel Abel Arismendy" title="Ingeniería de Sistemas" roles={["Líder",  "Monitor de Colivri", "Desarrollador Web", "Diseñador gráfico"]} image={abelImg} url="https://abel.arismendy.co"/>
            <PeopleCard size="lg" name="Juan Esteban Rodriguez" title="Ingeniería de Sistemas" roles={["Líder", "Monitor de Vivero Virtual"]} image={juanImg}/>
            <PeopleCard size="lg" name="Juan José Sierra" title="Ingeniería de Sistemas" roles={["Líder", "Monitor de Videojuegos"]} image={juanjoImg}/>
            <PeopleCard size="lg" name="Julian Mora" title="Maestría en Ingeniería de Sistemas" roles={["Líder", "Asistente Graduado"]} image={julianImg}/>
        </div>
    )
}

export default Leaders;