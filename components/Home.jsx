import { Pressable, StyleSheet } from "react-native"
import { View, ImageBackground, Text, Image } from "react-native"


export default function Home({navigation}) {
    const backgroundimage = require('../assets/background.jpg');
    const play = require('../assets/play-button.png');
    const multiplayer=require('../assets/multiplayer.png');
    const joystick=require('../assets/joystick.png');
    const rocket=require('../assets/rocket.png');
    const setting=require('../assets/settings.png')
    const gamer=require('../assets/gamer.png')
    const wave1=require('../assets/wave1.jpg');
    const wave2=require('../assets/wave2.jpg');
    const wave3=require('../assets/wave3.jpg');
    return (
        <View style={styles.home}>
            <ImageBackground source={backgroundimage} resizeMode="cover" style={styles.background}>
                <Pressable  style={styles.setting} onPress={()=>(navigation.navigate('Setting'))}><Image source={setting} /></Pressable>
                <View style={styles.container}>
                    <Text style={{ color: "#4FE44C", fontWeight: "bold", fontSize: 40, textDecorationLine: "underline", }}>NEVER</Text>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 40, textDecorationLine: "underline", }}>HAVE I</Text>
                    <Text style={{ color: "#F2393B", fontWeight: "bold", fontSize: 40, textDecorationLine: "underline", }}>EVER</Text>
                </View>
                <View style={styles.second}>
                    <Pressable style={styles.buttons}>
                        <ImageBackground source={wave1} resizeMode="cover"  style={styles.buttonbackground}>
                            <Image source={play} style={styles.icons} />
                            <Text style={styles.normaltext}>PLAY</Text>
                        </ImageBackground>
                    </Pressable>
                    <Pressable style={styles.buttons}>
                        <ImageBackground source={wave2} resizeMode="cover"  style={styles.buttonbackground}>
                            <Image source={multiplayer} style={styles.icons} />
                            <Text style={styles.normaltext}>MULTIPLAYER</Text>
                        </ImageBackground>
                    </Pressable>
                    <Pressable style={styles.buttons}>
                        <ImageBackground source={wave3} resizeMode="cover"  style={styles.buttonbackground}>
                            <Image source={joystick} style={styles.icons} />
                            <Text style={styles.normaltext}>HOW TO PLAY</Text>
                        </ImageBackground>
                    </Pressable>
                </View>
                <View style={styles.third}>
                    <View style={styles.below}>
                        <Image source={rocket}  style={styles.belowimage}/>
                        <View style={styles.border}>
                            <Text style={styles.belowtext}>FOLLOW US</Text>
                        </View>
                    </View>
                    <View style={styles.below}>
                        <Image source={gamer} style={styles.belowimage}/>
                        <View style={styles.border}>
                            <Text style={styles.belowtext}>MORE GAMES</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    home: {
        height: "100%",
        width: "100%",
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        top:29
    },
    background: {
        flex: 0,

        width: "100%",
        height: "100%",

        justifyContent: "space-around",
        alignItems: "center",
        
    },
    container: {
        display: "flex",
        alignItems: "center",
        paddingTop:30,
    },
    icons: {
        width: 22,
        height: 22,
        position:"absolute",
        left:9
    },
    buttons: {
        flex:0,
        width:150,
        height:40,
        justifyContent:"center",
        borderRadius:14,
        overflow:"hidden" ,
        alignContent:"flex-start"
    },
    buttonbackground:{
        width:"100%",
        height:"100%",
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",   
    },
    normaltext:{
        fontSize:16,
        fontWeight:"bold",
        marginLeft:23
    },
    second:{
        display:"flex",
        gap:20,
    },
    below:{
        display:"flex",
        flexDirection:"row",
        gap:5,
        height:25,
    },
    belowtext:{
        color:"white",
        fontWeight:"500",
       
    },
    border:{
        borderColor:"white",
        borderWidth:1,
        borderRadius:12,
        display:"flex",
        justifyContent:"center",
        paddingHorizontal:3,
    },
    third:{
        display:"flex",
        flexDirection:"row",
        gap:60,
    },
    belowimage:{
        aspectRatio:0.999,
        width:22,
    },
    setting:{
        position:"absolute",
        top:55,
        right:25,
    }
})