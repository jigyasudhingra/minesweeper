import { useTheme, useMediaQuery as muiUseMediaQuery } from '@mui/material'

const MediaQuery = () => {
  const theme = useTheme()
  const isDeviceSm = muiUseMediaQuery(theme.breakpoints.down('sm'))
  const isDeviceLg = muiUseMediaQuery(theme.breakpoints.up('md'))
  const isDeviceMd = !isDeviceLg

  return { isDeviceSm, isDeviceLg, isDeviceMd }
}

export default MediaQuery
