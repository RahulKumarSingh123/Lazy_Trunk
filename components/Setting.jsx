import { Pressable, StyleSheet } from "react-native"
import { View, ImageBackground, Image, Text } from "react-native"
export default function Setting() {
    const background = require('../assets/background.jpg');
    const setting = require("../assets/settings.png");
    const games = require('../assets/games.png');
    const rocket = require('../assets/rocket.png');
    const flag = require('../assets/flag.png');
    const arrow = require('../assets/arrow.png');
    const purchase = require('../assets/purchases.png');
    const star = require('../assets/star.png');
    const toggle = require('../assets/switch1.png');
    const world = require('../assets/world.png');
    const music=require('../assets/music.png');
    const info=require('../assets/info.png')
    return (
        <ImageBackground source={background} style={styles.background} >
            <View style={styles.first}>
                <Image source={setting} style={styles.setting} />
                <Text style={styles.head}>SETTINGS</Text>
            </View>
            <View style={styles.above}>
                <View style={styles.back}>
                    <Image source={music} style={styles.music}/>
                </View>
                <View style={styles.back}>
                    <Image source={info} style={styles.music}/>
                </View>
            </View>
            <View style={styles.tabs}>
                <View style={{ ...styles.bar, ...styles.bar1 }}>
                    <View style={styles.innerview}>
                        <Image source={world} style={styles.world} />
                        <Text style={styles.bartext}>Languages</Text>
                    </View>
                    <View style={styles.innerview}>
                        <Text style={styles.bartext}>Eng(US)</Text>
                        <Image source={flag} style={styles.flag} />
                        <Image source={arrow} style={styles.arrow} />
                    </View>

                </View>
                <View style={{ ...styles.bar, ...styles.bar2 }}>
                    <View style={styles.innerview}>
                        <Image source={star} style={styles.star} />
                        <Text style={styles.bartext}>Kid Mode</Text>
                    </View>
                    <View style={styles.innerview}>
                        <Text style={styles.bartext}>Off</Text>

                        <Image source={toggle} style={styles.toggle} />
                    </View>
                </View>
                <View style={{ ...styles.bar, ...styles.bar3 }}>
                    <View style={styles.innerview}>
                        <Image source={purchase} style={styles.star} />
                        <Text style={styles.bartext}>Purchases</Text>
                    </View>
                    <Image source={arrow} style={styles.arrow} />
                </View>
            </View>
            <View style={styles.below}>
                <Pressable style={styles.belowbutton}>
                    <Image source={games} style={styles.icon} />
                    <Text style={styles.buttontext}>More Games</Text>
                </Pressable>
                <Pressable style={styles.belowbutton}>
                    <Image source={rocket} style={styles.icon1} />
                    <Text style={styles.buttontext}>Follow Us</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 0,
        height: "100%",
        width: "100%",
        justifyContent: "space-around",
        top:29
    },
    first: {
        backgroundColor: "#0a0238",
        flexDirection: "row",
        justifyContent: "center",
        padding: 9,
        alignItems: "center",
        top:8,
    },
    head: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10
    },
    setting: {
        position: "absolute",
        left: 30
    },
    icon: {
        aspectRatio: 1.3,
        width: 19,
    },
    icon1: {
        aspectRatio: 0.5,
        width: 10,
    },
    belowbutton: {
        backgroundColor: "#0a0238",
        height: 45,
        width: 140,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 5
    },
    buttontext: {
        color: "white",
        fontWeight: "700",
        fontSize: 15,
    },
    tabs: {
        alignItems: "center",
        gap: 15,
        bottom:50,
    },
    bar: {
        flexDirection: "row",
        width: "90%",
        height: 60,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        paddingLeft: 19
    },
    bar1: {
        backgroundColor: "#7DDA58"
    },
    bar2:
    {
        backgroundColor: "#EA6379",
    },
    bar3:
    {
        backgroundColor: "#4FBEC3",
    },
    below: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    bartext: {
        fontSize: 19,
        fontWeight: "700"
    },
    flag: {
        aspectRatio: 1,
        width: 28,
        borderRadius: 14,
    },
    arrow: {
        aspectRatio: 0.9,
        width: 22,
    },
    innerview: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        gap: 8,

    },
    toggle: {
        transform: [{ rotate: '180deg' }],
        width: 36,
        aspectRatio: 1,
    },
    star: {
        aspectRatio: 1,
        width: 24,
    },
    world: {
        aspectRatio: 1,
        width: 24,
    },
    above:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16,
        position:"relative",
        top:-50
    },
    back:{
        backgroundColor:"#0a0238",
        width:40,
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    music:{
        aspectRatio:1,
        height:20
    }
})