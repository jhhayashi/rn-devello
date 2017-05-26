import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export defualt class Card extends Component {
	static propTypes ={
		text: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		moveForward: PropTypes.func.isRequired,
		moveBackward: PropTypes.func.isRequired,
		delete: PropTypes.func.isRequired,
	}

	static defaultProps = {
		text: 'this is dope like the card team',
	}

	render(){
		return (
			<View style={styles.card}>
				{this.props.text}
				<View style={styles.wrapButtons}>
					<Button onPress={this.props.moveBackward} variant='backward'/>
					<Button onPress={this.props.moveForward} variant='forward'/>
					<Button onPress={this.props.delete} variant='delete'/>
				</View>
			</View>
		)
	}

}


const styles = 
	StyleSheet.create({
		card: {
			backgroundColor: #b7273e,
			borderColor: #658d80,
			borderRadius: 10,
			padding: 20,
			display: inline,
		}
		wrapButtons: {
			float: right,
		}
	})