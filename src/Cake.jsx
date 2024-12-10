/*const cake = () => {
    return(
        <div>cake</div>
    )
}
export default cake*/

//invocar las variables
//desestructuración - JS
function Cake({color, sabor}) {

  return (
    <div>cake - {color} - {sabor}</div>
  )
}

export default Cake