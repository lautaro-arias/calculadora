import CalculadoraMain from '@/components/calculadoraMain'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Component() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <CalculadoraMain />
      </View>
    </SafeAreaProvider>

  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
