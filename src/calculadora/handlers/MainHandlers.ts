import React,{useState} from 'react'

    const MainHandlers = () => {
      const[data,setData] = useState({operacion:'',resultado:''})

     const touch = (event: React.MouseEvent<HTMLDataElement, MouseEvent>) => {
      
      const valor = event.currentTarget.innerText 
       const esOperacion = valor === '+'||valor === '-'||valor === '+'||valor === '/'||valor === '+/-'||valor === '%'

    if( data.operacion.length >= 10 ) return
    if(valor === '+/-' && data.operacion === '')return
    if(valor === '%' && data.operacion.includes('%')) return

    if (data.operacion.includes('Error sintaxis')){
      setData({...data,operacion:valor})
    } else if (data.resultado !== '' && data.operacion === '' && esOperacion){
      setData({...data,operacion:`${data.resultado}` +  valor})
    } else if (valor === '+/-' && data.operacion !== '') {

      if (data.operacion.slice(0,1) === '-') {
        setData({ ...data,operacion: `${data.operacion.slice(1,data.operacion.length)}`})
      } else{
        setData({...data,operacion: `-${data.operacion}`})
      }
    } else {
      setData({...data,operacion:`${data.operacion}`+ valor})
    }

  }


  const eliminar = ( ) => {
    setData({ ...data,operacion:data.operacion.slice(0,data.operacion.length -1 )})
  }

  const limpiar = () => {
    setData({ operacion:'',resultado:''})
  }
  const resultado = () => { 

    try {
      let resultado = ''

      if(data.operacion.includes('%')){
        const valores = data.operacion.split('%')
        resultado = eval(`${valores[1]}*(${valores[0]}/100)`)
      } else {
        resultado = eval(data.operacion)
      }

      setData({...data,resultado,operacion:''})
    } catch (error) {
    setData({...data,operacion:'Error sintaxis'})
      
    }
  }
  return{
    data,
    touch,
    eliminar,
    limpiar,
    resultado

  }

}
export default MainHandlers


  