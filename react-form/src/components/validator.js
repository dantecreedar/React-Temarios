const edadValidator = (value)=>{
    return value >= 18 && value <=65; //true
}// creamos una validador, va a recibir el valor del campó que estamos validando y tendra que retornar true si el compo esta correcto o false de lo contrario

export { edadValidator }