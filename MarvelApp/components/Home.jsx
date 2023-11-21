import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {

    // Search input:

    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        console.log('Searching for:', text);
        setSearchText(text);
      };

    return(
        <ScrollView contentContainerStyle={styles.container_scroll}>
            <View style={styles.container}>
                
                    <Image blurRadius={100} style={styles.background_color_home} source={require('../assets/home-background-color.png')} />
                    <SafeAreaView style={styles.area_text_home}>
                        <View>
                            <Text style={styles.home_title}>Discover the {'\n'}Marvel Universe</Text>
                        </View>
                        <Image style={styles.lego_spiderman} source={require('../assets/lego-spiderman.png')} />
                    </SafeAreaView>

                    <View style={styles.container_section_two}>
                        <Text style={styles.title_two}>Who are you {'\n'}Looking for?</Text>
                        <TextInput style={styles.search_input}
                        placeholder='search character...'
                        value={searchText}
                        onChangeText={handleSearch} />
                    </View>
            </View>
        </ScrollView>
    )
};

export default Home;

const styles = StyleSheet.create({

    container_scroll: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
    },
    home_title: {
        fontFamily: 'SF Pro Display ',
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
        left: '25%',
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
    container_section_two: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    title_two: {
        fontFamily: 'SF Pro Display',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'left',
        paddingLeft: 16,
    },
    search_input: {
        margin: 10,
        padding: 8,
        backgroundColor: '#EAEAEA',
        border: '0.50px white solid',
        borderRadius: 8,
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        color: '#7A7A7A',
    },
});