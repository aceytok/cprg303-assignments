/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import ToDoList from './components/ToDoList';


export default function App() {

  const [tasks, setTasks] = useState([
    'Do the laundry',
    'Go to the gym',
    'Walk the dog'
]);

    return (
      
        <SafeAreaView>
         
            <ScrollView>
                <Pressable>
                  <ToDoList tasks={tasks} />
                </Pressable>
            </ScrollView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                />
                <Button title="Add" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});