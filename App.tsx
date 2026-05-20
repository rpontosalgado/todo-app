import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { TodoList } from './src/components/TodoList/TodoList'
import { TodoProvider } from './src/contexts/TodoContext'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.container}>
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  }
}

export default App
