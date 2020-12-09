import React, {useEffect, useState, useRef} from 'react';
import {View, Modal, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import {Icon} from 'react-native-elements';
import styles from './styles';
import Toast from 'react-native-easy-toast';

const Coupons = ({coupons, success}) => {
  const {register, 
    setValue, 
    getValues,
    watch,
    reset,
    handleSubmit} = useForm({
    defaultValues: {
      shareAmount: 5,
      discount: 10,
    },
  });
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const toastRef = useRef();

  useEffect(() => {
    register('name', {required: true});
    register('description', {required: true});
    register('discount', {required: true});
    register('shareAmount', {required: true});
  },[register]);

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    if (result.cancelled) {
      toastRef.current.show("La operación fue cancelada por el usuario");
    } else {
      console.log(result);
      setImage(result.uri);
    }
  }

  const onSubmit = (data) => {
    const couponData = {
      name: data.name,
      description: data.description,
      image: image,
      shareAmount: data.shareAmount,
      discount: data.discount,
    };
    success(couponData);
    reset();
    setImage(null);
    setOpen(false);
  }

  return (
    <View style={styles.cuponContainer}>
      <TouchableOpacity style={styles.addCouponButton} onPress={() => setOpen(true)}>
        <Text>Agregar cupón</Text>
      </TouchableOpacity>
      {
        
        coupons.map((coupon) => (
          <View style={styles.coupon}>
          <Icon type="material-community" name="close" size={12} />
            <Image 
              source={{uri: coupon.image}} 
              width={40} 
              height={40} 
              resizeMode="cover"
              />
            <Text>
              {coupon.name}
            </Text>
            <Text>
              {coupon.description}
            </Text>
            <Text>
              {coupon.shareAmount}
            </Text>
            <Text>
              {coupon.discount}%
            </Text>
          </View>))
      }
      <Modal visible={open} onRequestClose={() => setOpen(false)}>
        <View style={styles.modalView}>
          <Text>Agrega tu cupón</Text>
          <TouchableOpacity style={[styles.promoImageContainer, {width: 200, height: 200}]} onPress={handleSelectImage}>
            {
              !image 
              ? <Icon 
                  type="material-community" 
                  name="image-plus" 
                  style={styles.promoImage} 
                  size={100} 
                  />
              : <Image 
                  source={{uri: image}} 
                  style={styles.promoImage} 
                  />
            }
          </TouchableOpacity>
          <TextInput
            placeholder="Nombre del cupón"
            style={styles.textInput}
            value={watch('name')}
            onChangeText={(text) => setValue('name', text)}
            />
          <TextInput
            placeholder="Descripción"
            numberOfLines={3}
            value={watch('description')}
            style={[styles.textInput, {textAlignVertical: 'top'}]}
            onChangeText={(text) => setValue('description', text)}
            />
            <Text>
              Descuento
            </Text> 
          <View style={styles.discountModalView}>
            <TextInput 
              onChangeText={(text) => setValue('discount', text)}
              value={watch('discount')}
              defaultValue={`${getValues('discount')}`}
              style={styles.couponText}
              keyboardType="number-pad"
            />
            <Text style={{fontSize: 28}}>
              %
            </Text>
          </View>
          <Text style={{marginTop: 20}}>
            ¿Cuánto se necesita compartir para ganar el cupón?
          </Text>
          <TextInput 
            onChangeText={(text) => setValue('shareAmount', text)}
            value={watch('shareAmount')}
            defaultValue={`${getValues('shareAmount')}`}
            style={styles.couponText}
            keyboardType="number-pad"
          />
          <TouchableOpacity style={[styles.addCouponButton, {justifyContent: 'center'}]} onPress={handleSubmit(onSubmit)}>
            <Text>
              Agregar este cupón
            </Text>
          </TouchableOpacity>
          <Toast ref={toastRef} position="bottom" opacity={0.9} />
        </View>
      </Modal>
    </View>
  );
}

export default Coupons;