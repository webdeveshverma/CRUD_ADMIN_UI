import { Box, Typography, styled } from '@mui/material';
import NavBar from './NavBar';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const TheWebpatriot = () => {

    return (
        <>
       <NavBar/>
        <Header>
            <Typography variant="h4">The WebPatriot</Typography>
            <Box style={{ display: 'flex', border: ' 2px solid red' }}>

            </Box>
            <Box style={{ display: 'flex', border: ' 2px solid red' }}>
                <img src="https://thewebpatriot.com/wp-content/uploads/2019/12/logo.png" alt='image' />
            </Box>

            

        </Header>
        </>
    )
}

export default TheWebpatriot;