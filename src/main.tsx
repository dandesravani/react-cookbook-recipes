/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { createRoot } from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import { App } from './App'
import './index.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
