import React, {useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GlobalContext } from '../../context/GlobalState';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {
 
    const [item, setItem] = useState(null);

   const {addMovieTolist, addMovieToWatched, addMovieToFavorite, list} = useContext(GlobalContext);

   let storedMovie = list.find((o) => o === item);
 

 

  const watchlistDisabled = storedMovie ? true : false;

    const { category, id } = useParams();

    

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id]);

    

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    
                                    {item.title || item.name} 
                                </h1>
                               
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <div >
                                    <h3>Ratings</h3>
                                    <h4>{item.vote_average} / 10</h4>
                                    <br></br>

                                <div className="parent">
                                  <h3>Collections</h3>
                                     <div className="list" >
                                        <FormatListBulletedRoundedIcon  disabled={watchlistDisabled} onClick={() => addMovieTolist(item)} />
                                     </div>
                                     <div className="list">
                                        <FavoriteRoundedIcon onClick={() => addMovieToFavorite(item)} />
                                     </div>
                                     <div className="list">
                                        <BookmarkRoundedIcon onClick={() => addMovieToWatched(item)} />
                                     </div>    
                                 </div>                             
                         </div>
                               

                          <h3> OverView </h3>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;
