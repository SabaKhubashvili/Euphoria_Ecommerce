'use client'

import React from 'react'
import { OnlyClient } from './components/OnlyClient'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

interface Props{
  children:React.ReactNode
}
export const Providers = ({children}:Props) => {
  return (
    <OnlyClient>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </OnlyClient>

  )
}
