import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func.isRequired,
    }

    static defaultProps = {
        text: 'Click Me!',
    }

    buttonColor = (type) => {
        return {
            if(type === 'default') return {backgroundColor: '#898989'}
            else if(type === 'forward') return {backgroundColor: '#34ff1a'}
            else if(type === 'backward') return {backgroundColor: 'green'}
            else if(type === 'delete') return {backgroundColor: '#ff0300'}
            else return {backgroundColor: '#34ff1a'}
        }
    }

    render() {
        if (this.props.text === 'default')
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onClick} style={[styles.button, buttonColor(this.props.text)]}>
                    {this.props.text}
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
        fontSize: 10,
        color: '#ffffff',
    },
    // default: {
    //     backgroundColor: '#898989',
    // },
    // forward: {
    //     backgroundColor: '#34ff1a',
    // },
    // backward: {
    //     backgroundColor: 'green',
    // },
    // delete: {
    //     backgroundColor: '#ff0300',
    // },
    // create {
    //     backgroundColor: '#34ff1a',
    // },
})
