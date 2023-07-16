import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { logo } from '../utils/constants.js'
 
const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{
      position: 'sticky', 
      background: '#000', 
      top: 0, 
      justifyContent: 'space-between',
      zIndex: 1
    }}
  >

    <Link to='/' style={{display: 'flex', alighItems: 'center'}}>
        <img src={logo} alt="logo" height={45} />
    </Link>

    <SearchBar />

  </Stack>
)

export default Navbar