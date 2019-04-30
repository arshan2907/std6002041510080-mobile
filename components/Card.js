import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
            <View style={{ flexDirection: "row"}}>
                <Image 
                        style={{ width:100, height:100, marginTop: 10 }}
                        source={{ uri: 'https://goo.gl/Qzu7py' }} 
                />
                <View style={{ marginTop: 10, marginLeft: 10}}>
                    <Text> Mr.Mathawee </Text>
                    <Text> KMUTNB </Text>
                </View>
              </View>  

                <Image 
                        style={{ width:390, height:270, marginLeft: 10, alignItems: 'center' }}
                        source={{ uri: 'https://www.underconsideration.com/brandnew/archives/IMG_5662.jpg' }} 
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