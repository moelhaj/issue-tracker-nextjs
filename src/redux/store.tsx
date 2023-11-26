"use client";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/user";

export const store = configureStore({
	reducer: {
		user: persistReducer(
			{
				key: "user",
				storage,
			},
			userReducer
		),
	},
});

export const persister = persistStore(store);
