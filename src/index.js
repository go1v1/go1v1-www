import 'babel-core/external-helpers'

import Router from '../lib/router'
import {
  SummonerPage
} from './pages'

Router.add('/summoner/:summoner', new SummonerPage())
Router.start()
