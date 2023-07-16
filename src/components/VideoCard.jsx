import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {

    console.log(videoId, snippet)

  return (
    <Card
      sx={{
        width: {xs: '100%', sm: '360px', md: '250px', lg: '290px', xl: '320px'},
        boxShadow: 'none',
        borderRadius: '5px'
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {xs: '100%', sm: '360px', md: '250px', lg: '290px', xl: '320px'},
            height: {xs: '165px', sm: '200px', md: '140px', lg: '165px', xl: '180px'}
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: '#1e1e1e',
          height: '106px'
        }}
      >
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <Typography 
            variant='subtitle1'
            fontWeight='bold'
            color="#fff"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant='subtitle2'
            fontWeight='bold'
            color="grey"
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle 
              sx={{
                fontSize: '15px',
                ml: '4px',
                color: 'grey'
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard