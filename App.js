import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,
TouchableOpacity, Alert } from 'react-native';
export default function App() {
const handlePress = () => {
Alert.alert('SENA ADSO', '¡Bienvenido al desarrollo móvil con ReactNative!');
};
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" backgroundColor="#5eb319" />
{/* Encabezado Principal */}
<View style={styles.header}>
<Text style={styles.headerTitle} accessibilityRole="header">
SENA - Centro CEAI
</Text>
<Text style={styles.headerSubtitle}>
Programa ADSO | Guía React Native
</Text>
</View>
{/* Contenido Central */}
<View style={styles.content}>
<Text style={styles.title}>Aplicación Móvil Inicial</Text>
<Text style={styles.description}>
  Esta interfaz ha sido construida utilizando componentes nativos de React Native.
</Text>
<TouchableOpacity
style={styles.button}
onPress={handlePress}
accessibilityLabel="Boton de saludo SENA"
accessibilityHint="Muestra una alerta de bienvenida"
>
<Text style={styles.buttonText}>Iniciar Experiencia</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
header: {
backgroundColor: '#00324D',
padding: 20,
alignItems: 'center',
},
headerTitle: {
color: '#ffffff',
fontSize: 20,
fontWeight: 'bold',
},
headerSubtitle: {
color: '#39A900',
fontSize: 14,
marginTop: 4,
},
content: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 20,
},
title: {
fontSize: 22,
fontWeight: 'bold',
color: '#333333',
marginBottom: 10,
},
description: {
fontSize: 14,
color: '#666666',
textAlign: 'center',
marginBottom: 25,
},
button: {
backgroundColor: '#39A900',
paddingVertical: 12,
paddingHorizontal: 24,
borderRadius: 8,
elevation: 3, // Sombra para Android
},
buttonText: {
color: '#ffffff',
fontSize: 16,
fontWeight: 'bold',
},
});