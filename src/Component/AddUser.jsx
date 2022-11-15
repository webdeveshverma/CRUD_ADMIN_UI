import { useState } from "react";
import { useForm } from 'react-hook-form';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


const Container = styled(FormGroup)`
    width: 30%;
    & > div {
        margin-top: 20px;
    }
    & >span{
      color:red;
    } & >RadioGroup>span{
      color:red;
    }
    margin:auto;
`;







const AddUser = () => {

  let navigate = useNavigate();


  const { register, handleSubmit,
    formState: { errors },
  } = useForm();

  const validEmail=(email)=>{
    
  }


  const onsubmit = async (data) => {
  try{
    await addUser(data);
    alert("Ragister Successfully");
    navigate("/home/all");
  }
  catch(error){
     alert(error.message)
  }
  }




  return (
        // complete form section
      <div>
        <NavBar/>
        <form onSubmit={handleSubmit(onsubmit)} noValidate="">
        <Container className="Container_Main">
          <Typography variant="h4">Add User +</Typography>

        <Input placeholder="Name"
          {...register('name', { required: true })} />
        <span>{errors.name && "*required Name."}</span>
        
        <Input placeholder="Lastname"
          {...register('lastname', { required: true })} />
        <span>{errors.lastname && "*required lastname."}</span>

        <Input placeholder="Email" 
          {...register('email', { required: true })} />
        <span>{errors.email && "*required email"}</span>
        

        <Input placeholder="Phone" 
        {...register('phone',{ required: true })} />
        <span>{errors.phone && "*required phone no. "}</span>

        <InputLabel htmlFor="my-input">Gender</InputLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  >

          <FormControlLabel required="true" value="Female" control={<Radio />} label="Female"
            gender="Male"
            {...register('gender', { required: true })}
          />

          <FormControlLabel required="true" value="Male" control={<Radio />} label="Male"
            gender="Female"
          {...register('gender', { required: true })}
          />

          <FormControlLabel required="true" value="Other" control={<Radio />} label="Other"
          gender="Other"
            {...register('gender', { required: true })}
          />

        </RadioGroup>

        <span>{errors.gender && "*Required gender "}</span>
        <br />
        <FormControl>
          <Button
            type="submit"
            variant="contained"
          >
            Add User
          </Button>
        </FormControl>

      </Container>
    </form>
      </div>
  );
};

export default AddUser;
