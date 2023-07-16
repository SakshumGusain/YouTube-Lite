import { Box, CardContent, CardMedia, Typography } from '@mui/material'

import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => (
    <Box
      sx={{
        backgroundColor: "transparent",
        boxShadow: 'none',
        borderRadius: '20px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: '336px', md: '330px'},
        margin: 'auto',
        height: '326px',
        marginTop: marginTop,
     }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`} >
        <CardContent
          sx={{
            backgroundColor: "transparent",
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid'
            }}
          />
          <Typography
            variant='subtitle1'
            fontWeight='bold'
          >
            {channelDetail?.snippet?.title}
            <CheckCircle 
              sx={{
                height: 13,
                ml: '4px',
                color: 'grey'
              }}
            />
          </Typography>
          
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}  

        </CardContent>
      </Link>
    </Box>
  )

export default ChannelCard