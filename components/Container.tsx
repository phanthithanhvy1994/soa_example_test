import Box from '@mui/material/Box'
import React from 'react'

interface Props {
  children: React.ReactNode
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

const Container = ({ children, ...rest }: Props): JSX.Element => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={1}
    margin={'0 auto'}
    paddingX={2}
    paddingY={{ xs: 2, sm: 4, md: 5 }}
    {...rest}
  >
    {children}
  </Box>
)

export default Container
