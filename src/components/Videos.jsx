import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './index'


const Videos = ({videos, direction}) => {

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
      alignItems='center'
    >
      {
        videos[0].map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos