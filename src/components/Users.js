import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Users extends Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(user) {
    this.props.handleDelete(user);
  }

  handleEdit(user) {
    this.props.handleEdit(user);
  }

  render() {
    const { user } = this.props;

    return (
      <View style={styles.container} >
        <Text style={styles.name}>{`Name: ${user.name}`}</Text>
        <Text style={styles.content}>{`Gender: ${user.gender}`}</Text>
        <Text style={styles.content}>{`Email: ${user.email}`}</Text>
        <Text style={styles.content}>{`Phone: ${user.phone}`}</Text>
        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.buttonEdit} onPress={() => { this.handleEdit(user) }}>
            <Text style={styles.buttonTextSign}> Edit </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDelete} onPress={() => { this.handleDelete(user) }}>
            <Text style={styles.buttonTextList}> Delete </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
    width: "100%"
  },
  name: {
    fontSize: 15,
    color: "#1C2022",
    fontWeight: "bold",
  },
  content: {
    fontSize: 15,
    color: "#1C2022",
  },
  contentButtons: {
    marginTop: 5,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonEdit: {
    width: 150,
    height: 45,
    backgroundColor: "#E8EAF6",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonDelete: {
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
