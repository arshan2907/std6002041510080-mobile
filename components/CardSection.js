
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class CardSection extends Component {
    render() {
        return (
            <View>
                {this.props.children}
                <Text>xxxxxx</Text>
            </View>
        );
    }
}

export default CardSection;