import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

export default class List extends Componet {
    render() {
        return (
            <View style = styles.list>
                <h3>{this.props.title}</h3>
                {this.props.cards.map((card, i) => <Card key={i} {...card} />)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        border: 10,
        backgroundColor: '#ffaa11',
    }
})
