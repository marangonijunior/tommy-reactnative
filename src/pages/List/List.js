import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  FlatList,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import { fetchAllUsers, deleteUser } from '../../actions'
import Users from '../../components/Users';

export default class List extends Component {

  constructor(props) {
    super(props)
    this.handleEditGo = this.handleEditGo.bind(this)
    this.handleDeleteGo = this.handleDeleteGo.bind(this)
    state = {
      users: [],
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: "List users",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text > Back </Text>
      </TouchableOpacity>
    ),
  });

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllUsers())
      .catch(() => {
        Alert.alert(
          "Error :(",
          "Shomething wrong!")
      });
  }

  handleEditGo(user) {
    const { navigate } = this.props.navigation;
    navigate('Edit', { user: user });
  }

  handleDeleteGo(user) {
    const { dispatch, navigation } = this.props;

    dispatch(deleteUser(user._id))
      .then(() => {
        this.componentDidMount();
      })
      .catch(() => {
        Alert.alert(
          "Error :(",
          "Shomething wrong!")
      });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.content}>
          <Image source={require("../../assets/img/tommy-transparent.png")} style={styles.logo} />
        </View>
        <View style={styles.contentList}>
          {this.props.users.length > 0 ?
            <FlatList
              data={this.props.users}
              keyExtractor={user => user._id}
              renderItem={({ item }) => <Users user={item} handleEdit={this.handleEditGo} handleDelete={this.handleDeleteGo} />}
            />
            : <Text style={styles.error}> Not found users :( </Text>
          }
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
    alignItems: "center",
  },
  logo: {
    width: "70%",
    height: 120
  },
  error: {
    color: "#3b5999",
    fontSize: 16,
    marginLeft: "30%"
  },
  contentList: {
    flex: 1,
    alignItems: 'flex-start',
  }
});
