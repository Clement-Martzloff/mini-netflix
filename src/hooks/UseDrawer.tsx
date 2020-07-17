import { useContext } from 'react';
import { DrawerContext, CLICK_ICON_BUTTON } from '../contexts/DrawerContext';

function useDrawer() {
	const contextValue = useContext(DrawerContext);

	if (contextValue === undefined) {
		throw new Error(`No provider for DrawerContext given`);
	}

	return { ...contextValue, CLICK_ICON_BUTTON };
}

export default useDrawer;
