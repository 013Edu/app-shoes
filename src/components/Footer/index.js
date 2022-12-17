import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
    <Text style={style.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
   <View style={{flexDirection: 'row'}}>
     <ScrollView horizontal shouldRasterizeIOS={false}>
        <View style={{marginHorizontal: 20}}>
        <Shoes
            src={require('../../assets/6.png')}
            cast='R$130,00'
            onClick={() => Alert.alert('CLICOU')}
            >
                Nike Bayle
            </Shoes>
        </View>
        <View style={{marginHorizontal: 20}}>
        <Shoes
            src={require('../../assets/3.png')}
            cast='R$940'
            onClick={() => Alert.alert('CLICOU')}
            >
                Nike Bayle
            </Shoes>
        </View>
        <View style={{marginHorizontal: 20}}>
        <Shoes
            src={require('../../assets/2.png')}
            cast='R$300,00'
            onClick={() => Alert.alert('CLICOU')}
            >
                Nike Bayle
            </Shoes>
        </View>
        <View style={{marginHorizontal: 20}}>
        <Shoes
            src={require('../../assets/4.png')}
            cast='R$900,00'
            onClick={() => Alert.alert('CLICOU')}
            >
                Nike Bayle
            </Shoes>
        </View>
     </ScrollView>
   </View>
   </View>
  );
}

const style = StyleSheet.create({
    title:{
        fontSize: 23,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        textAlign: 'center'
    }
})