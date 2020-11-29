import React, {useState, useEffect, useRef} from 'react';
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AddRestaurantHeader from '../../components/AddRestaurant/AddRestaurantHeader';
import {Icon} from 'react-native-elements';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-easy-toast';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

const AddRestaurantInit = ({navigation}) => {
  const [] = useState();
  const {register, errors, setValue, handleSubmit, watch} = useForm(); 
  const [imageURI, setImageURI] = useState(null);
  const toastRef = useRef();

  useEffect(() => {
    register('name', {required: true});
    register('shortDescription');
    register('longDescription');
    register('address');
    register('city');
    register('phoneNumber');
    register('whatsappLink');
  });

  const getLogo = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;
    if (resultPermissionCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos de la galeria");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 2],
      });
      if (result.cancelled) {
        toastRef.current.show('Has cerrado la seleccion de imagenes');
      } else {
        setImageURI(result.uri);
        console.log(result.uri)
        //
      }
    }
  }

  return (
    <ScrollView>
      <AddRestaurantHeader screenId={0} navigation={navigation} />
      <View style={styles.form}>
        <TouchableOpacity style={styles.addRestaurantLogo} onPress={getLogo}>
          {
            imageURI 
            ? <RestaurantLogo uri={imageURI} />
            : <AddLogoComponent />
          }
        </TouchableOpacity>
        <TextInput 
          style={styles.textInput}
          placeholder="Nombre del negocio"
          onChangeText={text => setValue('name', text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Descripción corta"
          onChangeText={text => setValue('shortDescription', text)}
        />
        <TextInput 
          style={styles.textInputArea}
          placeholder="Descripción larga"
          numberOfLines={5}
          onChangeText={text => setValue('longDescription', text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Dirección"
          onChangeText={text => setValue('address', text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          onChangeText={text => setValue('phoneNumber', text)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Link/Whatsapp para pedidos"
          onChangeText={text => setValue('whatsappLink', text)}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.push('2')}>
        <Icon type="material-community" name="arrow-right-bold-circle" color="#fdd367" size={46} />
      </TouchableOpacity>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  )
}

const AddLogoComponent = () => {
  return (
    <>
      <Icon type="font-awesome" name="image" size={100} />
      <Text>Agrega el logo de tu negocio</Text>
    </>
  )
}

const RestaurantLogo = ({uri}) => {
  return (
    <>
      <Image style={styles.RestaurantLogo} width={'100%'} height="100%" source={{uri}} accessibilityLabel="logo de negocio" />
    </>
  );
}

export default AddRestaurantInit;