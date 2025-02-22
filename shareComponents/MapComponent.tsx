import { Container } from '@/shareComponents'
import TitleBlock from '@/shareComponents/TitleBlock'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, IconButton, Typography } from '@mui/material'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef, useState } from 'react'
import { ImageOverlay, MapContainer, Marker, Popup, useMap } from 'react-leaflet'

const customIcon = L.icon({
  iconUrl: '/images/map_pin.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
})

const ResetButton = () => {
  const map = useMap()
  const handleReset = () =>
    map.fitBounds([
      [-90, -180],
      [90, 180]
    ])
  return (
    <IconButton onClick={handleReset} sx={{ position: 'absolute', top: 10, right: 10, bgcolor: 'white', zIndex: 1000 }}>
      <CloseIcon />
    </IconButton>
  )
}

interface Location {
  name: string
  website?: string
  address?: string
  phone?: string | string[]
  free_call?: string
  fax?: string
  email?: string
  activities?: string[]
  marker_information?: string[]
  coordinates?: {
    latitude: string
    longitude: string
  }
}

interface MapProps {
  title: string
  cases: string[]
  carte_point: Location[]
}

const ResponsiveUI = ({ title, cases, carte_point }: MapProps) => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null)
  const mapRef = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState<number | null>(null)
  const [width, setWidth] = useState<number | null>(null)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)

  useEffect(() => {
    const img = new Image()
    img.src = '/images/map.png'
    img.onload = () => {
      setWidth(img.width)
      setHeight(img.height)
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          setContainerWidth(entry.contentRect.width)
        }
      })
      resizeObserver.observe(containerRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [])

  const computedWidth = width && containerWidth ? Math.min(width, containerWidth) : '100%'

  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <TitleBlock title={title} subtitle='' />
        <Box display='flex' gap={2} justifyContent='center' py={2}>
          {cases.map(activity => (
            <Button
              key={activity}
              variant='outlined'
              sx={{
                borderRadius: '20px',
                borderColor: '#D18875',
                color: '#542E1B',
                '&:hover': { borderColor: '#A65F50', backgroundColor: '#FAF3F0' }
              }}
            >
              {activity}
            </Button>
          ))}
        </Box>
        <Box ref={containerRef}>
          {height && width && (
            <Box sx={{ width: computedWidth, position: 'relative', height: height }}>
              <MapContainer
                center={[0, 0]}
                zoom={1}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '100%' }}
                ref={mapRef}
                crs={L.CRS.Simple}
              >
                <ImageOverlay
                  url='/images/map.png'
                  bounds={[
                    [-height / 2, -width / 2],
                    [height, width]
                  ]}
                />
                {carte_point
                  .filter(point => point.coordinates)
                  .map((point, index) => (
                    <Marker
                      key={index}
                      position={[parseFloat(point.coordinates!.latitude), parseFloat(point.coordinates!.longitude)]}
                      icon={customIcon}
                      eventHandlers={{
                        click: () => setActiveLocation(point)
                      }}
                    >
                      {activeLocation?.name === point.name && (
                        <Popup>
                          <Typography variant='h6'>{point.name}</Typography>
                          {Object.entries(point).map(([key, value]) => {
                            if (key === 'coordinates' || key === 'position') return null
                            return (
                              <Typography key={key} variant='body2'>
                                <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                              </Typography>
                            )
                          })}
                        </Popup>
                      )}
                    </Marker>
                  ))}
                <ResetButton />
              </MapContainer>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default ResponsiveUI
