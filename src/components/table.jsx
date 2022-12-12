import Movie from './Nmovie';

const Table =props=> {
   const {arr,mdelete,changeHeart,heartRead,genre,start,end}=props;

        return (

            <table className="table">
  
                <thead>
                    <tr>
                    <th className='pt-0'>Name</th>
                    <th>ID</th>
                    <th>Genre</th>
                    <th>Length</th>
                    </tr>
                </thead>

                <tbody >
                    
                   { arr.filter(movie=>genre=='All'?movie:movie.genre===genre).slice(start,end).length==0?<h1>Nothing to see here</h1>: arr.filter(movie=>genre=='All'?movie:movie.genre===genre).slice(start,end).map(movie=><tr className="border border-success"><Movie name={movie.name} id={movie.id} genre={movie.genre} length={movie.length} mdelete={(id)=>mdelete(id)} heart={movie.heart} changeHeart={(id)=>changeHeart(id)} heartRead={()=>heartRead()} /></tr>)}
                
                </tbody>

            </table>

        );
    }
   
export default Table;


   

