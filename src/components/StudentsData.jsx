import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { name: "Aksht", age: 24, course: "MERN", batch: "October", id: "1" },
  { name: "Deepak", age: 25, course: "MERN", batch: "November", id: "2" },
  { name: "Birendra", age: 26, course: "MERN", batch: "September", id: "3" },
  { name: "Bharat", age: 22, course: "MERN", batch: "September", id: "4" },
  { name: "Chahat", age: 23, course: "MERN", batch: "October", id: "5" },
  { name: "Ayush", age: 24, course: "MERN", batch: "November", id: "6" },
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload)
    },
    userUpdated(state, action) {
      const { id, name, age, course, batch } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.name = name
        existingUser.age = age
        existingUser.course = course
        existingUser.batch = batch
      }
    },
  },
})

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer