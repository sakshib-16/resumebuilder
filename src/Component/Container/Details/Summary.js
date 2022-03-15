import React from 'react'

export const Summary = () => {
  return (
    <div className={classes.container}>
                <h1>Summary</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" placeholder="Your Professional  Summary" />
         
          <div className={(classes.row,classes.btn)}>
          <input type="submit" value="Submit" />
          </div>
    </div>
    </div>
</div>
  )
}
