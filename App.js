import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {useState} from "react";

export default function App() {

  const [todos,setTodos] = useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play ps 5',key:'3'}
  ])
// Can't find variable: useState?
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.container}>
         {/* form */}
         <View style={styles.list}>
           <FlatList
           data={todos}
           renderItem={({item}) =>(
             <Text>{item.text}</Text>
           )}
           />
         </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
