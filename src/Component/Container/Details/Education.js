import React from 'react'

export const Education = () => {
  return (
<div className={classes.container}>
                <h1>Experience</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" id="lname" name="lastname" placeholder="University/School" />
          <input type="text" id="lname" name="lastname" placeholder="Degree" />
        
          <input type="text" id="lname" name="lastname" placeholder="Email Address"/>
          

          <div className={(classes.row,classes.btn)}>
          <input type="submit" value="Submit" />
          </div>
    </div>
    </div>
</div>  )
}
