import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';

import { createUser } from '../../actions'

export default class Sign extends Component {

  state = {
    user: {
      name: '',
      gender: '',
      email: '',
      phone: '',
      address: []
    },
    address: {
      number: 0,
      street: '',
      city: '',
      zipcode: '',
    }
  }

  handleSign = () => {
    let user = this.state.user;
    user.address.push(this.state.address);

    const { dispatch } = this.props;
    const { navigate } = this.props.navigation;

    dispatch(createUser(user))
      .then(() => {
        navigate('List');
      })
      .catch(() => {
        Alert.alert(
          "Error :(",
          "Shomething wrong!")
      });
  }

  handleBack = () => {
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <Image source={require("../../assets/img/tommy-transparent.png")} style={styles.logo} />
          <Text style={styles.text}>Insert user: </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            name="name"
            onChangeText={e => this.setState(
              state => { state.user.name = e; return state })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            name="gender"
            onChangeText={e => this.setState(
              state => { state.user.gender = e; return state })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            name="email"
            onChangeText={e => this.setState(
              state => { state.user.email = e; return state })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            name="phone"
            onChangeText={e => this.setState(
              state => { state.user.phone = e; return state })
            }
          />
          <Text style={styles.text}>Insert address: </Text>
          <TextInput
            style={styles.input}
            placeholder="Number"
            name="number"
            onChangeText={e => this.setState(
              state => { state.address.number = e; return state })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Street"
            name="street"
            onChangeText={e => this.setState(
              state => { state.address.street = e; return state })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            name="city"
            onChangeText={e => this.setState(
              state => { state.address.city = e; return state })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Zipcode"
            name="zipcode"
            onChangeText={e => this.setState(
              state => { state.address.zipcode = e; return state })
            }
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSign}>
            <Text style={styles.buttonText}> Save user </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBack} onPress={this.handleBack}>
            <Text style={styles.buttonTextBack}> Back </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    marginBottom: 5,
    color: "#3b5999",
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#CFD8DC',
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: "5%",
    width: "70%",
    height: 120
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: "#3b5999",
    borderRadius: 5,
    height: 44,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    alignSelf: "stretch",

  },
  button: {
    marginTop: 5,
    width: "90%",
    height: 45,
    backgroundColor: "#3b5999",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonBack: {
    marginTop: 5,
    width: "90%",
    height: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextBack: {
    color: "#3b5999",
    fontSize: 16,
  },
});
