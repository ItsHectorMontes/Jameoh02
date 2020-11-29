import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Breadcrumb from 'react-native-breadcrumb';
const Screens = ['', '', '', '', ''];

const AddBussinessHeader = props => {
  const activeScreen = props.screenId;

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Agrega tu negocio</Text>
      <Breadcrumb 
        entities={Screens} 
        isTouchable={true}
        onCrumbPress={id => props.navigation.navigate(`${id+1}`)}
        flowDepth={activeScreen}
        height={15}
        borderRadius={100}
        activeCrumbTextStyle={styles.activeCrumbText}
        crumbStyle={styles.crumbs}
        activeCrumbStyle={styles.activeCrumb}
        crumbsContainerStyle={styles.crumbsContainer}
        />
    </View>
  );
};

export default AddBussinessHeader;