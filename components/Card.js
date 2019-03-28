import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
            <View style={{ flexDirection: "row", marginTop: 10}}>
                <Image 
                        style={{ width:100, height:100, marginTop: 10 }}
                        source={{ uri: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }} 
                />
                <View style={{ marginTop: 10, marginLeft: 10}}>
                    <Text> Mr.Arshan Khreaungsakun </Text>
                    <Text> KMUTNB </Text>
                </View>
              </View>  

                <Image 
                        style={{ width:390, height:270, marginLeft: 10, alignItems: 'center' }}
                        source={{ uri: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }} 
                />
                
                    <View style={styles.button}>
                    <View style={{ width: 100, backgroundColor: 'red' }}>
                            <Button
                                title="Buy"
                            />
                        </View>
                    </View>
                </View>
            
        );   
    }
}
const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }
}
export default Card;