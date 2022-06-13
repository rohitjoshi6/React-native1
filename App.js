import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Platform,KeyboardAvoidingView, TextInput,TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/task';


export default function App() {

  const [tasks, setTasks] = useState();

  const [tasksItems, setTasksItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasksItems([...tasksItems,tasks])
    setTasks(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...tasksItems];
    itemsCopy.splice(index,1);
    setTasksItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where tasks will go */}
          {
            tasksItems.map((item,index)=>{
              return(
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Task text={item}/>
              </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Write/Add task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Add a Task'} value={tasks} onChangeText={text => setTasks(text)}/>

          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop :80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width:250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor:'#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor:'#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

