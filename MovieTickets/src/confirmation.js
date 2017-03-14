import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import { deafaultStyles } from './styles';

export default class Confirmation extends Components {

  static propTypes = {
    code: PropTypes.string.isRequired,
  }

  render() {
    const { code } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Your confirmation code</Text>
        <Text style={styles.code}>{code}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigator.pop()}
        >

          <Text style={styles.button}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    ...defaultStyles.text,
    color: '#333',
    fontSize: 36,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#673AB7',
    borderRadius: 100,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
