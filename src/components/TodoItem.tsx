import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onEdit: (id: string, name: string) => void
  onDelete: (id: string) => void
}

const TodoItem = ({ todo, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = React.useState(false)
  const [editName, setEditName] = React.useState(todo.name)

  const handleSave = () => {
    if (editName.trim()) {
      onEdit(todo.id, editName)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditName(todo.name)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Editar:</Text>
        <TextInput
          style={styles.input}
          value={editName}
          onChangeText={setEditName}
          onBlur={handleSave}
          autoFocus
        />
        <View style={styles.buttonContainer}>
          <Button title="Salvar" onPress={handleSave} />
          <Button title="Cancelar" onPress={handleCancel} color="#999" />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{todo.name}</Text>
          <Text style={styles.date}>
            {new Date(todo.createdAt).toLocaleDateString('pt-BR')}
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button title="Editar" onPress={() => setIsEditing(true)} />
        <Button
          title="Remover"
          onPress={() => onDelete(todo.id)}
          color="#f44336"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    marginHorizontal: 16
  },
  label: {
    fontSize: 14,
    color: '#888'
  },
  input: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    marginVertical: 10,
    fontSize: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 12,
    color: '#888'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export { TodoItem }
