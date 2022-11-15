import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    gender: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
    }`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, lastname, email, phone, gender } = user;
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);


    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);



    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        console.log(response)
        navigate('/home/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">LastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>

            <FormControl>

                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  >

                    <FormControlLabel value="Female" control={<Radio checked={gender === "Female"} />} label="Female"
                        onClick={(e) => onValueChange(e)}
                        name="gender"
                        id="my-input"
                        values={gender} />

                    <FormControlLabel value="Male" control={<Radio checked={gender === "Male"} />} label="Male"
                        onClick={(e) => onValueChange(e)}
                        name="gender"
                        id="my-input"
                        values={gender}
                    />
                    <FormControlLabel value="Other" control={<Radio checked={gender === "Other"} />} label="Other"
                        onClick={(e) => onValueChange(e)}
                        name="gender"
                        id="my-input"
                        values={gender}
                    />

                </RadioGroup>


            </FormControl>


            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;