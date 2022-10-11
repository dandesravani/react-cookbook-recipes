/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable */
import React, { useReducer } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'

const counterReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add': {
      return { ...state, count: state.count + state.by }
    }
    case 'set-by': {
      return { ...state, by: action.payload }
    }
    default:
      return { count: state.count, by: state.by }
  }
}

const initial = { count: 1, by: 1 }

export const undoCounterReducer = (reducer: any) => {
  let undoStack: any = []
  const reducerFn = (state: any, action: any) => {
    switch (action.type) {
      case 'undo':
        console.log('helo')
        if (undoStack.length <= 0) {
          return state
        }
        const us = undoStack.pop()
        console.log({ us, undoStack })
        return us
      // eslint-disable-next-line no-fallthrough
      default:
        undoStack.push(state)
        return reducer(state, action)
    }
  }
  return reducerFn
}

const reducer = undoCounterReducer(counterReducer) as any
export const Counter = () => {
  const [{ count, by }, dispatch] = React.useReducer(reducer, initial)
  return (
    <Box>
      <Text>{count}</Text>
      <Input
        value={by}
        onChange={evt =>
          dispatch({ type: 'set-by', payload: +evt.target.value })
        }
      />
      <Button colorScheme="green" onClick={() => dispatch({ type: 'add' })}>
        Add
      </Button>
      <Button colorScheme="blue" onClick={() => dispatch({ type: 'undo' })}>
        undo
      </Button>
      <pre>{JSON.stringify({ count, by }, null, 2)}</pre>
    </Box>
  )
}
