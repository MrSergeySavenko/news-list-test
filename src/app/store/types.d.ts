declare type AppStore = typeof import('./store.ts').store;
declare type RootState = ReturnType<AppStore['getState']>;
declare type AppDispatch = AppStore['dispatch'];
