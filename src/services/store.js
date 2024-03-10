import { configureStore } from "@reduxjs/toolkit";
// import { buildGetDefaultEnhancers } from "@reduxjs/toolkit/dist/react";
// import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/react";
import { articleApi } from "./article";


//Store is a global state and we are using reducer to take particular state/part of that whole part

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    }, //grab some part of entire state
    middleware: (buildGetDefaultMiddleware) => buildGetDefaultMiddleware().concat()
});