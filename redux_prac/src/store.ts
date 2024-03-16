import {configureStore} from "@reduxjs/toolkit";
import {pokemonApi} from "./services/pokemon";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        // 탑 레벨 slice로 지정된 일반적인 reducer
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // api middleware rtk-query에 사용 가능한 캐싱, 불가변성, 폴링 가능하게 추가
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

// 최적화, refetchOnFocus/refetchOnReconnect 행위 요구
// 최적의 콜백을 2번째 인자 커스텀마이징
setupListeners(store.dispatch)