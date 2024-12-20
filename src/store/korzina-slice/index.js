import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { use } from "react";
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
        state.korzinaData = [
          ...state.korzinaData,
          { ...payload, userPrice: payload.price },
        ];

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

    deletCard: (state, { payload }) => {
      state.korzinaData = state.korzinaData.filter(
        (item) => item.id !== payload
      );

      localStorage.setItem("korzina", JSON.stringify(state.korzinaData));
    },

    increment: (state, { payload }) => {
      state.korzinaData = state.korzinaData.map((value) =>
        value.id === payload
          ? {
              ...value,
              count: value.count + 1,
              userPrice: (value.count + 1) * value.price,
            }
          : value
      );
    },

    decrement: (state, { payload }) => {
      state.korzinaData = state.korzinaData.map((value) =>
        value.id === payload
          ? {
              ...value,
              count: value.count > 1 ? value.count - 1 : 1,
              userPrice:
                value.count > 1 ? (value.count - 1) * value.price : value.price,
            }
          : value
      );
    },
  },
});

export const { addDoCard, deletCard, increment, decrement } =
  korzinaSlice.actions;
export default korzinaSlice.reducer;
