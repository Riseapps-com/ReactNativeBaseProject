import { createContext, useContext } from 'react';

import { rootStore } from '../stores';

export const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);
