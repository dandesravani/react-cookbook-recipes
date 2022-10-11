import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useOnline } from './useOnline'

const styleOnline = {
  height: '25px',
  width: '25px',
  backgroundColor: 'green',
  borderRadius: '50%',
  display: 'inline-block',
}

const styleOffline = {
  height: '25px',
  width: '25px',
  backgroundColor: 'red',
  borderRadius: '50%',
  display: 'inline-block',
}

export const OnlineStatus = () => {
  const online = useOnline()
  return (
    <HStack>
      <Text>Employee</Text>
      <div style={online ? styleOnline : styleOffline}>{online}</div>
    </HStack>
  )
}
