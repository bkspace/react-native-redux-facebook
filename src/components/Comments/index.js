import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

class Comments extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Hello from Comments
        </Text>
      </ScrollView>
    );
  }
}

export default Comments;
