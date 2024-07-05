import PropTypes from "prop-types";

export const MyComponent = ({ name }) => {

    const student = {
        name: "Daniel",
        lastName: "Murcia",
        mobile: "3508878499",
        linkedinProfile: "https://www.linkedin.com/daniel"
        };

    return (
    <div>
        <hr />
        <h4>Este es mi primer componente</h4>
        <p>Curso de React</p>
        <p>Docente: <strong>{name}</strong></p>
        <ul style={ {textAlign:'left'}}>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados</li>
            <li>Comunicación</li>
        </ul>
        <p>Estudiante: <strong>{student.name}{student.lastName}</strong></p>
        <ul>
            <li>Celular: {student.mobile}</li>
            <li>Linkedin: {student.linkedinProfile}</li>
        </ul>
    </div>
    )
}

MyComponent.propTypes = {
    name: PropTypes.string
}