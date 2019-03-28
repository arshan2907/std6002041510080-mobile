 // import library
 import React from 'react';
 import {View , Text} from 'react-native';
 import Header from './Header'

 // create component
class App extends React.Component {
    render() {
        return (
            <View>
                <Header title="Albums" />
                <Text>Hello Ah</Text>
            </View>
        );
    }
} 

// export
export default App;
