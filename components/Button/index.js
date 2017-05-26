import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        variant: PropTypes.oneOf(['default', 'forward', 'backward', 'delete', 'create']).isRequired
    }

    static defaultProps = {
        text: 'Click Me!',
        variant: 'default'
    }

    getText = () => {
        switch(this.props.variant) {
            case 'default':
                return '&#10003;';
            case 'forward':
                return '-->';
            case 'backward':
                return '<--';
            case 'delete':
                return 'X';
            case 'create':
                return '+'
            default:
                return '&#43;';
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onClick} style={[styles.button, styles.`${this.props.variant}`]}>
                    {this.getText()}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    button: {
        padding: 5,
        borderRadius: 5,
        width: 20,
        height: 20,
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
    create {
        backgroundColor: '#34ff1a',
    },
})
