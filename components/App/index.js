import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import Board from './Board'

const BOARDS = [{name: 'Bootcamp'}];
const USERS = {name: 'Admin'};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: BOARDS,
            users: USERS,
            boardInput: '',
            userInput: ''
        }
    }

    createBoard() {
        this.setState({boards: [...this.state.boards, {name: this.state.boardInput}]});
    }

    createUser() {
        this.setState({users: [...this.state.users, {name: this.state.userInput}]});
    }

    render() {
        return (
            <View>
                <TextInput style={styles.inputs} onChangeText={(boardInput) => this.setState({boardInput})} value={this.state.boardInput} />
                <Button style={styles.buttons} onPress={createBoard} title="Create Board" />

                <TextInput style={styles.inputs} onChangeText={(userInput) => this.setState({userInput})} value={this.state.userInput} />
                <Button style={styles.buttons} onPress={createUser} title="Create User" />

                <View>{this.state.boards.map(b, i) => <Board key={i} {...b} />}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputs: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    buttons: {
        color: '#ff6600'
    }
});