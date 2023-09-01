// Initial state of the data layer with user, playlists, item, and token set to null
export const initialState = {
  user: null, // Represents the authenticated user details
  playlists: [], // Array to store user playlists
};

// Reducer function to update the state based on dispatched actions
const reducer = (state, action) => {
  // console.log(action); // Log the dispatched action to the console for debugging

  // Switch statement to handle different action types and update the state accordingly
  switch (action.type) {
    case "SET_USER":
      // When "SET_USER" action is dispatched, update the user in the state
      return {
        ...state, // Maintain the existing state
        user: action.user, // Update the user with the new value from the action
      };

    case "SET_RECENTLY_PLAYED_TRACKS":
      // When "SET_CURRENT_PLAYING_TRACK" action is dispatched, update the current playing track in the state
      return {
        ...state, // Maintain the existing state
        recently_played_tracks: action.recently_played_tracks,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state, // Maintain the existing state
        top_artists: action.top_artists,
      };

    case "SET_TOP_TRACKS":
      return {
        ...state, // Maintain the existing state
        top_tracks: action.top_tracks,
      };

    default:
      // For any other action type (unhandled), return the current state unchanged
      return state;
  }
};

export default reducer;
