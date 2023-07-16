import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])
  

  return (
    <Box
      minHeight='95vh'
      backgroundColor='black'
    >
      <Box>
        <div 
          style={{
            background: 'radial-gradient(circle, rgba(62,73,128,1) 0%, rgba(43,6,6,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-115px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto'
          }}
        >
          <Videos videos={[videos]} />
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail