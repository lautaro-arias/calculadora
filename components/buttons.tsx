import React from 'react';
import { BottonsProps } from '@/interface/buttonsProps';
import { Text, Pressable, View, StyleSheet } from 'react-native';

export default function PressableButton({ texto, clase, onPress, icon }: BottonsProps) {
  return (
    <>
      <Pressable style={clase} onPress={onPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}>
          {icon &&
            <View style={styles.icon}>
              {icon}
            </View>
          }
          <Text style={{ fontSize: 22,justifyContent: 'center', textAlign: 'center' , fontWeight: 'semibold', color: 'white'}}>{texto}</Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  }

})