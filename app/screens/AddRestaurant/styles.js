import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  addBussinessLogo: {
    borderColor: '#dfdfdf',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#dfdfdf',
    overflow: 'hidden',
    height: width * 0.5,
  },
  addBusinessPhotos: {
    borderColor: '#dfdfdf',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#dfdfdf',
    overflow: 'hidden',
  },
  bussinessLogo: {
    resizeMode: "cover",
  },
  bussinessPhoto: {
    resizeMode: "contain",
  },
  form: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: '#999',
    paddingTop: 10,
    width: '90%'
  },
  textInputArea: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    width: '90%',
    textAlign: 'left',
    textAlignVertical: 'top',
    marginTop: 10,
  },
  screenTitle: {
    fontSize: 28,
    textAlign: 'center',
  },
  entregaItem: {
    alignItems: 'center',
    margin: 5,
  },
  mapview: {
    width: '99%',
    height: 300,
    alignSelf: 'center',
  },
  myLocationButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: '#eeeeee55',
    borderRadius: 5,
    padding: 5,
    elevation: 15,
    zIndex: 1,
  },
  carta: {
    width: '100%',
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  platillo: {
    width: '32%',
    textAlign: 'center',
    borderRadius: 20,
    margin: 2,
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletePlatillo: {
    position: 'absolute',
    top: -5,
    alignSelf: 'flex-end',
    
  },
  promosContainer: {
    flexDirection: 'column',
    maxHeight: 400,
    width: '100%',
  },
  promo: {
    flexDirection: 'row',
    width: '99%',
    marginVertical: 2,
  },
  promoImageContainer: {
    width: 70, 
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  promoImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    flex: 1,
  },
  promoDescription: {
    flex: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    margin: 2,
    textAlignVertical: 'top',
  },
});

export default styles;