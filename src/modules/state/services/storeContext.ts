import { createContext, useContext } from 'react';

import rootStore from '../stores/rootStore';

export const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);
