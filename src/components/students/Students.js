

import React from 'react'
import {NavLink} from 'react-router-dom';
import Avatar from '../layout/Avatar';
import { useFirestore } from 'react-redux-firebase';
import {useFirestoreConnect} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import Loading from '../layout/Loading';

function Students() {
 const students=useSelector((state) => state.firestore.ordered.studentdatabase);
 const firestore= useFirestore();
 console.log(students);

  useFirestoreConnect([
         {
           collection:"studentdatabase",
           orderBy: ["createdAt", "desc"]
         }
       ]);

       if(!students){
         return <Loading />
       }

       const deleteStudent=async id=>{
       
        try {
          await firestore.collection("studentdatabase").doc(id).delete();
                        
              }
      catch(error){
            console.log("error:", error);
              }
       }
  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
             {
              //  new  Array(12).fill("").map((item, index) => (
               students.map((student) => (
                <div className="col-lg-3 col-md-6 mb-4" key={student.id}>
                <div className="card shadow text-center py-4">
                
                 <Avatar url={`https://i.pravatar.cc/150?img=${student.id}`} />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{student.name}</h5>
                    <p className="text-muted small">{student.email}</p>
                    <NavLink to={`/student/${student.id}`} className="btn btn-primary btn-profile">
                      View Profile
                    </NavLink>
                    <button className="btn btn-edit">
                      <span className="material-icons" onClick={() =>deleteStudent(student.id)}>delete_outline</span>
                    </button>
                  </div>
                </div>
              </div>
               ))
             }
        </div>
      </div>
    </div>
  )
}

export default Students
