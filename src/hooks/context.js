import { createContext, useContext } from "react"

export const JobContext = createContext()

export const useJobContext = () => useContext(JobContext)
