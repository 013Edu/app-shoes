import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import Shoes from '../../components/Shoes';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const nav = useNavigation()

 return (
   <View style={style.container}>
    <View style={style.header}>
    <Image 
    source={require('../../assets/banner.png')}
    style={style.image}
    />
    </View>
    <View style={style.textContainer}>
        <Text style={style.text}>
            TÊNIS
        </Text>
        <Text style={[style.text, {color: '#cecece'}]}>
            -
        </Text>
        <Text style={[style.text, {color: '#cecece'}]}>
            MASCULINO
        </Text>
        <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons
            name='filter-list'
            size={23}
            color='#000'
             />
        </TouchableOpacity>
    </View>
    <View style={style.line} /> 
    <ScrollView>
    <View>
        <Text  style={style.text}>
            LANÇAMENTOS
        </Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Shoes
         src={require('../../assets/1.png')}
         cast='R$199,99'
         onClick={() => nav.navigate('Detail')}
        >
         Nike Shox 10
        </Shoes>
        <Shoes
         src={require('../../assets/2.png')}
         cast='R$300,00'
         onClick={() => nav.navigate('Detail')}
        >
         Nike Beautifull 
        </Shoes>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Shoes
         src={require('../../assets/3.png')}
         cast='R$190,90'
         onClick={() => Alert.alert('CLICOU')}
        >
         Nike Elegant
        </Shoes>
        <Shoes
         src={require('../../assets/4.png')}
         cast='R$330,00'
         onClick={() => Alert.alert('CLICOU')}
        >
         Nike Style 3
        </Shoes>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Shoes
         src={require('../../assets/5.png')}
         cast='R$299,99'
         onClick={() => Alert.alert('CLICOU')}
        >
         Nike Roccy
        </Shoes>
        <Shoes
         src={require('../../assets/6.png')}
         cast='R$900,00'
         onClick={() => Alert.alert('CLICOU')}
        >
         Nike Bayle
        </Shoes>
    </View>
    </ScrollView>
   </View>
  );
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header:{
        marginBottom: 8
    },
    image:{
        width: '100%'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#cecece',
        borderBottomWidth: 2,
    }
})