const Bienvenida = (props) => {
  const textoFinal = props.edad >= 18 ? "Puedes crearte una cuenta" : "Llamaré a tus padres"

  return <div>
    <p> Bienvenido {props.nombre} {props.apellido}</p>
    <p>Tu edad es: {props.edad}</p>
    <p>{textoFinal}</p>

  </div>
}

export default Bienvenida