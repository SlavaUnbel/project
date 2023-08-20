import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { ApplicationState } from './ApplicationState';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: ApplicationState) {
    const rootReducers: ReducersMapObject<ApplicationState> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<ApplicationState>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // TODO: поправить типизацию стора
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
