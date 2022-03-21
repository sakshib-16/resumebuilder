import React, { useEffect } from 'react'
import { Experience } from '../Experience'
import { Education } from '../Education'
import { Skills } from '../Skills'
import { Certificates } from '../Certificates'
import { Languages } from '../Languages'
import {Summary } from '../Summary'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from '@mui/icons-material'
import { PersonalDetails } from '../PersonalDetails'
import { getDatabase, ref, set } from "firebase/database";
import db from '../../../../Firebase/Firebase';


export const Wrapper = () => {
  const ed = {
    name: "harry",
    school:"jj"
  }
  // useEffect(() => {
  // function writeUserData() {
  // // const db = getDatabase();
  // set(ref(db, 'users/' + userId),ed
    
  //     );
  //   }
  //   writeUserData();
  //   })
    
  return (
          <Routes>
          <Route path="/*" element={<PersonalDetails/>} /> 
          <Route path="/experience" element={<Experience/>} /> 
          <Route path="/education" element={<Education/>} /> 
          <Route path="/skills" element={<Skills/>} /> 
          <Route path="/certificates" element={<Certificates/>} /> 
           <Route path="/languages" element={<Languages/>} /> 
          <Route path="/summary" element={<Summary/>} />   
      </Routes>
         
  )
}
