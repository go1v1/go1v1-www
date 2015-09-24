import 'babel-core/external-helpers'

import Router from 'go1v1-lib/router'
import HomePage from '::/pages/home'
import SummonerPage from '::/pages/summoner'

Router.add('/', new HomePage())
Router.add('/summoner/:summoner', new SummonerPage())
Router.start()
