'use client'
import Dashboard from '@/components/dashboard/Dashboard'
import { Authenticated } from 'convex/react'
import React from 'react'

const page = () => {
  return (
    <Authenticated>
      <Dashboard />
    </Authenticated>
  )
}

export default page