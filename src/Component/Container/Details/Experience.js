import React,{useState} from 'react';
import classes from './Detail.module.css'
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import { Submit } from './Submit/Submit';
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Experience = () => {

  let navigate = useNavigate();

  const [experience, setExperience] = useState({})
  const [dates, setDate] = useState(new Date());

  const [userid,setUserId] =useState('')


  //getting uid
  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid)
    setUserId(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

  // const handleChange = (e) => {
  //  // console.log(date)
  //   var check = moment(e,'DD-MM-YYYY');
  //   var month = check.format('MM') // => ('January','February.....)
  //   setDate(month)
  //   setExperience({ ...experience, setDate: moment(e,'DD-MM-YYYY').format('YYYY')})
  // console.log(experience)
  // }
  
  const Push = async (e) => {
    e.preventDefault();
    const { exjobtitle,company,monthfrom,yearfrom,monthto,yearto,accomplishment } = experience;
    const res = await fetch(
      `https://resume-builder-dad7c-default-rtdb.firebaseio.com/container${userid}/experience.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         exjobtitle,company,monthfrom,yearfrom,monthto,yearto,accomplishment
        })
      }
    )

    if (res) {
      console.log("resposne")
      console.log(monthfrom)
      // return <Navigate to="/" replace />
       navigate(`/layout/education`);
    }
    else {
        console.log("Please fill form")
    }
  }   
  
  return (
       <div className={classes.container}>
      <h1>Experience</h1>
      <div className={classes.borderBox}>
        
        <h2><AddIcon className={ classes.addIcon}/> Add Experience</h2>
      </div>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" id="exjobtitle" name="exjobtitle" placeholder="Job Title"
            onChange={(e) => setExperience({ ...experience, exjobtitle: e.target.value }) }/>
          <input type="text" id="company" name="company" placeholder="Company or Project"
            onChange={(e) => setExperience({ ...experience, company: e.target.value }) }/>
           
          <div className={classes.calender}>
            <div className={classes.disFlex}>
              <div className={classes.coverDiv}>
                <Datetime dateFormat="MM" timeFormat={false} renderYear={false} closeOnSelect
                 inputProps={{ placeholder: "Month" }} 
                onChange={(e) => setExperience({ ...experience, monthfrom: moment(e,'DD-MM-YYYY').format('MM')})
            }/> 

                <span><ArrowDropDownIcon className={classes.arrowIcon} /></span>
                </div>
              
              <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false}
                closeOnSelect inputProps={{ placeholder: "Year" }} name="yearfrom"
                onChange={(e) => setExperience({ ...experience, yearfrom: moment(e, 'DD-MM-YYYY').format('YYYY') })}
              />
                <div><ArrowDropDownIcon className={classes.arrowIcon} /></div>   
                </div>
             <div className={classes.ruleIcon}><HorizontalRuleIcon  style={{ fontSize: 10 }}/></div>
            
               
            <div className={classes.disFlex}>
               <div className={classes.coverDiv}>
                <Datetime dateFormat="MM" timeFormat={false} renderYear={false}
                  closeOnSelect inputProps={{ placeholder: "Month" }} name="monthto"
                  onChange={(e) => setExperience({ ...experience, monthto: moment(e,'DD-MM-YYYY').format('MM')}) }/>
              <div><ArrowDropDownIcon className={classes.arrowIcon} /></div> 
             </div>
              
              <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false}
                closeOnSelect inputProps={{ placeholder: "Year" }} name="yearto"
               onChange={(e) => setExperience({ ...experience, yearto: moment(e,'DD-MM-YYYY').format('YYYY')}) }/>

               <div><ArrowDropDownIcon className={ classes.arrowIcon}/></div> 
              </div>
            
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1"> Currently Working here</label>
          </div>
        
          <input type="text" id="accomplishments" name="accomplishment" placeholder="Accomplishments"
          onChange={(e) => setExperience({ ...experience, accomplishment: e.target.value }) }/>
        
          <Submit click={Push}/>
    </div>
    </div>
</div>
  )
}
