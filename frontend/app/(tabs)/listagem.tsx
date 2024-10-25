import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const registros = [
    { id: '1', nome: 'Personagem 1', descricao: 'Descrição do personagem 1' },
    { id: '2', nome: 'Personagem 2', descricao: 'Descrição do personagem 2' },
    { id: '3', nome: 'Personagem 3', descricao: 'Descrição do personagem 3' },
];

export default function ListagemScreen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRegistros, setFilteredRegistros] = useState(registros);

    const handleSearch = () => {
        const filtered = registros.filter((registro) =>
            registro.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRegistros(filtered);
    };

    const renderItem = ({ item }: { item: { id: string; nome: string; descricao: string } }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <Text style={styles.itemDescription}>{item.descricao}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar personagem"
                placeholderTextColor="#aaa"
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <Button title="Buscar" onPress={handleSearch} />

            <FlatList
                data={filteredRegistros}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        padding: 16,
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
    list: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#3a3f44',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        width: '100%',
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
    },
    itemDescription: {
        color: '#aaa',
        fontSize: 14,
    },
});
