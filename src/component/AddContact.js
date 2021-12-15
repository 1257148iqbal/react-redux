import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber]= useState("");
    
    const contacts=useSelector((state)=>state);
    const dispatch=useDispatch();
    const navigate=useNavigate()
  
    const handleSubmit=e=>{
        e.preventDefault();

        const echeckEmail=contacts.find(contact=> contact.email===email && contact);
        const echeckNumber=contacts.find(contact=> contact.number===parseInt(number));
        
        if(!name || !email || !number){
            return toast.warning("Please Fill All Input Fields!!")
        }

        if(echeckEmail){
            return toast.error("This Email already exists!!")
        }
        if(echeckNumber){
            return toast.error("This Number already exists!!")
        }

        const data={
            id: contacts[contacts.length -1].id+1,
            name,
            email,
            number
        }
        dispatch({type: "ADD_CONTACT", payload: data})
        toast.success("Student Added Successfully!!")
        navigate("/")
    }

    return (
        <div className='container'>
           <div className='row'>
                <h1 className='display-3 text-center'> Add Student </h1>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div> <br/>
                        <div className='form-group'>
                            <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div> <br/>
                        <div className='form-group'>
                            <input type="number" placeholder="Phone Number" className="form-control" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                        </div> <br/>
                        <div className='form-group'>
                            <input type="submit" value="Add Student" className='btn btn-block btn-dark'/>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    );
};

export default AddContact;