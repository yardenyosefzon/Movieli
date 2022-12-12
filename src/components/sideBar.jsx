import SideBarButton from "./sideBarButton";

const SideBar = props => {
    const {buttons,changeGenre,movieNum}=props;    
    return ( 
               
        <div className="d-grid gap-2 p-3" role="group" aria-label="Vertical button group">
            {buttons.map(button=><SideBarButton key={button.key} id={button.id} text={button.text} changeGenre={(text)=>changeGenre(text)} movieNum={(genre)=>movieNum(genre)}/>)}
        </div>
     );
}
 
export default SideBar;