/* eslint-disable react/jsx-no-bind */
import { Button, Divider, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Product } from './data'
import { useDispatch } from 'react-redux'

interface ProductItemProps {
  product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useDispatch()
  return (
    <>
      <VStack>
        <Text fontSize="l">{product.name}</Text>
        <Text fontSize="m">{product.description}</Text>
        <Text fontSize="sm">{product.price}</Text>
        <Button
          colorScheme="blue"
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        >
          Add to basket
        </Button>
      </VStack>
      <Divider mt="20px" mb="4px" maxW="350px" />
    </>
  )
}

interface ProductListProps {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <Flex direction="column" alignItems="flex-start">
        {products.map(prod => (
          <ProductItem key={prod.productId} product={prod} />
        ))}
      </Flex>
    </>
  )
}
