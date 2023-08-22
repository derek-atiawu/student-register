import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "counter",
  initialState: {
    students: [
      // { name: "Derek", subject: "React", tutor: "Habib", date: "", id: "1" },
    ],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    editStudent: (state, action) => {
      const newStu = state.students.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.students = newStu;
    },
    deleteStudent: (state, action) => {
      const newStu = state.students.filter(
        (item) => item.id !== action.payload
      );
      state.students = newStu;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;
