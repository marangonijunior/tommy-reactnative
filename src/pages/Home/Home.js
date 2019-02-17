import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Home extends Component {

  handleSign = () => {
    this.props.navigation.navigate('Sign');
  }

  handleList = () => {
    this.props.navigation.navigate('List');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <Image source={require("../../assets/img/tommy-transparent.png")} style={styles.logo} />
          <View style={styles.contentButtons}>
            <TouchableOpacity style={styles.buttonSign} onPress={this.handleSign}>
              <Text style={styles.buttonTextSign}> Sign </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonList} onPress={this.handleList}>
              <Text style={styles.buttonTextList}> List </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFD8DC',
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    resizeMode: 'contain',
    width: "70%",
  },
  contentButtons: {
    flex: 1,
    flexDirection: "row",
  },
  buttonSign: {
    width: 150,
    height: 45,
    backgroundColor: "#E8EAF6",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonList: {
    width: 150,
    height: 45,
    backgroundColor: "#f44336",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTextList: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonTextSign: {
    color: "#3b5999",
    fontSize: 16,
  }
});
