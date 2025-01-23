import React,{memo} from 'react';
import { StyleSheet, Text ,View} from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';
import { Task } from '../types/todo.types';
import Animated,{ FadeIn, FadeOut } from 'react-native-reanimated';


interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem = ({task, onToggleComplete, onDelete }: TaskItemProps)=>{
  return (
    <Animated.View
      style={styles.taskItemContainer}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <View style={styles.checkboxContainer}>
        <Checkbox
            status={task.completed ? 'checked' : 'unchecked'}
            onPress={() => onToggleComplete(task.id)}
        />
      </View>
  
        <Text style={[styles.taskText, task.completed && styles.completed]}>
            {task.title}
        </Text>
   
      <IconButton icon="delete" onPress={() => onDelete(task.id)} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskItemContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
   
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  checkboxContainer:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:10
  }
});

export default memo(TaskItem);