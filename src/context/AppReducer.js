export default (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE_TO_LIST":
        return {
          ...state,
          list: [action.payload, ...state.list],
        };
      case "REMOVE_MOVIE_FROM_LIST":
        return {
          ...state,
          list: state.list.filter(
            (movie) => movie.id !== action.payload
          ),
        };
        case "ADD_MOVIE_TO_WATCHED":
        return {
          ...state,
          watched: [action.payload, ...state.watched],
        };
      case "REMOVE_MOVIE_FROM_WATCHED":
        return {
          ...state,
          watched: state.watched.filter(
            (movie) => movie.id !== action.payload
          ),
        };
        case "ADD_TO_FAVORITE":
        return {
          ...state,
          favorite: [action.payload, ...state.favorite],
        };
      case "REMOVE_MOVIE_FROM_FAVORITE":
        return {
          ...state,
          favorite: state.favorite.filter(
            (movie) => movie.id !== action.payload
          ),
        };
    
      default:
        return state;
    }
  };