import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber]= useState("");
    const {id}=useParams();
    const contacts=useSelector((state)=>state)
    const currentContact=contacts.find(contact=>contact.id===parseInt(id));
    
    const dispatch=useDispatch();
    const navigate=useNavigate()
  
    const handleSubmit=e=>{
        e.preventDefault();
        const echeckNumber=contacts.find(contact=> contact.id !== parseInt(id) && contact.number===parseInt(number));
        if(echeckNumber){
            return toast.error("This Number already exists!!")
        }
        
        if(!name || !email || !number){
            return toast.warning("Please Fill All Input Fields!!")
        }

        const data={
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({type: "UPDATE_CONTACT", payload: data})
        toast.success("Student Updated Successfully!!")
        navigate("/")
    }

useEffect(() => {
  if(currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
  }
}, [])

    return (
        <div className='container'>
            {currentContact ? (
            <div className='row'>
                <h1 className='display-3 text-center'> Edit Student {id} </h1>
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
                            <input type="submit" value="Update Student" className='btn btn-dark'/>
                            <Link to="/" className='btn btn-danger ml-3'> Cancel </Link>
                        </div>
                    </form>
                </div>
           </div>
            ):( <h1 className='display-3 text-center'> Student {id} not Valid </h1>
            )}
        
     </div>
    );
};

export default EditContact;