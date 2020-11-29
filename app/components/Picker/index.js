import React, {useState} from 'react';
import {View, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const timeformat = (hours, minutes) => {
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

const MyPicker = ({getTime}) => {
  const [show, setShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const date = new Date();

  const showPicker = () => {
    setShow(true);
  }

  const handleSetTime = event => {
    const eventTimestamp = event.nativeEvent.timestamp;
    const newTime = new Date(eventTimestamp);
    const newHour = newTime.getHours();
    const newMinutes = newTime.getMinutes();
    setSelectedTime(timeformat(newHour, newMinutes));
    setShow(false);
    getTime(eventTimestamp);
  }
  
  return (
    <View>
      <Button
        title={selectedTime || 'Cerrado'}
        color="#fdd367"
        onPress={showPicker}
       />
      {
        show 
        ? <DateTimePicker
            testID="timePicker"
            value={date}
            mode="time"
            is24Hour={false}
            display="clock"
            onChange={handleSetTime}
         />
        : null
      }
    </View>
  );
}

export default MyPicker;