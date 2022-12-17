import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Shoes(props) {


 return (
   <TouchableOpacity style={style.container} onPress={props.onClick}>
    <Image 
    source={props.src}
    style={style.shoesImage}
    />
    <Text style={style.shoesText}>
       {props.children}
    </Text>
   <View style={{opacity: 0.5}}>
   <Text style={style.shoesText}>
        {props.cast}
    </Text>
   </View>
   </TouchableOpacity>
  );
}


const style = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImage:{
        width: 175,
        height: 175,
    },
    shoesText:{
        fontSize: 16
    },
})