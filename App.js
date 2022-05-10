import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, TextInput} from 'react-native';

const Message = ()=> {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage]= useState('');
  const getMessages = async ()=> {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();
    setMessages(data);
  } 

  useEffect(()=> {
    getMessages();
  }, []);

  const onChangeHandler = (text)=> {
    setNewMessage(text);
  }

  const insertText = ()=> {
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newMessage,
      }),
    });

    getMessages();
  }
  return (
    <View style={{padding: 50}}>
      <TextInput
      placeholder='Write Your Text Here'
      onChangeText={onChangeHandler} />
      <Button
      title='Add'
      onPress={insertText} 
      />
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