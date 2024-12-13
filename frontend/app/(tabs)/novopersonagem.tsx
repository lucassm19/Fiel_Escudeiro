import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function NovoPersonagemScreen() {
    const [nome, setNome] = useState('');
    const [caracteristica, setCaracteristica] = useState<string>('');
    const [ocupacao, setOcupacao] = useState<string>('');
    const [nivel, setNivel] = useState<string>('');

    const handleCadastro = async () => {
        // Validação dos campos
        try {
            const response = await fetch('http://localhost:3000/fichas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    caracteristica,
                    ocupacao,
                    nivel
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar personagem');
            }

            const data = await response.json();
            console.log('Personagem cadastrado com sucesso:', data);

            // Limpar os campos
            setNome('');
            setCaracteristica('');
            setOcupacao('');
            setNivel('');

            // Exibir mensagem de sucesso
            Alert.alert("Cadastro Realizado", "O personagem foi cadastrado com sucesso!");
        } catch (error) {
            console.error('Erro ao cadastrar personagem:', error);
            Alert.alert("Erro", "Ocorreu um erro ao cadastrar o personagem.");
        }
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

            <Text style={styles.label}>Característica:</Text>
            <Picker
                selectedValue={caracteristica}
                style={styles.picker}
                onValueChange={(itemValue: string) => setCaracteristica(itemValue)}
            >
                <Picker.Item label="Selecione uma característica" value="" />
                <Picker.Item label="Bomba-relógio" value="caract1" />
                <Picker.Item label="Cinzento" value="caract2" />
                <Picker.Item label="Amaldiçoado" value="caract3" />
                <Picker.Item label="Tom bélico" value="caract4" />
                <Picker.Item label="Flutulência" value="caract5" />
                <Picker.Item label="Minicabeça" value="caract6" />
            </Picker>

            <Text style={styles.label}>Ocupação:</Text>
            <Picker
                selectedValue={ocupacao}
                style={styles.picker}
                onValueChange={(itemValue: string) => setOcupacao(itemValue)}
            >
                <Picker.Item label="Selecione uma ocupação" value="" />
                <Picker.Item label="Mercenário" value="ocupacao1" />
                <Picker.Item label="Caçador" value="ocupacao2" />
                <Picker.Item label="Gatuno" value="ocupacao3" />
                <Picker.Item label="Líder" value="ocupacao4" />
                <Picker.Item label="Incendiário" value="ocupacao5" />
                <Picker.Item label="Bruxo" value="ocupacao6" />
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
