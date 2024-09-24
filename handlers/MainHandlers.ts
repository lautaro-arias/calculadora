import { useState } from "react";

const OPERACIONES = ["+", "-", "*", "/", "+/-", "%"];

export default function MainHandlers() {
  const [data, setData] = useState({ operacion: "", resultado: "" });

  const touch = (dato: string) => {
    const valor = dato;

    if (isInvalidOperation(valor)) return;

    if (data.operacion.includes("Error sintaxis")) {
      resetOperacion(valor);

    } else if (isNewOperation(valor)) {
      startNewOperation(valor);
    } else if (valor === "+/-") {
      toggleSign();
    } else {
      appendToOperacion(valor);
    }
  };

  const isInvalidOperation = (valor: string) => {
    if (data.operacion.length >= 15) {
      alert("La operacion supera los 15 caracteres");
      return true;
    }
    if (valor === "+/-" && data.operacion === "") {
      alert("No se puede realizar esta operacion");
      return true;
    }
    if (valor === "%" && data.operacion.includes("%")) {
      alert("No se puede realizar esta operacion");
      return true;
    }

    return false;
  };

  const resetOperacion = (valor: string) => {
    setData({ ...data, operacion: valor });
  };

  const isNewOperation = (valor: string) => {
    return (
      data.resultado !== "" &&
      data.operacion === "" &&
      OPERACIONES.includes(valor)
    );
  };

  const startNewOperation = (valor: string) => {
    setData({ ...data, operacion: `${data.resultado}${valor}` });
  };

  const toggleSign = () => {
    const newOperacion = data.operacion.startsWith("-")
      ? data.operacion.slice(1)
      : `-${data.operacion}`;
    setData({ ...data, operacion: newOperacion });
  };

  const appendToOperacion = (valor: string) => {
    setData({ ...data, operacion: `${data.operacion}${valor}` });
  };


  const eliminar = () => {
    setData({
      ...data,
      operacion: data.operacion.slice(0, data.operacion.length - 1),
    });
  };

  const limpiar = () => {
    setData({ operacion: "", resultado: "" });
  };

  const resultado = () => {
    try {
      let resultado = "";

      if (data.operacion.includes("%")) {
        const valores = data.operacion.split("%");
        resultado = eval(`${valores[1]}*(${valores[0]}/100)`);
      } else {
        resultado = eval(data.operacion);
      }
      setData({ ...data, resultado, operacion: "" });
    } catch (error) {
      setData({ ...data, operacion: "Error sintaxis" });
    }
  };

  return {
    data,
    touch,
    eliminar,
    limpiar,
    resultado,
  };
}
