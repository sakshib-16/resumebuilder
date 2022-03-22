import React from 'react'
import { Certificates } from '../Details/Certificates'
import { Education } from '../Details/Education'
import { Experience } from '../Details/Experience'
import { PersonalDetails } from '../Details/PersonalDetails'
import { Sidebar } from '../Details/Sidebar/Sidebar'
import { Wrapper } from '../Details/Wrapper/Wrapper'
import classes from './Layout.module.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from '../Navigation/Navigation'

export const Layout = () => {
    return (
        <>
         <Navigation/>

        <div className={classes.wrapper}>
            
            <Sidebar /> 
            <Wrapper />
             
            </div> 
              
          
                
            </>
  )
}
