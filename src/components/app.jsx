import React, { Component } from 'react';
import AppGrid from './grid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovie from './addMovie';


class MoviesApp extends Component {

    state={
        
           buttons:[
            {key:0,id:0,text:'All'},
            {key:1,id:1,text:'Action'},
            {key:2,id:2,text:'Comedy'},
            {key:3,id:3,text:'Drama'},
            {key:4,id:4,text:'Fantasy'},
            {key:5,id:5,text:'Horror'}],

           movieArr:[
               {name:'Indiana Jones and the Dial of Destiny',id:0,genre:'Action',length:3,heart:'bi bi-heart'},
               {name:'Avatar: The Way of Water',id:1,genre:'Action',length:2,heart:'bi bi-heart'},
               {name:' Black Adam',id:2,genre:'Action',length:2,heart:'bi bi-heart'},
               {name:' SAS Rogue Heroes',id:3,genre:'Action',length:2,heart:'bi bi-heart'},
               {name:' Emancipation',id:4,genre:'Action',length:2,heart:'bi bi-heart'},
               {name:'Shrek',id:5,genre:'Comedy',length:2,heart:'bi bi-heart'},
               {name:'Bug life',id:6,genre:'Comedy',length:6,heart:'bi bi-heart'},
               {name:'Sponge-bob the movie',id:7,genre:'Comedy',length:2,heart:'bi bi-heart'},
               {name:'Grownups',id:8,genre:'Comedy',length:2,heart:'bi bi-heart'},
               {name:'Borat',id:9,genre:'Comedy',length:2,heart:'bi bi-heart'},
               {name:'TODA',id:10,genre:'Drama',length:4,heart:'bi bi-heart'},
               {name:' The Swimmers',id:11,genre:'Drama',length:4,heart:'bi bi-heart'},
               {name:' The Fabelmans ',id:12,genre:'Drama',length:2,heart:'bi bi-heart'},
               {name:' The Whale',id:13,genre:'Drama',length:2,heart:'bi bi-heart'},
               {name:'She Said',id:14,genre:'Drama',length:7,heart:'bi bi-heart'},
               {name:' Wednesday',id:15,genre:'Fantasy',length:2,heart:'bi bi-heart'},
               {name:' Willow',id:16,genre:'Fantasy',length:2,heart:'bi bi-heart'},
               {name:' Troll',id:17,genre:'Fantasy',length:1,heart:'bi bi-heart'},
               {name:' The Addams Family',id:18,genre:'Fantasy',length:2,heart:'bi bi-heart'},
               {name:' The Santa Clauses',id:19,genre:'Fantasy',length:2,heart:'bi bi-heart'},
               {name:' The Menu',id:20,genre:'Horror',length:2,heart:'bi bi-heart'},
               {name:'The Walking Dead',id:21,genre:'Horror',length:3,heart:'bi bi-heart'},
               {name:' X ',id:22,genre:'Horror',length:2,heart:'bi bi-heart'},
               {name:' Smile',id:23,genre:'Horror',length:2,heart:'bi bi-heart'},
               {name:' Stranger Things',id:24,genre:'Horror',length:2,heart:'bi bi-heart'}],

            tempMoviesInput:'',

            moviesInput:25,
            
            pageMenuBarIndex:1,

            pageMenuBarLength:1,

            genre:'All',

            sliceStart:0,
            
            sliceEnd:25,

            idAdd:25
    

    }
    
    render() {
        return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppGrid changeGenre={(text)=>this.changeGenre(text)} deleteMovie={(id)=>this.deleteMovie(id)} changeHeart={(id)=>this.changeHeart(id)} movieGenreNum={(genre)=>this.movieGenreNum(genre)} 
                                        moviesDispaly={num=>this.moviesDispaly(num)} changeMoviesInput={(e)=>this.changeMoviesInput(e)} zeroMovieInput={this.zeroMovieInput} changeBarIndex={(id)=>this.changeBarIndex(id)}
                                        buttons={this.state.buttons} movieArr={this.state.movieArr} tempMoviesInput={this.state.tempMoviesInput} moviesInput={this.state.moviesInput}
                                        pageMenuBarIndex={this.state.pageMenuBarIndex} pageMenuBarLength={this.state.pageMenuBarLength} genre={this.state.genre} sliceStart={this.state.sliceStart}
                                        sliceEnd={this.state.sliceEnd}/>}/>
                <Route path="/addmovie" element={<AddMovie  onSubmit={(e,formik)=>this.onSubmit(e,formik)}/>} />       
            </Routes>    
                
           
        </BrowserRouter>
             
           
        );
    }
    changeGenre=(text)=>{
        this.state.pageMenuBarIndex=1;
        this.setState({pageMenuBarIndex:this.state.pageMenuBarIndex});
        this.state.genre=text;
        this.setState({genre:text});
    
        this.moviesDispaly(1);
        
    }
    deleteMovie=(id)=>{
      
    
        let arr= this.state.movieArr.filter(movie=>movie.id!=id);
        this.state.movieArr=arr;
        this.setState({movieArr:arr});
        if(((this.state.movieArr.filter(movie=>this.state.genre=='All'?movie:movie.genre===this.state.genre).slice(this.state.sliceStart,this.state.sliceEnd).length)%this.state.moviesInput==0)&&(this.state.pageMenuBarIndex==this.state.pageMenuBarLength)){
          this.state.pageMenuBarIndex=this.state.pageMenuBarIndex-1;
          this.setState({pageMenuBarIndex:this.state.pageMenuBarIndex})
        }
        this.moviesDispaly(1);
      }
      changeHeart=(id)=>{
        let movie=this.state.movieArr.find(val=>val.id==id);
       if(movie.heart=='bi bi-heart-fill'){
       movie.heart='bi bi-heart';
       this.setState({arrMovies:this.state.arrMovies});
       }
       else{
        movie.heart='bi bi-heart-fill';
       this.setState({arrMovies:this.state.arrMovies});
       }
      }
      movieGenreNum=(genre)=>{
        if (genre==='All')
        return (this.state.movieArr.length);
        else{
        let genres=this.state.movieArr.filter(movie=>movie.genre==genre);
        return (genres.length);
        }
      }
      moviesDispaly=(num=0)=>{
       
      
      if(!this.state.tempMoviesInput==''){
        if(this.state.tempMoviesInput<1)
      alert('Enter a valid number (one or bigger)');
      else{
      this.state.moviesInput=this.state.tempMoviesInput;
      this.setState({moviesInput:this.state.tempMoviesInput}); 
      this.state.pageMenuBarIndex=1;
      this.setState({pageMenuBarIndex:this.state.pageMenuBarIndex})
      }
      }
      if(num==1){
      this.state.pageMenuBarLength=Math.ceil(this.state.movieArr.filter(movie=>this.state.genre=='All'?movie:movie.genre===this.state.genre).length/this.state.moviesInput);
      this.setState({pageMenuBarLength:this.state.pageMenuBarLength});
      }
      this.state.sliceStart=((this.state.moviesInput)*(this.state.pageMenuBarIndex))-(this.state.moviesInput);
      this.state.sliceEnd=(this.state.moviesInput)*(this.state.pageMenuBarIndex);
      this.setState({sliceStart:this.state.sliceStart});
      this.setState({sliceEnd:this.state.sliceEnd});
      console.log(this.state.sliceStart,this.state.sliceEnd)
      
        
        this.zeroMovieInput()
    
      }
      changeMoviesInput=(e)=>{
        this.state.tempMoviesInput=(e.target.value);
        this.setState({tempMoviesInput:this.state.tempMoviesInput});
      }
      zeroMovieInput=()=>{
      this.state.tempMoviesInput='';
      this.setState({tempMoviesInput:''});
      }
      changeBarIndex=(id)=>{
       this.state.pageMenuBarIndex=id+1;
       this.setState({pageMenuBarIndex:this.state.pageMenuBarIndex});
       this.moviesDispaly();
      }
      
      onSubmit=(e,formik)=>{
        e.preventDefault();
        const name=(formik.values.name);
        const genre= (formik.values.genre);
        const length= (formik.values.length);
        // if(!genre=='horror'||!genre=='action'||!genre=='comedy'||!genre=='drama'||!genre=='fantasy'||
        // !genre=='Horror'||!genre=='Action'||!genre=='Comedy'||!genre=='Drama'||!genre=='Fantasy')
        // alert('Enter a valid genre name!(Horror,action,comedy,drama,fantasy)');
        this.state.movieArr.push({name:name,id:this.state.idAdd++,genre:genre,length:length,heart:'bi bi-heart'});
        this.setState({movieArr:this.state.movieArr});
        this.state.sliceEnd=this.state.movieArr.length;
        this.setState({sliceEnd:this.state.sliceEnd})
        e.target.reset();
        
        

      }

}
export default MoviesApp;

