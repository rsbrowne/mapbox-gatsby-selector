import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const Map = () => {
  const createMap = () => {
    const zoom = 12
    const iconSize = 0.5
    const coordinates = [-2.2935023, 53.472225]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: zoom,
    })
    map.scrollZoom.disable()

    map.on('load', () => {
      map.loadImage('/pin.png', (error, image) => {
        if (error) {
          throw error
        }
        map.addImage('pin', image)
        map.addLayer({
          id: 'points',
          layout: {
            'icon-image': 'pin',
            'icon-size': iconSize,
          },
          source: {
            data: {
              features: [
                {
                  geometry: {
                    coordinates: coordinates,
                    type: 'Point',
                  },
                  type: 'Feature',
                },
              ],
              type: 'FeatureCollection',
            },
            type: 'geojson',
          },
          type: 'symbol',
        })
      })
    })
  }

  useEffect(() => {
    mapboxgl.accessToken ='pk.eyJ1IjoibmFobWFkaWMiLCJhIjoiY2p5c2ljdm5oMDBqOTNucHB6bXB3a2k5biJ9.85ZiRKZqHxeJRlKx2DIY0g'
    createMap()
  })

  return (
    <React.Fragment>
      <div id={'map'} style={{width: '100%', height: 1000}}/>
    </React.Fragment>
  )
}

export default Map