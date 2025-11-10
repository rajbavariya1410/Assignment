import React from 'react'

export default function Store() {

    const counterSlice = createSlice({
        name: "counter",
        initialState: { value: 0 },
        reducers: {
            increment: (state) => { state.value += 1; },
            decrement: (state) => { state.value -= 1; }
        }
    });

    const store = configureStore({
        reducer: { counter: counterSlice.reducer }
    });
    return (
        <>

        </>
    )
}


