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
import Coupons from '../../components/AddRestaurant/Coupons';
import {Icon} from 'react-native-elements';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-easy-toast';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

const AddRestaurantFiveth = ({navigation}) => {
  const {register, errors, setValue, handleSubmit, watch, getValues} = useForm(); 
  const [promos, setPromos] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const toastRef = useRef();

  useEffect(() => {
    register('promos');
    register('coupons');
  });

  const getCameraPermissions = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;
    return resultPermissionCamera;
  }

  const setPromoDescription = (newDescription) => {
    let newPromos = [];
    const newPromo = {description: newDescription};
    newPromos = promos.concat(newPromo);
    setPromos(newPromos);
    setValue('promos', newPromos);
  }

  const editPromoDescription = (newDescription, index) => {
    let newPromos = [];
    newPromos = promos.map((promo, pi) => {
      if (pi === index) {
        Object.defineProperty(promo, 'description', {
          writable: true,
          value: newDescription,
        });
        let modifiedPromo = promo;
        return modifiedPromo;
      }
      return promo;
    });
    setPromos(newPromos);
    setValue('promos', newPromos);
  }

  const setPromoImage = async () => {
      if (getCameraPermissions() === "denied") {
        toastRef.current.show("Es necesario aceptar los permisos de la galeria");
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
        });
        if (result.cancelled) {
          toastRef.current.show('Has cerrado el selector de imagenes');
        } else {
          let newPromos = [];
          const resultData = {
            uri: result.uri, 
            type: result.type, 
            height: result.height, 
            width: result.width,
          };
          const newPromo = {imageData: resultData};
          newPromos = promos.concat(newPromo);
          setPromos(newPromos);
          setValue('promos', newPromos);
        }
      }
  }

  const editPromoImage = async (index) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });
    if (result.cancelled) {
      toastRef.current.show('Has cerrado el selector de imagenes');
    } else {
      let newPromos = [];
      const resultData = {
        uri: result.uri, 
        type: result.type, 
        height: result.height, 
        width: result.width,
      };
      newPromos = promos.map((promo, pi) => {
        if (pi === index) {
          Object.defineProperty(promo, 'imageData', {
            writable: true,
            value: resultData,
          });
          const modifiedPromo = promo;
          return modifiedPromo;
        }
        return promo;
      });
      setPromos(newPromos);
      setValue('promos', newPromos);
    }
  }

  const handleSetCoupons = (data) => {
    const newcoupons = coupons.concat(data);
    setCoupons(newcoupons);
  }

  return (
    <ScrollView>
      <AddRestaurantHeader screenId={4} navigation={navigation} />
      <View style={styles.form}>
        <Coupons setCoupons={setCoupons} coupons={coupons} success={handleSetCoupons}/>
        <Text>
          Agregar tus promociones
        </Text>
        <ScrollView style={styles.promosContainer}>
        {
          promos.map((item, index) => (
            <Promo 
              promo={item} 
              index={index}
              key={`${item.description}${index}`} 
              editPromoDescription={editPromoDescription}
              editPromoImage={editPromoImage}
            />
          ))
        }
        <AddPromo setPromoDescription={setPromoDescription}
              setPromoImage={setPromoImage} />
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => navigation.push('5')}>
        <Icon type="material-community" name="arrow-right-bold-circle" color="#fdd367" size={46} />
      </TouchableOpacity>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  )
}

const Promo = ({promo, index, editPromoDescription, editPromoImage}) => {
  const [text, setText] = useState(promo.description);
  return (
    <View style={styles.promo}>
      <TouchableOpacity onPress={() => editPromoImage(index)} style={styles.promoImageContainer}>
        {
          promo.imageData ? <Image source={{uri: promo.imageData.uri}} style={styles.promoImage} /> 
            : <Icon type="material-community" name="image-plus" />
        }
      </TouchableOpacity>
      <TextInput 
        placeholder='Descripción de las promos para las notificaciones de tus clientes'
        onChangeText={text => setText(text)}
        onEndEditing={() => editPromoDescription(text, index)}
        value={text}
        numberOfLines={3}
        style={styles.promoDescription}
      />
    </View>
  );
}

const AddPromo = ({setPromoDescription, setPromoImage}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.promo}>
      <TouchableOpacity onPress={() => setPromoImage()} style={styles.promoImageContainer}>
        {
          <Icon type="material-community" name="image-plus" />
        }
      </TouchableOpacity>
      <TextInput 
        placeholder='Descripción de las promos para las notificaciones de tus clientes'
        onChangeText={text => setText(text)}
        onEndEditing={() => {setPromoDescription(text); setText('')}}
        value={text}
        numberOfLines={3}
        style={styles.promoDescription}
      />
    </View>
  );
}

export default AddRestaurantFiveth;