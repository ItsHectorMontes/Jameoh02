import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  crumbsContainer: {
    backgroundColor: '#ccc',
    overflow: 'visible',
    borderWidth: 0,
  },
  crumbs: {
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#aaa',
    width: 15,
    position: 'relative',
  },
  activeCrumb:  {
    backgroundColor: '#fdd367',
    borderColor: '#ecc226dd',
  },
  activeCrumbText: {
    backgroundColor: 'transparent',
  },
  row: {
    padding: 0,
    flexDirection: 'row'
  },
  col: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
  },
  calendar: {
    borderWidth: StyleSheet.hairlineWidth,
    width: '90%',
    margin: 10,
    flexDirection: 'column',
  },
  couponContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCouponButton: {
    flexDirection: 'row',
    margin: 5,
    width: '100%',
    backgroundColor: '#e0e1e2',
    padding: 10,
    borderRadius: 5,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: '#999',
    paddingTop: 10,
    width: '90%'
  },
  coupon: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountModalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponText: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#999',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius:  5,
    fontSize: 28,
  },
});

export default styles;