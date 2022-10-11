/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { CartList } from './Cart'
// import { Counter } from './reducer/Counter'
import { Provider } from 'react-redux'
import { products } from './data'
import { ProductList } from './ProductList'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export const ShoppingApp = () => {
  return (
    <Flex
      flexDirection="column"
      flexWrap="wrap"
      h="500px"
      alignContent="space-around"
    >
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <Box ml="20px">
            <Center>
              <Heading size="xl" mb="30px">
                Boots
              </Heading>
            </Center>
            <ProductList products={products} />
          </Box>
          <Box mr="20px">
            <Center>
              <Heading size="xl" mb="30px">
                Cart
              </Heading>
            </Center>
            <CartList />
          </Box>
        </PersistGate>
      </Provider>
    </Flex>
  )
}
