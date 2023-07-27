// Import necessary modules from React library
import React, { createContext, useContext, useReducer } from "react";

// Create a context to store and access the data layer
export const DataLayerContext = createContext();

// DataLayer component to wrap the application and provide access to the data layer state and dispatch
export const DataLayer = ({ reducer, initialState, children }) => (
  // Use the DataLayerContext.Provider to make the state and dispatch available to its children
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Custom hook to access the data layer value (state and dispatch)
export const useDataLayerValue = () => useContext(DataLayerContext);
