import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const Message = (props)=> {
  const [likesCount, setLikesCount]= useState(0);
  return (
  <View style={{borderWidth: 2}}>
    <Text style={{fontSize:30, padding: 50}}>
      {props.name} This Topic is {likesCount} times liked.
    </Text>
    <Button title="Like" onPress={()=> setLikesCount(likesCount+1)}/>
  </View>
  
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