import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import TaskItem from '../components/TaskItem';
import { CustomTextInput } from '../components/CustomTextInput';
import { EmptyListComponent } from '../components/EmptyListComponent';
import { useLoadTasks } from '../hooks/useLoadTasks';
import { useAddTask } from '../hooks/useAddTask';
import { useToggleCompleteTask } from '../hooks/useToggleCompleteTask';
import { useDeleteTask } from '../hooks/useDeleteTask';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';


const ToDoListScreen = () => {


    const {tasks, setTasks} = useLoadTasks();
    const [newTask, setNewTask] = useState<string>('');

    const { addTask } = useAddTask(tasks, setTasks);
    const { toggleComplete } = useToggleCompleteTask(tasks, setTasks);
    const { deleteTask } = useDeleteTask(tasks, setTasks);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainTitleContainer}>
               <Text style={styles.title}>{"To Do List"}</Text>
            </View>
            <View style={styles.inputContainer}>
            <CustomTextInput onChangeText={setNewTask} value={newTask} label={'Add new task..'} mode={'outlined'} />
            <CustomButton buttonText={'Add'} onPress={() =>{
                addTask(newTask);
                setNewTask('');
            }} disabled={!newTask}  />
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <TaskItem
                    task={item}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTask}
                />
                )}
            ListEmptyComponent={EmptyListComponent}
        />
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  mainTitleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default ToDoListScreen;