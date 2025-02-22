'use client'

import { Box, Card, CardContent, Chip, Typography } from '@mui/material'
import Image from 'next/image'

interface ImageCardProps {
  imageUrl: string
  title: string
  description: string
  date: string
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, description, date }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F2F2', // Màu nền nhẹ
        padding: 4,
        borderRadius: '20px',
        marginBottom: '30px'
      }}
    >
      <Card
        sx={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          width: '80%',
          maxWidth: '800px',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Hình ảnh */}
        <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
          <Image
            src={imageUrl}
            alt={title}
            layout='fill'
            objectFit='cover'
            sizes='(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 60vw'
          />
        </Box>

        {/* Nội dung overlay */}
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: 2,
            borderRadius: '0 0 20px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'left'
          }}
        >
          <Box
            sx={{
              display: 'block',
              // justifyContent: 'left',
              textAlign: 'left'
            }}
          >
            <Typography variant='subtitle1' fontWeight='bold'>
              {title}
            </Typography>
            <Typography variant='body2'>{description}</Typography>
          </Box>
          <Chip
            label={date}
            sx={{
              backgroundColor: 'white',
              borderRadius: '20px',
              paddingX: 1.5,
              fontWeight: 'bold',
              boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
            }}
          />
        </CardContent>
      </Card>
    </Box>
  )
}

export default ImageCard
