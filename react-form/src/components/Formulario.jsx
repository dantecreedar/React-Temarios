import React from 'react'
import {useForm} from 'react-hook-form'; //importamos react-hook-form despues de instalarlo
import { edadValidator } from './validator'
import '../../public/css/fromulario.css'
import image from '../assets/WebPack.png'


function Formulario() {

  const { register,formState:{errors},watch, handleSubmit } = useForm({
    defaultValues:{
      nombre: 'Daiana',
      direccion: 'Denis 4999',
      email: 'UTN@gmail.com',
      edad: '18'      
    }
  }); // devuelve un objeto
  //register => registra los diferentes cambios => nos pemrite colocar las validaciones
  //handleSubmit => gestiona el envio de datos// //el formState nos indica el estado de l formulario y que errores tiene 
  const onSubmit = (data)=>{ //function del evento onSubmit
      console.log(data)
  }

  //incluir telefono
  const incluirTelefono = watch('incluirTelefono')

    //La funcion Watch nos permite ver en tiempo real lo que el ususario se encuentra escribiendo
  return (
    <div className='containerForm'>
      <div className='titlePrincipal'>
        <h2 className = 'titleForm'>Formulario</h2>
        <img src={image} className="imageReact" alt="React logo" />
      </div>
      <form className='formulario_Content' onSubmit={handleSubmit(onSubmit)}> {/*con el eventLisenert le indicamos con que elementos trabajara*/}
        <div className = 'labelName'>
          <label>Nombre</label>
          <p>{watch('nombre')} </p>
          <input type="text" name="" {...register('nombre', {
            required: true, //insertamos validadores dentro del objeto
            maxLength: 10
          })} /> {/*llamamos a la funcion register con el identificador nombre y asi correspondiente conn los demas*/}
          {errors.nombre?.type === 'required' && <p>El campo es requerido</p> } {/*Condicion*/}
          {errors.nombre?.type === 'maxLength' && <p>debe tener menos de 10 caracteres</p> }
        </div> 
        <div className='labelEmail'>
          <label>Email</label>
          <p>{watch('email')} </p>
          <input type="text" name="" {...register('email', {
            pattern: /\S+@\S+\.\S+/ //Patrones regulares
          })} />
          {errors.email?.type === 'pattern' && <p>El formato del Email es incorrecto</p>}
        </div>
        <div className='labelEdad'>
          <label>Edad</label>
          <input type="text" name="" {...register('edad', {
            validate: edadValidator,
            maxLength: 2
          })} />
          {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
        </div>
        <div className='labelPais'>
          <label className='paisTags'>Pais</label>
          <select {...register('pais', {
            required: true
          })} >
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>
        <div className='labelTelefono'>
          <label>¿Incluir Telefono?</label>
          <input className='checkTelefono' type='checkbox' {...register('incluirTelefono')} />
        </div>
        {incluirTelefono && (
          <div>
            <label className='labelTelefono_check'>Telefono</label>
            <input type='text' {...register('telefono')} />
        </div>
        )}
        
        <button className='submitEnviar' type = "submit" value="Enviar">Enviar</button>

      </form>
    </div>
  )
}

export default Formulario
