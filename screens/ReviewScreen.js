import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

const IS_ANDROID = Platform.OS === 'android';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerRight: <Button
                title='Settings'
                onPress={ () => { navigation.navigate('settings') } }
                backgroundColor='rgba(0, 0, 0, 0)'
                color='rgba(0, 122, 255, 1)'
            />                
        }
    };

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>        
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;