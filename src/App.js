import React, { Component } from 'react'
import esriLoader from 'esri-loader'
import './App.css'

class App extends Component {
  componentDidMount() {
    let options = {
      url: 'https://js.arcgis.com/4.14/',
      css: 'https://js.arcgis.com/4.14/esri/themes/light/main.css'
    }
    esriLoader
      .loadModules(['esri/Map', 'esri/views/MapView'], options)
      .then(([Map, Mapview]) => {
        let map = new Map({
          basemap: 'streets'
        })

        let view = new Mapview({
          container: 'mapview', // Reference to the DOM node that will contain the view
          map: map // References the map object created in step 3
        })
      })
  }

  render() {
    return <div id="mapview"></div>
  }
}

export default App
