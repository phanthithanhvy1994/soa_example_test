import { Box, Fade, useScrollTrigger } from '@mui/material'

interface Props {
  window?: () => Window
  children?: React.ReactElement<unknown>
  className?: string
}

export function ScrollTop(props: Props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor')
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      })
    }
  }

  return (
    <Fade in={trigger} timeout={300}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        className={props.className}
      >
        {children}
      </Box>
    </Fade>
  )
}
