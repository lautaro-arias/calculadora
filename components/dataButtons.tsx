import React from 'react'
import { Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Teclado from './teclado';
import { AccionsButtonsProps } from '@/interface/accionsButtons';
import { DataArray } from '@/interface/dataArray';

export default function DataButtons({ touch, eliminar, limpiar, resultado }: AccionsButtonsProps) {
    const botones: DataArray[] = [
        {
            texto: "AC",
            clase: [styles.operation, { backgroundColor: '#778899', borderColor: '#222', borderWidth: 0.8 }],
            onPress: limpiar
        },
        {
            texto: "+/-",
            clase: [styles.operation, { backgroundColor: '#778899', borderColor: '#222', borderWidth: 0.8 }],
            onPress: () => touch("+/-")
        },
        {
            texto: " ",
            clase: [styles.operation, { backgroundColor: '#778899', borderColor: '#222', borderWidth: 0.8 }],
            onPress: () => touch("%"),
            icon: (
                <Text style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <Svg width="32" height="30" viewBox="-0 3 19 19" fill="#fff" xmlns-="http://www.w3.org/2000/svg">
                        <Path d="M7.05 17.7C6.95146 17.7004 6.85382 17.6812 6.76281 17.6434C6.67179 17.6056 6.58924 17.5501 6.52 17.48C6.37955 17.3393 6.30066 17.1487 6.30066 16.95C6.30066 16.7512 6.37955 16.5606 6.52 16.42L16.42 6.51996C16.4887 6.44627 16.5715 6.38717 16.6635 6.34618C16.7555 6.30519 16.8548 6.28314 16.9555 6.28137C17.0562 6.27959 17.1562 6.29811 17.2496 6.33584C17.343 6.37356 17.4278 6.4297 17.499 6.50092C17.5703 6.57214 17.6264 6.65697 17.6641 6.75036C17.7018 6.84375 17.7204 6.94378 17.7186 7.04448C17.7168 7.14518 17.6948 7.2445 17.6538 7.3365C17.6128 7.4285 17.5537 7.5113 17.48 7.57996L7.58 17.48C7.51075 17.5501 7.4282 17.6056 7.33719 17.6434C7.24618 17.6812 7.14854 17.7004 7.05 17.7Z" fill="#fff" />
                        <Path d="M8.5 10.75C8.05499 10.75 7.61998 10.618 7.24997 10.3708C6.87996 10.1236 6.59157 9.77217 6.42127 9.36104C6.25097 8.9499 6.20642 8.4975 6.29323 8.06105C6.38005 7.62459 6.59434 7.22368 6.90901 6.90901C7.22368 6.59434 7.62459 6.38005 8.06105 6.29323C8.4975 6.20642 8.9499 6.25097 9.36104 6.42127C9.77217 6.59157 10.1236 6.87996 10.3708 7.24997C10.618 7.61998 10.75 8.05499 10.75 8.5C10.75 9.09674 10.5129 9.66903 10.091 10.091C9.66903 10.5129 9.09674 10.75 8.5 10.75ZM8.5 7.75C8.35167 7.75 8.20666 7.79399 8.08332 7.8764C7.95999 7.95881 7.86386 8.07594 7.80709 8.21299C7.75033 8.35003 7.73547 8.50083 7.76441 8.64632C7.79335 8.7918 7.86478 8.92544 7.96967 9.03033C8.07456 9.13522 8.2082 9.20665 8.35368 9.23559C8.49917 9.26453 8.64997 9.24968 8.78701 9.19291C8.92406 9.13614 9.04119 9.04002 9.1236 8.91668C9.20601 8.79334 9.25 8.64834 9.25 8.5C9.24741 8.30189 9.16756 8.11263 9.02747 7.97253C8.88737 7.83244 8.69811 7.75259 8.5 7.75Z" fill="#fff" />
                        <Path d="M15.5 17.75C15.055 17.75 14.62 17.618 14.25 17.3708C13.88 17.1236 13.5916 16.7722 13.4213 16.361C13.251 15.9499 13.2064 15.4975 13.2932 15.061C13.3801 14.6246 13.5943 14.2237 13.909 13.909C14.2237 13.5943 14.6246 13.3801 15.061 13.2932C15.4975 13.2064 15.9499 13.251 16.361 13.4213C16.7722 13.5916 17.1236 13.88 17.3708 14.25C17.618 14.62 17.75 15.055 17.75 15.5C17.75 16.0967 17.5129 16.669 17.091 17.091C16.669 17.5129 16.0967 17.75 15.5 17.75ZM15.5 14.75C15.3517 14.75 15.2067 14.794 15.0833 14.8764C14.96 14.9588 14.8639 15.0759 14.8071 15.213C14.7503 15.35 14.7355 15.5008 14.7644 15.6463C14.7934 15.7918 14.8648 15.9254 14.9697 16.0303C15.0746 16.1352 15.2082 16.2067 15.3537 16.2356C15.4992 16.2645 15.65 16.2497 15.787 16.1929C15.9241 16.1361 16.0412 16.04 16.1236 15.9167C16.206 15.7933 16.25 15.6483 16.25 15.5C16.2474 15.3019 16.1676 15.1126 16.0275 14.9725C15.8874 14.8324 15.6981 14.7526 15.5 14.75Z" fill="#fff" />
                    </Svg>
                </Text>
            )
        },
        {
            texto: "",
            clase: styles.operation,
            onPress: () => touch("/"),
            icon: (
                <Text style={{ textAlign: 'center' }}>
                    <Svg fill="#fff" width="34" height="34" viewBox="-3 1 19 19">
                        <Path d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H1.319a1.03 1.03 0 1 1 0-2.059h10.364a1.03 1.03 0 0 1 1.029 1.03zM5.03 4.586a1.47 1.47 0 1 1 1.47 1.47 1.47 1.47 0 0 1-1.47-1.47zm2.94 9.193a1.47 1.47 0 1 1-2.94 0 1.47 1.47 0 0 1 2.94 0z" />
                    </Svg>
                </Text>
            )
        },
        { texto: "7", clase: styles.numero, onPress: () => touch("7") },
        { texto: "8", clase: styles.numero, onPress: () => touch("8") },
        { texto: "9", clase: styles.numero, onPress: () => touch("9") },
        {
            texto: "", clase: styles.operation, onPress: () => touch("*")
            , icon: (
                <Text style={{ textAlign: 'center', justifyContent: 'center', marginBottom: 3 }}>
                    <Svg width="30" height="30" viewBox="3 2 19 19" fill="#fff" xmlns-="http://www.w3.org/2000/svg">
                        <Path d="M12 13.4142L16.9497 18.364L18.364 16.9498L13.4142 12L18.364 7.05026L16.9497 5.63605L12 10.5858L7.05025 5.63605L5.63604 7.05026L10.5858 12L5.63604 16.9498L7.05025 18.364L12 13.4142Z" fill="#fff" />
                    </Svg>
                </Text>
            )
        },
        { texto: "4", clase: styles.numero, onPress: () => touch("4") },
        { texto: "5", clase: styles.numero, onPress: () => touch("5") },
        { texto: "6", clase: styles.numero, onPress: () => touch("6") },
        {
            texto: "", clase: styles.operation, onPress: () => touch("-")
            , icon: (
                <Text style={{ textAlign: 'center' }}>
                    <Svg
                        width="25" height="25"
                        xmlns-="http://www.w3.org/2000/svg"
                        xmlSpace-="preserve"
                        viewBox="0 0 512 512"
                    >
                        <Path fill="#fff" d="M1 229.3h512v85.3H1z" />
                    </Svg>
                </Text>
            )
        },
        { texto: "1", clase: styles.numero, onPress: () => touch("1") },
        { texto: "2", clase: styles.numero, onPress: () => touch("2") },
        { texto: "3", clase: styles.numero, onPress: () => touch("3") },
        {
            texto: "", clase: styles.operation, onPress: () => touch("+")
            , icon: (
                <Text style={{ textAlign: 'center' }}>
                    <Svg
                        xmlns-="http://www.w3.org/2000/svg"
                        width="34" height="34"
                        class-="cf-icon-svg"
                        viewBox="-3 1 19 19"
                    >
                        <Path fill="#fff" d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H7.53v4.152a1.03 1.03 0 0 1-2.058 0v-4.152H1.318a1.03 1.03 0 1 1 0-2.059h4.153V4.001a1.03 1.03 0 0 1 2.058 0v4.152h4.153a1.03 1.03 0 0 1 1.029 1.03z" />
                    </Svg>
                </Text>
            )
        },
        { texto: ",", clase: styles.numero, onPress: () => touch(",") },
        { texto: "0", clase: [styles.numero], onPress: () => touch("0") },
        {
            texto: " ", clase: styles.operation, onPress: eliminar
            , icon: (

                <Text style={{ textAlign: 'center' }}>
                    <Svg
                        xmlns-="http://www.w3.org/2000/svg"
                        width="34" height="34"
                        fill="none"
                        viewBox="0 1 15 15"
                    >
                        <Path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M4.11 2.188A.5.5 0 0 1 4.5 2h9A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-9a.5.5 0 0 1-.39-.188l-4-5a.5.5 0 0 1 0-.624l4-5Zm6.036 7.666L8.5 8.207 6.854 9.854l-.708-.708L7.793 7.5 6.146 5.854l.708-.708L8.5 6.793l1.646-1.647.708.708L9.207 7.5l1.647 1.646-.707.708Z"
                            clipRule="evenodd"
                        />
                    </Svg>
                </Text>
            )
        },
        {
            texto: " ", clase: styles.operation, onPress: resultado
            , icon: (

                <Text style={{ textAlign: 'center', justifyContent: 'center', marginLeft: 4 }}>
                    <Svg
                        xmlns-="http://www.w3.org/2000/svg"
                        width="30" height="30"

                        fill="#fff"
                        viewBox="-1 1 24 24"
                    >
                        <Path
                            d="M3 8a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM3 14a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
                        />
                    </Svg>
                </Text>
            )
        },
    ];

    return (
        <>
            <Teclado botones={botones} />
        </>
    )
}

const styles = StyleSheet.create({
    numero: {
        height: '10%',
        backgroundColor: '#555',
        borderWidth: 1,
        borderColor: '#888',
        padding: 22,
        borderRadius: 55,
        margin: 5,
        width: '22%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#fff',
        shadowOffset: {
            width: 1,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.0,
        elevation: 10,
    },
    operation: {
        height: '10%',
        backgroundColor: '#ff9300',
        padding: 20,
        borderRadius: 55,
        borderWidth: 0.9,
        borderColor: '#ffc88e',
        margin: 5,
        width: '22%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#fff',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6.0,
        elevation: 6,
    },
});