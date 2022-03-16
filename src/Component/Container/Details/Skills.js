import React from 'react'

export const Skills = () => {
  return (
    <div className={classes.container}>
                <h1>Skills</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" placeholder="Skills (E.g. Design, React, MySQL)" />
         
            <div className={(classes.row,classes.btn)}>
            <div className={classes.submitBtn}>Submit
                 <ArrowForwardIcon/> 
            </div>  
          </div>
    </div>
    </div>
</div>
  )
}
