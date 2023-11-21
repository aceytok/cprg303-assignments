import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = ({ children }) => {
  return (
    <View style={styles.container} >
      <Text>Ace Manuyag 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 20,
        alignItems: 'center',
    },
    });
export default Footer;