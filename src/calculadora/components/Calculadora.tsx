import React from 'react'

import Bottons from './Bottons'
import styles from '../styles/Calculadora.module.css'
import MainHandlers from '../handlers/MainHandlers'


const Calculadora:React.FC = () => {

  const {

    data,
    touch,
    eliminar,
    limpiar,
    resultado
   } = MainHandlers();

  return (
    <>
      <div className={ styles.main }> 
            <div className={styles.calculadora}>
                <span className={ styles.resultado }>{ data.resultado }</span>
                <span className={ styles.display } >{ data.operacion }</span>
                <Bottons texto="C" clase="gris"handlerClick={ limpiar }/>
                <Bottons texto="+/-" clase="gris" handlerClick={ touch }/>
                <Bottons texto="%" clase="gris" handlerClick={ touch }/>
                <Bottons texto="/" clase="operation"handlerClick={ touch }/>
                <Bottons texto="7" clase="numero"handlerClick={ touch }/>
                <Bottons texto="8" clase="numero"handlerClick={ touch }/>
                <Bottons texto="9" clase="numero"handlerClick={ touch }/>
                <Bottons texto="*" clase="operation"handlerClick={ touch }/>
                <Bottons texto="4" clase="numero"handlerClick={ touch }/>
                <Bottons texto="5" clase="numero"handlerClick={ touch }/>
                <Bottons texto="6" clase="numero"handlerClick={ touch }/>
                <Bottons texto="-" clase="operation"handlerClick={ touch }/>
                <Bottons texto="1" clase="numero"handlerClick={ touch }/>
                <Bottons texto="2" clase="numero"handlerClick={ touch }/>
                <Bottons texto="3" clase="numero"handlerClick={ touch }/>
                <Bottons texto="+" clase="operation"handlerClick={ touch }/>
                <Bottons texto="." clase="numero" handlerClick={ touch }/>
                <Bottons texto="0" clase="numero" handlerClick={ touch }/>
                <Bottons texto="<=" clase="numero"handlerClick={ eliminar }/>
                <Bottons texto="=" clase="operation"handlerClick={ resultado }/>
            </div>
      </div>
   </>

  )
}

export default Calculadora