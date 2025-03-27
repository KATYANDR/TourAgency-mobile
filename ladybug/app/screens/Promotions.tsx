import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import Promo from '../components/articles/Promo'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

const Promotions = () => {
  const handleOpenTG = () => {
    Linking.openURL('https://t.me/')
}

  return (
    <LinearGradient
            colors={['#FFFFFF', '#2B4D66']}
            style={styles.container}
        >
            <Promo title='Акции' subtitle='самые выгодные предложения' />

      <ScrollView style={styles.scroll}>
        <View style={styles.wrapper}>
          <View style={styles.block}>


            <View style={{justifyContent: 'space-between', padding: 20, backgroundColor: '#2228', borderRadius: 6, position: 'absolute', zIndex: 1000, bottom: 0, margin: 10, width: '80%', height: '90%'}}>
              <View><Text style={{color: '#fff', fontSize: 20, marginBottom: 15}}>TRAVEL новости</Text>
              <Text style={{color: '#fff'}}>Лучшие подборки туров и актуальные новости в нашем TELEGRARM канале</Text>
              </View>
              <Pressable onPress={handleOpenTG}>

                <Text style={styles.textDays}>Перейти</Text>
              </Pressable>
            </View>


            <Image style={styles.image} source={require('../../assets/images/image-001.png')} />
          </View>

          <View style={styles.block}>


          <View style={{ justifyContent: 'space-between', padding: 20, backgroundColor: '#2228', borderRadius: 6, position: 'absolute', zIndex: 1000, bottom: 0, margin: 10, width: '80%', height: '90%'}}>
            <View>
              <Text style={{color: '#fff', fontSize: 20, marginBottom: 15}}>TELEGRARM бот</Text>
              <Text style={{color: '#fff'}}>Промокоды и лучшие предложения ждут вас</Text>
            </View>
            <Pressable onPress={handleOpenTG}>
              <Text style={styles.textDays}>Перейти</Text></Pressable>
            </View>


            <Image style={styles.image} source={require('../../assets/images/image-002.png')} />
          </View>

          <View style={styles.block}>


          <View style={{justifyContent: 'space-between', padding: 20, backgroundColor: '#2228', borderRadius: 6, position: 'absolute', zIndex: 1000, bottom: 0, margin: 10, width: '80%', height: '90%'}}>
              <View><Text style={{color: '#fff', fontSize: 20, marginBottom: 15}}>ДЕЛИТЕСЬ эмоциями</Text>
              <Text style={{color: '#fff'}}>Оставляйте отзывы  и получайте прмокоды н скидки</Text>
              </View>
              <Pressable onPress={handleOpenTG}>
              <Text style={styles.textDays}>Перейти</Text></Pressable>
            </View>


            <Image style={styles.image} source={require('../../assets/images/image-003.png')} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scroll: {

    },
    wrapper: {
      flex: 1,
      padding: 30,
      paddingVertical: 0,
      gap: 30,
      paddingBottom: 30
    },
    block: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    textDays: {
      backgroundColor: '#2B4D66',
      padding: 10,
      paddingHorizontal: 15,
      marginTop: 10,
      borderRadius: 14,
      color: '#fff',
      fontSize: 14,
      fontFamily: 'Nunito',
      textAlign: 'center'
  },
})

export default Promotions
