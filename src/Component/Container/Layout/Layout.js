import React from 'react'
import { Certificates } from '../Details/Certificates'
import { Education } from '../Details/Education'
import { Experience } from '../Details/Experience'
import { PersonalDetails } from '../Details/PersonalDetails'
import { Sidebar } from '../Details/Sidebar/Sidebar'
import classes from './Layout.module.css'

export const Layout = () => {
    return (
        <>
            
    <div className={classes.wrapper}>
                <Sidebar />
                {/* <Experience/> */}
          {/* <PersonalDetails /> */}
                {/* <Certificates/> */}
                <Education/>
            </div>
            </>
  )
}
