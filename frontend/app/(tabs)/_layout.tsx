import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="listagem"
        options={{
          title: 'Personagens',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'person-search' : 'person-search'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="novopersonagem"
        options={{
          title: 'Novo Personagem',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'person-add-alt-1' : 'person-add-alt'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}