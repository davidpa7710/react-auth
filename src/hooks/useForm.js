// REGLAS PARA CREAR UN HOOK
// Custom Hook es una función que utiliza otros hooks de React
// 1. Siempre debemos usar la palabra use, ejemplo: useForm
// 2. Siempre deben de ser funciones (A partir de React v16 usamos Hooks)
// 3. Siempre debo usar hooks de React (useState, useEffect, etc. etc.)
// 4. Deben ser reutilizables, no para casos muy especificos
import { useState, useEffect } from 'react'

// callback: función que procesará el envio del formulario
// defaults: valores por defecto del formulario

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults) // guardo los valores de mi formulario

  useEffect(() => {
    setInput({ ...defaults }) // spread operator
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target // Guardo el nombre y valor del componente que me invoco
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault() // Esto hace que no se recargue la página
    callback(input)
  }

  return {
    input,
    handleSubmit,
    handleInputChange
  }
}

export default useForm
