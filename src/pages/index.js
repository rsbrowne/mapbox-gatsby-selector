import React from "react"
import { Helmet } from 'react-helmet'

import Map from '../components/map'

import '../utils/global.css'

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css' rel='stylesheet' />
      </Helmet>
      <div className="container mx-auto">
        <Map></Map>
      </div>
    </React.Fragment>
  )
}

export default IndexPage
