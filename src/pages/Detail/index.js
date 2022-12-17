import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Dot from '../../components/Dot';
import Footer from '../../components/Footer';
import SizeButton from '../../components/SizeButton';

export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })

 return (
     <ScrollView style={style.container}>
        <Image
        source={require('../../assets/detail.png')}
        style={style.image}
        resizeMode={'cover'}
         />
         <View>
          <View>
          <Text style={[style.title, {fontSize: 30}]}>
              R$280,90
            </Text>
           <View style={{opacity: 0.5}}>
           <Text style={[style.title, {fontSize: 23}]}>
              Nike Downshifter 10
            </Text>
           </View>
          </View>
          <View style={style.dotContainer}>
            <Dot 
            color='#2379f4'
            />
            <Dot
             color='#ddd'
             />
             <Dot
             color='#000'
             />
             <Dot
             color='#fb6e53'
             />
          </View>
          <View>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row', width: '100%'}}
            >
              <SizeButton bgColor='#000' color='#fff'>
                37
              </SizeButton>
              <SizeButton >
                39
              </SizeButton>
              <SizeButton>
                40
              </SizeButton>
              <SizeButton>
                43
              </SizeButton>
            </ScrollView>
          </View>

          <View style={style.textContent}>
            <Text style={style.textTitle}>
              Nike Downshifter 10
            </Text>
            <Text style={style.textContent}>
            Para garantir conforto e qualidade nas suas corridas diárias, aposte no Tênis Running Nike Downshifter 10!
            </Text>
            <Text style={style.textList}>
              -Categoria: Amortecimento
            </Text>
            <Text style={style.textList}>
              -Material: Mesh
            </Text>
          </View>
            <Button />
          <View style={style.line}></View>
         </View>
         <Footer />
     </ScrollView>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  title:{
    fontWeight: 'bold',
    paddingHorizontal: '2%',
    fontFamily: 'Anton_400Regular'
  },
  image:{
    width: '100%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25
  },
  line:{
    borderBottomColor: '#cecece',
    borderBottomWidth: 2,
  }
})