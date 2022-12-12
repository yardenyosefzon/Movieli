const SideBarButton = props => {
    const {key,id,text,changeGenre,movieNum,genre}=props;
    return (  
    
       <button onClick={()=>changeGenre(text)} key={key} id={id} genre={genre} type="button" className="btn btn-success btn-lg" >
        {text}  <span class="badge bg-succes">{movieNum(text)}</span>
       </button>
    
    );
}
 
export default SideBarButton;