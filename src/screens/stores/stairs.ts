import { create } from 'zustand'

interface ActiveFloor {
  activeFloor: number
  setActiveFloor: (value: number) => void
}

const useActiveFloor = create<ActiveFloor>((set) => ({
  activeFloor: 0,
  setActiveFloor: (value) => set(() => ({ activeFloor: value })),
}))

export default useActiveFloor
