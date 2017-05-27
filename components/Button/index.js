import React, { Component } from 'react'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        variant: PropTypes.oneOf(['forward', 'backward', 'delete', 'close', 'default'])
    }

    static defaultProps = {
        text: 'Click Me!',
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} style={[styles.button, styles[this.props.variant]]}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
        color: '#ffffff',
    },
    default: {
        backgroundColor: '#898989',
    },
    forward: {
        backgroundColor: '#34ff1a',
    },
    backward: {
        backgroundColor: 'green',
    },
    delete: {
        backgroundColor: '#ff0300',
    },
    create: {
        backgroundColor: '#34ff1a',
    },
})
