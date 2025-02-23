'use client'

import Container from '@/components/Container'
import CardItem from '@/shareComponents/CardItem'
import ImageCard from '@/shareComponents/ImageCard'
import { Box, Grid, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

interface TitleComponentItem {
  author: string
  review: string
  date: string
  imageUrl: string
}
interface TitleComponentProps {
  title: string
  text: string
  reviews: TitleComponentItem[]
  footer: string
}

const TitleComponent = ({ title, text, reviews, footer }: TitleComponentProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const newCardItem = reviews.map((item, index) => {
    return {
      ...item,
      imageUrl: `/images/section7_${index + 1}.png`
    }
  })
  return (
    <Container>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Grid container spacing={isMobile ? 2 : 4} alignItems='stretch' direction={isMobile ? 'rlt' : 'row'}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              order: isMobile ? 2 : 1
            }}
          >
            <Typography variant='h2' sx={{ fontWeight: 'bold', mb: 2 }}>
              {title}{' '}
              <Typography component='span' sx={{ color: '#E86A33' }}>
                #BASIC
              </Typography>
            </Typography>
            <Typography variant='body1' sx={{ color: '#aaa' }}>
              {text}
            </Typography>
          </Grid>
        </Grid>

        <ImageCard
          imageUrl='/images/banner_section7.png'
          title={reviews[0].author}
          description={reviews[0].review}
          date={reviews[0].date}
        />

        <Grid container spacing={2} justifyContent='center' sx={{ mb: 3 }}>
          {newCardItem.map((item, index) => (
            <Grid item key={index} xs={6} sm={4} md={3}>
              <CardItem {...item} />
            </Grid>
          ))}
        </Grid>

        <Typography variant='body2'>{footer}</Typography>
      </Box>
    </Container>
  )
}

// Mock data example
export const mockDataExample = {
  introText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  title: 'IMMORTALISEZ DES MOMENTS INOUBLIABLES AVEC',
  hashtag: '#BASIC',
  mainImage: '/images/banner_section7.png',
  caption: {
    title: 'La famille',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  date: '24 Sep 2024',
  avatars: [
    { imageUrl: '/images/section7_1.png', author: 'Anthony Durand' },
    { imageUrl: '/images/section7_2.png', author: 'Anthony Durand' },
    { imageUrl: '/images/section7_3.png', author: 'Anthony Durand' },
    { imageUrl: '/images/section7_4.png', author: 'Anthony Durand' }
  ]
}

export default TitleComponent
