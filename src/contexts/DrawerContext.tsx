import React, {
	useReducer,
	useMemo,
	createContext,
	ReactNode,
	Dispatch,
} from 'react';

enum eventName {
	CLICK_ICON_BUTTON = 'CLICK_ICON_BUTTON',
}

type IContextValue = {
	drawerState: IDrawerState;
	dispatchEvent: Dispatch<IDrawerEvent>;
};

interface IDrawerEvent {
	name: string;
}
interface IDrawerState {
	open: boolean;
	drawerWidth: number;
}

export const { CLICK_ICON_BUTTON } = eventName;
export const DrawerContext = createContext<IContextValue | undefined>(
	undefined
);
const initialDrawerState: IDrawerState = {
	open: false,
	drawerWidth: 240,
};

function reducer(
	drawerState: IDrawerState = initialDrawerState,
	drawerEvent: IDrawerEvent
): IDrawerState {
	switch (drawerEvent.name) {
		case CLICK_ICON_BUTTON:
			return { ...drawerState, open: !drawerState.open };
		default:
			return drawerState;
	}
}

export function DrawerContextProvider({ children }: { children: ReactNode }) {
	const [drawerState, dispatchEvent] = useReducer(
		reducer,
		initialDrawerState
	);
	const memoizedContextValue = useMemo(
		() => ({
			drawerState,
			dispatchEvent,
		}),
		[drawerState, dispatchEvent]
	);

	return (
		<DrawerContext.Provider value={memoizedContextValue}>
			{children}
		</DrawerContext.Provider>
	);
}
