export default function ComParametro( props) {
    return (
    <div>
        <h2>{ props.titulo }</h2>
        <p>{ props.aluno}
             tem nota 
            <strong>{props.nota}</strong></p>

    </div>
    )
}