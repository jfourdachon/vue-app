import Vue from 'vue'

import { Map, TileLayer, OsmSource, Geoloc, PointGeom, Feature, LineStringGeom } from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

Vue.use(Map)
Vue.use(TileLayer)
Vue.use(OsmSource)
Vue.use(Geoloc)
Vue.use(PointGeom)
Vue.use(Feature)
Vue.use(LineStringGeom)
