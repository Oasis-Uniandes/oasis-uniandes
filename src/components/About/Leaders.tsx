import PeopleCard from "./PeopleCard";


const Leaders: React.FC = () => {
    return (
        <div className="container pt-8 flex gap-8 gap-x-16 flex-wrap justify-center">
            <div className="divider text-3xl w-full">Líderes</div>
            <PeopleCard size="lg" name="Angel Abel Arismendy" title="Ingeniería de Sistemas" roles={["Líder",  "Monitor de Colivri", "Desarrollador Web", "Diseñador gráfico"]} image="abel.png" url="https://abel.arismendy.co"
            ring/>
            <PeopleCard size="lg" name="Juan Esteban Rodriguez" title="Ingeniería de Sistemas" roles={["Líder", "Monitor de Vivero Virtual"]} image="juan.png" ring/>
            <PeopleCard size="lg" name="Juan José Sierra" title="Ingeniería de Sistemas" roles={["Líder", "Monitor de Videojuegos"]} image="juanjo.jpg" ring/>
            <PeopleCard size="lg" name="Julian Mora" title="Maestría en Ingeniería de Sistemas" roles={["Líder", "Asistente Graduado"]} image="julian.png" ring/>
        </div>
    )
}

export default Leaders;