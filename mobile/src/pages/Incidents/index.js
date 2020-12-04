import React from 'react';
import { View, Image, Text } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          <Text style={styles.headerTextBold}>Total de 0 Casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>
      </View>
    </View>
  );
}
