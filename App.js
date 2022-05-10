import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, TextInput} from 'react-native';

const Message = ()=> {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage]= useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateMessageId, setUpdatemessageId]= useState(0);

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

  const onUpdateHandler = (item)=> {
    setIsUpdate(true);
    setUpdatemessageId(item.id);
    setNewMessage(item.title)
  }

  const confirmUpdate = ()=> {
    fetch('http://localhost:3000/data/'+updateMessageId, {
      method: 'PUT',
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
      <TextInput style={{fontSize: 30}}
      placeholder='Write Your Text Here'
      onChangeText={onChangeHandler}
      value={newMessage} 
      />
      <Button
      title={!isUpdate? 'Add': 'Update'}
      onPress={!isUpdate? ()=> insertText() : ()=> confirmUpdate()} 
      />
      <FlatList
      data={messages}
      keyExtractor={(item)=> item.id}
      renderItem={({item}) => (
        <View style={{borderBottomWidth: 2}}>
          <Text style={{fontSize: 30}}>{item.title}
          and its {item.likesCount} times liked
          </Text>
          <Button
          title='Update' onPress={()=> onUpdateHandler(item)} />
        </View>
      )}
      />
    </View>
  )
}
export default Message;