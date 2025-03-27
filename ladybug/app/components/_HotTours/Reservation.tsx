import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './Header';
import { TourType } from '../../apiController/getTours';
import Rate from '../InfoBlocks/Rate';
import TextField from '../Inputs/TextField';
import { LinearGradient } from 'expo-linear-gradient';
import { ReservationRouteProp } from '../../navigation/_Tours/TourStackParams';
import { Bid, createBid } from '../../apiController/createBid';

const Reservation: React.FC<{ route: ReservationRouteProp }> = ({ route }) => {
  const params = route.params as TourType;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [code, setCode] = useState('');

  const handleCreateBid = () => {
    const bid: Bid = {
      name,
      phone: number,
      email,
      TourName: params.title,
      comment,
      code,
    };
    createBid(bid).then((result) => {
      if (result != null) {
        Alert.alert('Успех', 'Заявка создана');
      } else {
        Alert.alert('Ошибка', 'Заявка не отправлена');
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LinearGradient colors={['#FFFFFF', '#2B4D66']} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Header title={'бронирование'} />
          <View style={styles.content}>
            <Text style={styles.titleText}>{params.title}</Text>
            <View style={{ paddingVertical: 15 }}>
              <Rate rate={params.rate} />
            </View>

            <View style={{ paddingVertical: 30, marginTop: 20, gap: 25 }}>
              <Text
                style={{
                  fontFamily: 'Nunito',
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                Запрос информации по туру
              </Text>
              <TextField value={name} setValue={setName} placeholder="Фамилия, имя" />
              <TextField value={number} setValue={setNumber} placeholder="Мобильный телефон" />
              <TextField value={email} setValue={setEmail} placeholder="Email" />
              <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
                <TextField
                  style={{ flex: 1 }}
                  value={comment}
                  setValue={setComment}
                  placeholder="Комментарий"
                />
                <TextField
                  style={{ flex: 1 }}
                  value={code}
                  setValue={setCode}
                  placeholder="Промокод"
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleCreateBid}>
                <Text style={styles.buttonText}>Оставить заявку</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Nunito',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2B4D66',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Reservation;