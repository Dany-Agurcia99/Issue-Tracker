"use client"
import React, { PropsWithChildren } from "react"
import {
  QueryClient,
  QueryClientProvider as RQProvider,
} from "@tanstack/react-query"
const queryClient = new QueryClient()

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return <RQProvider client={queryClient}>{children}</RQProvider>
}

export default QueryClientProvider
