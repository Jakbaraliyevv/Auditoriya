import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
const initialState = {
  korzinaData: JSON.parse(localStorage.getItem("korzina")) || [],
};

const korzinaSlice = createSlice({
  name: "Korzina",
  initialState,
  reducers: {
    addDoCard: (state, { payload }) => {
      const findOldData = state.korzinaData.find(
        (item) => item.id === payload.id
      );

      if (!findOldData) {
        state.korzinaData = [...state.korzinaData, payload];
        notification.success({
          message: "Maxsulot savtaga qo'shildi",
        });

        localStorage.setItem("korzina", JSON.stringify(state.korzinaData));
      } else {
        notification.error({
          message: "Allqachon savtaga qo'shilgan",
        });
      }
    },
  },
});

export const { addDoCard } = korzinaSlice.actions;
export default korzinaSlice.reducer;
