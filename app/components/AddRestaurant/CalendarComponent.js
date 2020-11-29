import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {hours, minutes} from './timeData';
import MyPicker from '../Picker';

const CalendarComponent = ({setValue}) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [apertura, setApertura] = useState(null);
  const [cierre, setCierre] = useState(null);

  return (
    <View style={styles.calendar}>
      <Row>
        <Col>
          <Text>Día</Text>
        </Col>
        <Col>
          <Text>Apertura</Text>
        </Col>
        <Col>
          <Text>Cierre</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Lunes</Text>
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setApertura(time);
              setValue('horarioLunes', {apertura,cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setCierre(time);
              setValue('horarioLunes', {apertura, cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
      </Row><Row>
        <Col>
          <Text>Martes</Text>
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setApertura(time);
              setValue('horarioMartes', {apertura,cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setCierre(time);
              setValue('horarioMartes', {apertura, cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Miercoles</Text>
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setApertura(time);
              setValue('horarioMiercoles', {apertura,cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setCierre(time);
              setValue('horarioMiercoles', {apertura, cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Jueves</Text>
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setApertura(time);
              setValue('horarioJueves', {apertura,cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setCierre(time);
              setValue('horarioJueves', {apertura, cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Viernes</Text>
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setApertura(time);
              setValue('horarioViernes', {apertura,cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setCierre(time);
              setValue('horarioViernes', {apertura, cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Sabado</Text>
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setApertura(time);
              setValue('horarioSabado', {apertura,cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setCierre(time);
              setValue('horarioSabado', {apertura, cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Domingo</Text>
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setApertura(time);
              setValue('horarioDomingo', {apertura,cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
        <Col>
          <MyPicker
            getTime={time => {
              setCierre(time);
              setValue('horarioDomingo', {apertura, cierre});
              console.log(apertura, cierre);
            }}
          />
        </Col>
      </Row>
    </View>
  );
}

const Row = ({children}) => {
  return (
    <View style={styles.row}>
      {children}
    </View>
  )
}

const Col = ({children}) => {
  return (
    <View style={styles.col}>
      {children}
    </View>
  )
}

export default CalendarComponent;