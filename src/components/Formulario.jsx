import React, { Fragment, useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({setGastos, setCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(NaN)
    const [error, setError] = useState(false)

    const agregarGasto = e =>{
        e.preventDefault()

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ) {
            setError(true)
            return
        }

        if (!!error)  setError(false)

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        setGastos(gasto)
        setCrearGasto(true)

        setCantidad(NaN)
        setNombre('')
    } 

    return(
        <Fragment>
            <form onSubmit={agregarGasto}>
                <h2>Agrega tus gastos Aqui</h2>

                { error ? <Error mensaje='Ambos campos son obligatorios o presupuesto Incorrecto'></Error> : null}

                <div className='campo'>
                    <label>Nombre del Gasto</label>
                    <input
                        type='text'
                        className='u-full-width'
                        placeholder='ej. Trasporte'
                        value={nombre}
                        onChange={e =>setNombre(e.target.value)}></input>
                </div>
                <div className='campo'>
                    <label>Cantidad del Gasto</label>
                    <input
                        type='number'
                        className='u-full-width'
                        placeholder='ej. 300'
                        value={isNaN(cantidad)? 0 : cantidad}
                        onChange={e =>setCantidad(parseInt(e.target.value))}></input>
                </div>

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Agregar Gasto'></input>
            </form>
        </Fragment>
    )
}

export default Formulario