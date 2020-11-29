import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput, 
  TouchableOpacity,
  ScrollView,
  Text,
  CheckBox,
} from 'react-native';
import AddRestaurantHeader from '../../components/AddRestaurant/AddRestaurantHeader';
import CalendarComponent from '../../components/AddRestaurant/CalendarComponent';
import {Icon} from 'react-native-elements';
import {useForm} from 'react-hook-form';
import styles from './styles';

const AddRestaurantSecond = ({navigation}) => {
  const {register, errors, setValue, handleSubmit, watch} = useForm(); 
  const [imageURI, setImageURI] = useState(null);
  const toastRef = useRef();

  useEffect(() => {
    register('entregaDomicilio');
    register('entregaEnTienda');
    register('facebook');
    register('sitioWeb');
    register('categoria');
    register('horarioLunes');
    register('horarioMartes');
    register('horarioMiercoles');
    register('horarioJueves');
    register('horarioViernes');
    register('horarioSabado');
    register('horarioDomingo');
  });

  return (
    <ScrollView>
      <AddRestaurantHeader screenId={1} navigation={navigation} />
      <View style={styles.form}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Entrega</Text>
          <View style={styles.entregaItem}>
            <CheckBox onValueChange={value => setValue('entregaDomicilio', value)} value={watch('entregaDomicilio')} />
            <Text style={{textAlign: 'center'}}>Domicilio</Text>
          </View>
          <View style={styles.entregaItem}>
            <CheckBox onValueChange={value => setValue('entregaEnTienda', value)} value={watch('entregaEnTienda')} />
            <Text style={{textAlign: 'center'}}>En tienda</Text>
          </View>
        </View>
        <TextInput 
          style={styles.textInput}
          placeholder="Facebook"
          onChangeText={text => setValue('name', text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="SitioWeb"
          onChangeText={text => setValue('shortDescription', text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Categoria"
        />
        <Text style={{fontSize: 18}}>Horario de atención</Text>
        <CalendarComponent setValue={setValue}/>
      </View>
      <TouchableOpacity onPress={() => navigation.push('3')}>
        <Icon type="material-community" name="arrow-right-bold-circle" color="#fdd367" size={46} />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AddRestaurantSecond;
