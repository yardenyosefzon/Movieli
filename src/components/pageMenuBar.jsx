import React from "react"
const PageMenu = props => {
    const {arr,pageMenuBarLength,changeBarIndex}=props
    return ( 

        <React.Fragment>

            {arr.slice(0,pageMenuBarLength).map((button,index)=><button onClick={()=>changeBarIndex(index)} type="button" class="btn btn-dark" id={index}>{index+1}</button>)}

        </React.Fragment>
        

     );
}
 
export default PageMenu;