import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList} from 'react-native';

const Message = ()=> {
  const [messages, setMessages] = useState([]);

  const getMessages = async ()=> {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();
    setMessages(data);
  } 

  useEffect(()=> {
    getMessages();
  });

  return (
    <View style={{padding: 30}}>
      <FlatList
      data={messages}
      keyExtractor={(item)=> item.id}
      renderItem={({item}) => (
      <View style={{borderBottomWidth: 2}}>
      <Text style={{fontSize: 30}}>{item.title}
      and its {item.likesCount} times liked
      </Text>
      </View>
     
      )}
      />
    </View>
  )
}
export default Message;