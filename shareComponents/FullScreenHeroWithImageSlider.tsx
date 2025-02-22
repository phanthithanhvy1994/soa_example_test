import { Chat, GpsFixed, Image, RotateLeft } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

interface FullScreenHeroProps {
  src?: string
  alt?: string
  priority?: boolean
  bgColor?: string
}

const FullScreenHeroWithImageSlider = ({ src, priority, alt, bgColor }: FullScreenHeroProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        position: 'relative',
        '& video': {
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        }
      }}
    >
      <video
        src={'/images/banner.mov'}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Menu Icons */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 3,
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '8px 16px',
          borderRadius: '8px'
        }}
      >
        <IconButton color='primary'>
          <Image />
        </IconButton>
        <IconButton color='primary'>
          <RotateLeft />
        </IconButton>
        <IconButton color='primary'>
          <GpsFixed />
        </IconButton>
      </Box>

      {/* Chatbox Button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          background: 'red',
          borderRadius: '50%',
          padding: 1
        }}
      >
        <IconButton color='inherit'>
          <Chat />
        </IconButton>
      </Box>
    </Box>
  )
}

export default FullScreenHeroWithImageSlider
