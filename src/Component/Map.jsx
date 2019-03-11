import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';
import '../../node_modules/leaflet/dist/leaflet.css'

//const Sensor = Marker;
const stamenTonerTiles = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
// const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
// const mapCenter = [39.9528, -75.1638];
// const zoomLevel = 14;

export class Map extends Component {

    constructor() {
        super();
        this.state = {
            markers: [],
            sensors: []
        };
        //const {test} = this.state
        //test.push([39.9528, -75.1638])
        //this.setState(test)
        //this.state.markers.push([39.9528, -75.1638]);

        // testing sensors
        this.state.sensors.push([39.9528, -75.1638]);
    }

    addMarker = (e) => {
        const {markers} = this.state
        markers.push(e.latlng)
        this.setState({markers})
    }

    render() {
        return (
                <LeafletMap
                    center={[39.9528, -75.1638]}
                    zoom={0}
                    maxZoom={14}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    //easeLinearity={0.35}
                    onClick={this.addMarker}
                >
                    <TileLayer
                        //attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />

                    {/*{this.state.markers.map((position, idx) =>*/}
                        {/*<Marker key={`marker-${idx}`} position={position}>*/}
                            {/*<Popup>*/}
                                {/*<span>Hello!</span>*/}
                            {/*</Popup>*/}
                        {/*</Marker>*/}
                    {/*)}*/}

                    {this.state.sensors.map((position, idx) =>
                        <Marker key={`sensor-${idx}`} position={position}>
                            <Popup>
                            <span>Hello!</span>
                            </Popup>
                        </Marker>
                    )}

                </LeafletMap>)
    }
}