import React from 'react'
import PressableButton from './buttons';

export default function Teclado({ botones }:any) {
    return (
        <>
            {botones.map((btn:any, index:any) => (
                <PressableButton
                    key={index}
                    texto={btn.texto}
                    clase={btn.clase}
                    onPress={btn.onPress}
                    icon={btn.icon}
                />
            ))}
        </>
    )
}