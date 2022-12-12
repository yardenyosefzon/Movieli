import React from 'react';
import "../movies.css";
import Table from './table';
import SideBar from './sideBar';
import logo from '../images/logo.png'
import PageMenu from './pageMenuBar';
import { Link } from 'react-router-dom';

const AppGrid= props =>  {
       const {buttons,movieArr,tempMoviesInput,pageMenuBarLength,genre,sliceStart, sliceEnd
    ,changeGenre,deleteMovie, changeHeart,movieGenreNum,moviesDispaly,changeMoviesInput,changeBarIndex}=props;
        return (
            
        <div className='s m-0 '>    

            <div className='row r1 mb-4 border border-success border-3 rounded-1' >

                <div className='col '>
                
                    <div className='row'>

                        <div className='col-4 p-0 f'>
                            <img id='logo' src={logo}/>
                        </div>

                        <div className='col-3 pt-4 '>
                        <Link className='text-decoration-none fs-1 fw-bold' to={"/addmovie"}> Add movie</Link>
                        </div>

                        <div className='col-5 pt-5 '>
                        <label className='fs-5 fw-bold' htmlFor="">Number of movies to display</label>
                        <button onClick={()=>moviesDispaly(1)}>Enter</button>    
                        <input onChange={(e)=>changeMoviesInput(e)} type="text" value={tempMoviesInput} />
                        </div>

                    </div>
                </div>
            </div>

            <div className='row r2' id='side' >

                <div className='col-2 p-0 sidebar'><SideBar changeGenre={(text)=>changeGenre(text)} buttons={buttons} movieNum={(genre)=>movieGenreNum(genre)}/></div>

                <div className='col-10'>

                    <div className='row'>

                        <div className='col  p-0'><Table mdelete={(id)=>deleteMovie(id)} arr={movieArr} changeHeart={(id)=>changeHeart(id)} genre={genre} start={sliceStart} end={sliceEnd} /></div>

                    </div>

                    <div className='row'>

                            <div className='col'>
                                
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

                                <div className="btn-group me-2 m-2" role="group" aria-label="First group">
                            
                                    <PageMenu arr={movieArr} changeBarIndex={(id)=>changeBarIndex(id)} pageMenuBarLength={pageMenuBarLength} />
                                
                                </div>  
                                </div>

                            </div>
                    </div>
                </div>
            </div>

        </div>    
        );
    }
    

export default AppGrid;
