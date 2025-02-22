import Box from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'

export interface HeadlineProps {
  headLine: string
  subHeadline: string
  headingTag?: TypographyProps['variant']
}

const Headline = ({ headLine, subHeadline, headingTag = 'h1' }: HeadlineProps): JSX.Element => {
  return (
    <Box>
      <Box>
        <Typography variant={headingTag}>
          {headLine}
          <Typography
            variant='inherit'
            component='span'
            color={'primary'}
            fontWeight={700}
            sx={{ marginTop: 3, display: 'block' }}
          >
            {subHeadline}
          </Typography>
        </Typography>
      </Box>
    </Box>
  )
}

export default Headline
