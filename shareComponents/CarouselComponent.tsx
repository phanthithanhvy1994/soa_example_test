import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Link } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Container from '@/components/Container'

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    aria-label='Previous slide'
    onClick={onClick}
    sx={{
      position: 'absolute',
      left: '49%',
      bottom: '-50px',
      transform: 'translateX(-100%)',
      zIndex: 2,
      backgroundColor: 'background.paper'
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>
)

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    aria-label='Next slide'
    onClick={onClick}
    sx={{
      position: 'absolute',
      bottom: '-50px',
      left: '51%',
      transform: 'translateX(0)',
      zIndex: 2,
      backgroundColor: 'background.paper'
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
)

interface CarouselComponentProps {
  title: string
  more_info: string
  cases: Carousel[]
}

interface Carousel {
  category: string
  tagline: string
  description: string
  image: string
}

const CarouselComponent = ({ title, more_info, cases }: CarouselComponentProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  }

  const newCarousel = cases.map((item, index) => ({
    ...item,
    image: item.image || `/images/Titre${index + 1}.png`
  }))

  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end', 
            alignItems: 'center',
            my: 1 
          }}
        >
          <Link
            href='#'
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              textDecoration: 'none',
              borderBottom: '1px solid #888',
              pb: '2px',
              color: 'gray',
              cursor: 'pointer',
              '&:hover': { color: 'black', borderBottom: '1px solid black' }
            }}
          >
            <Typography variant='body2'>{more_info}</Typography>
            <ArrowForwardIcon fontSize='small' />
          </Link>
        </Box>
        <Slider {...settings}>
          {newCarousel.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: 0,
                px: 1
              }}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  mx: 'auto',
                  minHeight: 400, // ✅ Cố định chiều cao của Card
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Hình ảnh */}
                <CardMedia
                  component='img'
                  height='200'
                  image={item.image}
                  alt={item.tagline}
                  sx={{ objectFit: 'cover' }} // ✅ Đảm bảo hình ảnh giữ tỉ lệ
                />

                <CardContent
                  sx={{
                    flex: 1, // ✅ Đảm bảo phần nội dung chiếm toàn bộ không gian còn lại
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Nhãn category */}
                  <Typography variant='body2' sx={{ color: '#E86A33' }}>
                    {item.category}
                  </Typography>

                  {/* Tiêu đề */}
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      minHeight: 50, //
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {item.tagline}
                  </Typography>

                  {/* Mô tả */}
                  <Typography
                    variant='body2'
                    sx={{
                      mb: 1,
                      borderLeft: '1px solid #BBBBBB',
                      paddingLeft: '10px',
                      minHeight: 60, // ✅
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}

export default CarouselComponent
