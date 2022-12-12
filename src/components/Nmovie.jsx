import React from 'react';
const Movie =props=> {
    const {mdelete,name,id,genre,length,changeHeart,heart}=props;
        return (
            <React.Fragment>
            <td className="table-success"> {name} </td>
            <td className="table-success"> {id}</td>  
            <td className="table-success"> {genre}</td> 
            <td className="table-success"> {length}</td>
            <td className="table-success"><i onClick={()=>changeHeart(id)} className={heart}></i></td>
            <td className="table-success"> <button className="btn btn-outline-success" onClick={()=>mdelete(id)}>Delete</button></td>
            </React.Fragment>
        );
    }

 
export default Movie;
