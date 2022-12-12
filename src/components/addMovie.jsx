import React from 'react';
import { Link } from "react-router-dom";
import {useFormik} from 'formik';

const AddMovie = props => {
     const {onSubmit}=props;
     const formik= useFormik({
        initialValues:{
            name:"",        
            genre:"",
            length:"",
           
            
        }
        
    });
        return (
    <div className='bg-dark gradient'>
        <div class="text-bg-success p-4 rounded inputs">
            <form onSubmit={(e)=>{onSubmit(e,formik)}}>
                 
                
                <div className="mb-3">
                    <label for="inputName" class="form-label">Movie name:</label>
                    <input placeholder="Names begin with a capital letter" pattern={"[A-Z][a-z]"} onChange={formik.handleChange} name='name' type="text" class="form-control" id="inputName" required></input>
                   
                </div>

                <div className="mb-3">
                    <label for="inputDrama" class="form-label">Movie genre:</label>
                    <input placeholder='Please enter one of the following: "Horror","Comedy","Fantasy" or "Drama"' pattern={"Horror|Comedy|Drama|Fantasy"} onChange={formik.handleChange} name='genre' type="text" class="form-control" id="inputDrama" required></input>
                </div>
                <div className="mb-3">
                    <label for="inputLength" class="form-label">Movie length:</label>
                    <input onChange={formik.handleChange} name='length' type="number" class="form-control" id="inputLength" required></input>
                </div>
                 <button className='btn btn-primary m-2'><Link className="text-decoration-none addm"  to="/">Get me back</Link></button>
                

                <button  type="submit" className="btn btn-primary">Submit</button>  

                </form>
        </div>
    </div>    
        );
    }



export default AddMovie;
