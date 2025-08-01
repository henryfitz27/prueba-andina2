"use client"

import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

export function AuthProvider({ 
  children,
  session 
}: { 
  children: React.ReactNode
  session: Session | null
}) {
  return (
    <SessionProvider session={session} refetchInterval={300}>
      {children}
    </SessionProvider>
  )
}
