

import React,{useState,useEffect} from 'react';
import { useFirestore } from 'react-redux-firebase';
import {useHistory, useParams } from 'react-router-dom';

export default function StudentForm() {
  const firestore= useFirestore();
  const {id} =useParams();
  const docRef=id ? firestore.collection("studentdatabase").doc(id) : null;
  const history=useHistory();
  const [student,setStudent] =useState({
             name:"",
             email:"",
             phone:"",
             standard:"",
             address1:"",
             address2:""

  });
    const {name, email, phone, standard, address1, address2 }=student;

    const onInputChange=e=> {
    setStudent({...student,[e.target.name] : e.target.value});
    }
    useEffect(()=>{
      if(id){
        loadstudent();
      }
    },[]);
    
  const loadstudent=async ()=>{

    try{         
      const res=await docRef.get();
      if(res.exists){
        setStudent(res.data());
      }
      else{
        console.log("data not found");
      }
    }
    catch(error){
      console.log("error :", error);
    }
         
  }

   const submitForm=async e=>{
     e.preventDefault();
     console.log(address2);
     if(id){
      await docRef.update({...student, updateddAt: firestore.FieldValue.serverTimestamp()})
     }else{
       firestore.collection("studentdatabase").add({...student, createdAt: firestore.FieldValue.serverTimestamp()})
     }
     history.push("/")
   }

  return (
    <div>
      <div className="container">
  <div className="py-4">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="card card-body shadow">
          <form onSubmit={submitForm}>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Enter Student E-mail"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Phone"
                  name="phone"
                  value={phone}
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Class"
                  name="standard"
                  value={standard}
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form-row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Address Line 1"
                  name="address1"
                  value={address1}
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Line 2"
                  name="address2"
                  value={address2}
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              {
                id ? "UPDATE STUDENT" :"ADD STUDENT"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
