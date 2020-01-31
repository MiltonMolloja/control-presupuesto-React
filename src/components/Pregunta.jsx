import React , {Fragment, useState}from "react";
import Error from "./Error";

const Pregunta = ({setPresupuesto,setRestante, setMostrarPregunta}) => {

    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    const definirPresupuesto = e => {
        setCantidad( parseInt(e.target.value))
    }


    const agregarPresupuesto = e => {
        e.preventDefault()
        //Validacion
        if (cantidad < 1  || isNaN( cantidad )) {
            setError(true)
            return
        }
        if (!!cantidad) setError(false)

        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            { error ? <Error mensaje='El Presupuesto es Incorrecto'></Error> : null}
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type='numbre'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={ definirPresupuesto }/>

                <input 
                    type='submit'
                    className='u-full-width button-primary'
                    value='Definir Presupuesto'
                    />

            </form>
        </Fragment>
    )
}

export default Pregunta