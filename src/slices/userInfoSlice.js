import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name : 'userInfo',
    initialState: {
        usuario :  {name : '' , userName : '' , email : ''}
    },
    reducers:{
    
        getEmail: (state) =>{
            return state.user.email;
        },

        setEmail: (state, newEmail) =>{
            state.user.email = newEmail;
        },

        setUser: (state, user) => {
            state.usuario = user.payload;
        }
    }
})

export const { getEmail, setEmail, setUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;

