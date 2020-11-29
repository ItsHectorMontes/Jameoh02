import React, {useState, useEffect, useRef} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import AddRestaurantHeader from '../../components/AddRestaurant/AddRestaurantHeader';
import {Icon} from 'react-native-elements';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-easy-toast';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

const deviceWidth = Dimensions.get('window').width;

const AddRestaurantFourth = ({navigation}) => {
  const {register, errors, setValue, handleSubmit, watch, getValues} = useForm(); 
  const [imagesURIs, setImagesURIs] = useState([]);
  const [carta, setCarta] = useState([]);
  const toastRef = useRef();
  const platillo = useRef();

  useEffect(() => {
    register('videURL');
    register('imagesURIs');
    register('carta');
    register('platillo');
  });

  const getPhoto = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;
    if (resultPermissionCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos de la galeria");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1,1],
      });
      if (result.cancelled) {
        toastRef.current.show('Has cerrado la seleccion de imagenes');
      } else {
        const prevList = imagesURIs;
        const newList = prevList.concat(result.uri);
        setImagesURIs(newList);
        setValue('imagesURIs', newList);
      }
    }
  }

  const handleSetCarta = () => {
    
    if (getValues('platillo') !== undefined) {
      platillo.current.clear();
      let newCarta = carta.concat(getValues('platillo'));
      setCarta(newCarta);
      setValue('carta', newCarta);
      console.log(getValues('carta'));
    }
  }

  const handleDeletePlatillo = (index) => {
    const newCarta = carta.filter((p, i) => i !== index);
    setCarta(newCarta);
    setValue('carta', newCarta);
    console.log(getValues('carta'));
  }

  return (
    <ScrollView>
      <AddRestaurantHeader screenId={3} navigation={navigation} />
      <View style={styles.form}>
        <Text>Subir tus fotos</Text>
        <View style={styles.addRestaurantPhotos}>
          {
            imagesURIs.map((uri, i) => <RestaurantPhoto uri={uri} key={`${uri}${i}`} />)
          }
          <TouchableOpacity onPress={getPhoto}>
            <AddPhotoComponent />
          </TouchableOpacity>
        </View>
        <TextInput 
          style={styles.textInput}
          placeholder="URL de tu video"
          onChangeText={text => setValue('name', text)}
        />
        <Text>Listado de tu carta</Text>
        <View style={styles.carta}> 
          {
            carta.map((platillo, i) => <PlatilloComponent key={`${platillo}${i}`} platillo={platillo} index={i} handleDeletePlatillo={handleDeletePlatillo}/>)
          }
          <TextInput 
            style={styles.platillo} 
            ref={platillo}
            placeholder="Agrega un platillo" 
            onChangeText={(text) => setValue('platillo', text)} 
            onEndEditing={() => handleSetCarta()} />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.push('5')}>
        <Icon type="material-community" name="arrow-right-bold-circle" color="#fdd367" size={46} />
      </TouchableOpacity>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  )
}

const AddPhotoComponent = () => {
  return (
    <>
      <Icon type="material-community" name="image-plus" size={(deviceWidth/4)-20} style={styles.addRestaurantPhotosIcon} />
    </>
  )
}

const RestaurantPhoto = ({uri}) => {
  return (
    <View style={{width: (deviceWidth/4)-20, height: 100}}>
      <Image style={styles.RestaurantPhoto} height="100%" source={{uri}} accessibilityLabel="logo de negocio" />
    </View>
  );
}

const PlatilloComponent = ({platillo, index, handleDeletePlatillo}) => {
  return (
    <View style={styles.platillo} key={`${platillo}${index}`}>
      <TouchableOpacity style={styles.deletePlatillo} onPress={() => handleDeletePlatillo(index)}>
        <Icon type="material-community" name="close-circle" color="red" size={18}/>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', fontSize: 12}}>{platillo}</Text>
    </View>)
}

export default AddRestaurantFourth;