import { speak } from 'expo-speech';
import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import { TextInput } from 'react-native-gesture-handler';

const TextToSpeech = () => {
    const [text, setText] = useState('');

    const speak = () => {
        // let textToSpeech = "Olá, bom dia alunos";
        Speech.speak(text);
    }

    return(
        <View>
            <TextInput value={text} onChangeText={ t => setText(t)} />
            <Button title="Clique para falar" onPress={() => speak()} />
            <Text>Text to Speech</Text>
        </View>
    )
}

export default TextToSpeech;