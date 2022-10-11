import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { InitialCart, Product } from './data'
import { useDispatch, useSelector } from 'react-redux'

export type CartItem = Product & {
  quantity: number
}

export interface CartItemProps {
  cartItem: CartItem
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <Box bg="gray.300" w="100%" p="6">
      <Flex flexWrap="wrap" direction="column" justifyContent="space-between">
        <Text>{cartItem.name}</Text>
        <Text>
          {cartItem.quantity} X {cartItem.price}
        </Text>
        <Text>Total: {cartItem.quantity * cartItem.price}</Text>
      </Flex>
    </Box>
  )
}

// interface CartListProps {
//   cartItems: Product[]
// }

export const CartList = () => {
  const cart = useSelector((state: InitialCart) => state.items)

  const dispatch = useDispatch()

  return (
    <>
      <VStack>
        {cart.map(item => (
          <CartItem key={item.productId} cartItem={item} />
        ))}
      </VStack>
      <Center>
        <Heading size="l" mt="20px">
          Checkout: {cart.reduce((acc, v) => acc + v.quantity * v.price, 0)}
        </Heading>
      </Center>
      <Center>
        <Heading size="l" mt="20px">
          Total items: {cart.reduce((acc, v) => acc + v.quantity, 0)}
        </Heading>
      </Center>
      <Center>
        <Button
          colorScheme="red"
          mt="40px"
          onClick={() => dispatch({ type: 'CLEAR' })}
        >
          Clear
        </Button>
      </Center>
    </>
  )
}
