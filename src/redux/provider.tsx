"use client";
import { Provider } from "react-redux";
import { store, persister } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: any) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persister}>{children}</PersistGate>
		</Provider>
	);
}
