import * as React from 'react';
import { View, Image, Text } from 'react-native';

const HomeTwo = () => {
    return(
        <View>
            <ScrollView>
                <Image source={require('../assets/hometwo-background-color.png')} />
                <Text>Who are you {'\n'}Looking for?</Text>
            </ScrollView>
        </View>
    )
};

export default HomeTwo;