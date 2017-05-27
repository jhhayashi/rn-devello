import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { lists: [{
            title: "list1",
            cards: [{text: 'text1', id: '1'},
                    {text: 'text2', id: '2'}],
            },
            {
                title: "list2",
                cards: [{text: 'text3', id: '3'},
                        {text: 'text4', id: '4'}],
            }
        ]};
    }

    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <View style={styles.boardWrap}>
                    {this.state.lists.map((l, i) => <List title={l.title} cards={l.cards} key={i}/>)}
                </View>
            </View>
        );
    }

    move = (id, dir) => {
        let index = -1;
        let card;
        let newLists = this.state.lists.map((l, i) => {
            return {
                title: l.title,
                cards: l.cards.filter(e => {
                    if (e.id === id) {
                        index = i;
                        card = e;
                        return false;
                    }
                    return true;
                })
            }
        });

        if (index === -1) throw new Error ('you suck: no card with that id');
        if ((index + dir) < 0 || (index + dir) >= this.state.lists.length) throw new Error ('you illegal with your move');

        this.setState({ lists: newLists.map((l, i) => {
            if (i === index + dir) {
                return {
                    title: l.title,
                    cards: [card, ...l.cards]
                }
            }
            return l;
        })});
    }

    moveBackward = id => this.move(id, -1);
    moveForward = id => this.move(id, 1);

    deleteCard = id => {
        let newLists = this.state.lists.map((l, i) => {
            return {
                title: l.title,
                cards: l.cards.filter(e => e.id !== id)
            }
        });
        this.setState({ lists: newLists });
    }

    addFunctions = () => {
        let newLists = this.state.lists.map(l => {
            l.cards.map(e => {
                e.moveForward = this.moveForward.bind(null, e.id);
                e.moveBackward = this.moveBackward.bind(null, e.id);
                e.delete = this.deleteCard.bind(null, e.id);
            });
        });
    }

    componentWillMount = () => {
        this.addFunctions();
    }
}

const styles = StyleSheet.create({
    boardWrap: {
        backgroundColor: '#fff'
    }
});