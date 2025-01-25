import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Task } from '../types/todo.types';
import { useTheme } from '@/features/settings/hooks/useTheme';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggleComplete, onDelete }: TaskItemProps) => {
  const { colors } = useTheme();

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}
    >
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => onToggleComplete(task.id)}
      >
        <Ionicons
          name={task.completed ? 'checkbox' : 'square-outline'}
          size={24}
          color={task.completed ? colors.primary : colors.secondary}
        />
        <Text
          style={[
            styles.text,
            { color: colors.text },
            task.completed && styles.completedText,
          ]}
        >
          {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Ionicons name="trash-outline" size={24} color={colors.error} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  completedText: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
});

export default memo(TaskItem);