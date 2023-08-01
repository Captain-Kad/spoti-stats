// Initial state of the data layer with user, playlists, item, and token set to null
export const initialState = {
  user: null, // Represents the authenticated user details
  playlists: [], // Array to store user playlists
  token: null, // Holds the Spotify access token
};

// Reducer function to update the state based on dispatched actions
const reducer = (state, action) => {
  // console.log(action); // Log the dispatched action to the console for debugging

  // Switch statement to handle different action types and update the state accordingly
  switch (action.type) {
    case "SET_TOKEN":
      // When "SET_TOKEN" action is dispatched, update the token in the state
      return {
        ...state, // Maintain the existing state
        token: action.token, // Update the token with the new value from the action
      };

    case "SET_USER":
      // When "SET_USER" action is dispatched, update the user in the state
      return {
        ...state, // Maintain the existing state
        user: action.user, // Update the user with the new value from the action
      };

    case "SET_CURRENT_PLAYING_TRACK":
      // When "SET_CURRENT_PLAYING_TRACK" action is dispatched, update the current playing track in the state
      return {
        ...state, // Maintain the existing state
        current_playing_track: action.current_playing_track, // Update the token with the new value from the action
      };

    default:
      // For any other action type (unhandled), return the current state unchanged
      return state;
  }
};

export default reducer;
