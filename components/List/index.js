import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import PropTypes from 'prop-types'

export default List = props => (
    static propTypes = {
        props.title = PropTypes.string.isRequired,
        props.cards = PropTypes.array.isRequired,
    }

    <View style = {styles.list}>
        <Text>{this.props.title}</Text>
        {this.props.cards.map(card => <Card key={card.id} {...card} />)}
    </View>
)


const styles = StyleSheet.create({
    list: {
        border: 10,
        backgroundColor: '#ffaa11',
    }
})
