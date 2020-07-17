import { useContext } from 'react'
import { DrawerContext, TOGGLE_DRAWER } from '../contexts/DrawerContext'

function useDrawer() {
  const contextValue = useContext(DrawerContext)

  if (contextValue === undefined) {
    throw new Error(`No provider for DrawerContext given`)
  }

  return { ...contextValue, TOGGLE_DRAWER }
}

export default useDrawer
