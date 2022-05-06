import React from 'react';
import {Text, View} from 'react-native';

const Message = (props)=> {
  return (
  <Text style={{fontSize:30, padding: 50}}>
    {props.name}
  </Text>
  )
}


const AllMessages = ()=> {
  return(
  <View>
    <Message name="Hello Ract Native"/>
    <Message name="Hello Java"/>
    <Message name="Hello Python"/>
  </View>
  )
 
}

export default AllMessages;