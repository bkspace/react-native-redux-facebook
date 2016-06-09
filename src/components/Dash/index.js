import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

class Dash extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Welcome to your React Native App</Text>
      </ScrollView>
    );
  }
}

export default Dash;
