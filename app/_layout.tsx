import React from 'react'
import { View } from 'react-native'
import { Stack } from "expo-router";
import 'react-native-reanimated';

export default function Layout() {
    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <Stack>
                <Stack.Screen name='index' options={{ headerShown: false }} />
            </Stack>
        </View>
    )
}
