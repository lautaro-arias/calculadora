import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainHandlers from '@/handlers/MainHandlers';
import DataButtons from '@/components/dataButtons';

export default function Calculadora() {
    const { data, touch, eliminar, limpiar, resultado } = MainHandlers();

    return (
        <>
            <View style={styles.main}>
                <View style={styles.calculadora}>
                    <View style={styles.contenedor}>
                        <Text style={styles.resultado}>
                            {data.resultado ? String(data.resultado).slice(0, 10) : "0"}
                        </Text>
                        <Text style={styles.display}>
                            {data.operacion ? data.operacion : " 0"}
                        </Text>
                    </View>
                    <View style={styles.botones}>
                        <DataButtons resultado={resultado} touch={touch} eliminar={eliminar} limpiar={limpiar} />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    calculadora: {
        width: '100%',
        height: '100%',
        flexShrink: 1,
        backgroundColor: '#000000',
        padding: 10,
    },
    resultado: {
        fontSize: 55,
        textAlign: 'right',
        marginTop: 10,
        marginRight: 20,
        color: '#ff9300',
    },
    display: {
        fontSize: 45,
        textAlign: 'right',
        position: 'relative',
        marginTop: 50,
        marginBottom: 10,
        marginRight: 40,
        color: '#fff',

    },
    contenedor: {
        width: '100%',
        marginTop: 20,
        borderBottomWidth: 1,
        height: 250,
        borderColor: '#888',
        borderRadius: 20,
        backgroundColor: "#000",
    },
    botones: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
