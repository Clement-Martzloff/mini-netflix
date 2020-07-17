import React, {
  useReducer,
  useMemo,
  createContext,
  ReactNode,
  Dispatch,
} from 'react'

enum actionName {
  TOGGLE_DRAWER = 'TOGGLE_DRAWER',
}

type action = IDrawerAction

interface IDrawerAction {
  name: string
}
interface IDrawerState {
  open: boolean
  drawerWidth: number
}
type IContextValue = {
  drawerState: IDrawerState
  dispatch: Dispatch<IDrawerAction>
}

export const { TOGGLE_DRAWER } = actionName
export const DrawerContext = createContext<IContextValue | undefined>(undefined)
const initialDrawerState: IDrawerState = {
  open: false,
  drawerWidth: 240,
}

function reducer(
  state: IDrawerState = initialDrawerState,
  action: action,
): IDrawerState {
  switch (action.name) {
    case TOGGLE_DRAWER:
      return { ...state, open: !state.open }
    default:
      return state
  }
}

export function DrawerContextProvider({ children }: { children: ReactNode }) {
  const [drawerState, dispatch] = useReducer(reducer, initialDrawerState)
  const memoizedContextValue = useMemo(
    () => ({
      drawerState,
      dispatch,
    }),
    [drawerState, dispatch],
  )

  return (
    <DrawerContext.Provider value={memoizedContextValue}>
      {children}
    </DrawerContext.Provider>
  )
}
