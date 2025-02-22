import { create } from 'zustand'

type AppStore = {
  API_URL: string
  setApiUrl: (_API_URL: string) => void
}

export const useAppStore = create<AppStore>()(set => ({
  API_URL: process.env.API_URL,
  setApiUrl: (API_URL: string) => set({ API_URL })
}))
