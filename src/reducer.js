export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finished developing...
  //token: 'BQDi5j_0Ex8JQQ08oRSPOKW3UVh2LHKg0XFF3hcmPDY4RS38se2JCKG1sX3jRz8qeCsOX1aNwZljbbzzDfDEwmnlcxb6DX3COUFWZtmn7CxHQBXYWDh73_xGlSXEgMUXaAPVf1cjoS5FRZkjz9KlYmgNgJnv'
}

const reducer = (state, action) => {
  console.log(action)

  // Action --> type. [playload]

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state;
  }
};

export default reducer