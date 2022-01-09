import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  list: localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [],
  watched: localStorage.getItem("watched")
  ? JSON.parse(localStorage.getItem("watched"))
  : [],
   favorite:localStorage.getItem("favorite")
   ? JSON.parse(localStorage.getItem("favorite"))
   : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.list));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("favorite", JSON.stringify(state.favorite));
  }, [state]);

  // actions
  const addMovieTolist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIST", payload: movie });
  };

  const removeMovieFromlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_LIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  const addMovieToFavorite = (movie) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: movie });
  };

  const removeMovieFromFavorite = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITE", payload: id });
  };

  

  return (
    <GlobalContext.Provider
      value={{
        list: state.list,
         watched: state.watched,
         favorite: state.favorite,
         addMovieTolist,
         removeMovieFromlist,
         addMovieToWatched,
         removeMovieFromWatched,
         addMovieToFavorite,
         removeMovieFromFavorite
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};