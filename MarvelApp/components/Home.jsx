import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return(
        <View style={styles.container}>
            <Image blurRadius={100} style={styles.background_color_home} source={require('../assets/home-background-color.png')} />
            <SafeAreaView style={styles.area_text_home}>
                <View>
                    <Text style={styles.home_title}>Discover the {'\n'}Marvel Universe</Text>
                </View>
                <Image style={styles.lego_spiderman} source={require('../assets/lego-spiderman.png')} />
            </SafeAreaView>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    home_title: {
        fontFamily: 'SF Pro Display Normal',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 36,
        textAlign: 'center',
        paddingTop: 100,
    },
    background_color_home: {
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: "absolute",
    },
    area_text_home: {
        flex: 1,
    },
    lego_spiderman: {
        position: 'absolute',
        left: '20%',
        top: '55%',
        width: 300,
        height: 200,
        transform: [
            { translateX: -150 },
            { translateY: -100 },
            { scale: 1.8 },
            { rotate: '20.52deg' },
          ],
    },
});