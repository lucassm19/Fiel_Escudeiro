import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function NovoPersonagemScreen() {
    const [nome, setNome] = useState('');
    const [aparencia, setAparencia] = useState<string>('');
    const [ocupacao, setOcupacao] = useState<string>('');
    const [nivel, setNivel] = useState<string>('');

    const handleCadastro = () => {
        // Validação dos campos
        if (!nome || !aparencia || !ocupacao || !nivel) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        // Exibe um popup de sucesso
        Alert.alert(
            "Cadastro Realizado",
            "O personagem foi cadastrado com sucesso!",
            [{ text: "OK" }]
        );

        // Limpa os campos após o cadastro
        setNome('');
        setAparencia('');
        setOcupacao('');
        setNivel('');
    };

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Nome do personagem"
                placeholderTextColor="#aaa"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Aparência:</Text>
            <Picker
                selectedValue={aparencia}
                style={styles.picker}
                onValueChange={(itemValue: string) => setAparencia(itemValue)}
            >
                <Picker.Item label="Selecione uma aparência" value="" />
                <Picker.Item label="Aparência 1" value="aparencia1" />
                <Picker.Item label="Aparência 2" value="aparencia2" />
                <Picker.Item label="Aparência 3" value="aparencia3" />
            </Picker>

            <Text style={styles.label}>Ocupação:</Text>
            <Picker
                selectedValue={ocupacao}
                style={styles.picker}
                onValueChange={(itemValue: string) => setOcupacao(itemValue)}
            >
                <Picker.Item label="Selecione uma ocupação" value="" />
                <Picker.Item label="Ocupação 1" value="ocupacao1" />
                <Picker.Item label="Ocupação 2" value="ocupacao2" />
                <Picker.Item label="Ocupação 3" value="ocupacao3" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder="Nível"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                value={nivel}
                onChangeText={setNivel}
            />

            <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        padding: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    label: {
        color: '#fff',
        marginVertical: 8,
    },
    input: {
        height: 40,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 16,
    },
    picker: {
        height: 50,
        width: '100%',
        color: '#fff',
        backgroundColor: '#3a3f44',
        borderRadius: 8,
        marginBottom: 16,
    },
});
