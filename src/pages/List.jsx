import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import apiConfig from '../api/apiConfig';
import './detail2.scss';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { makeStyles } from '@material-ui/styles';
import Button from '../components/button/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        '& svg': {
            fontSize: 100,
            marginLeft: 600,
            justifyContent: 'center',
            alignItem: 'center',
            color: 'red'
               
        }
    }
}))

const List = () => {
    
    const classes = useStyles();

    const {list, removeMovieFromlist} = useContext(GlobalContext);

    return (
        <div>
        
           <Button>
            {list.length} {list.length === 1 ? "Movie" : "Movies"}
          </Button>
      

           {list.map((movie) => (
               
         <div className="mb-3 movie-content container">
             
            <div className="movie-content__poster">
           
                <div className="movie-content__poster__img"  style={{ backgroundImage: `url(${apiConfig.originalImage(movie.poster_path || movie.backdrop_path)})`} }> 
               
                 <div className={classes.btn}>
                   <DeleteRoundedIcon onClick={() => removeMovieFromlist(movie.id)} />
                </div>
                </div>
            </div>
         </div>
            ))}
        </div>
    )
}

export default List;
