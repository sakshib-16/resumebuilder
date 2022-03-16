import React from 'react'

export const Languages = () => {
  return (
   <div className={classes.container}>
                <h1>Languages</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" placeholder="Languages (E.g. English, Hindi)" />
         
          <div className={(classes.row,classes.btn)}>
          <input type="submit" value="Submit" />
          </div>
    </div>
    </div>
</div>
  )
}
