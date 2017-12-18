import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { FortuneTypes } from '../Redux/FortuneRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getFortune } from './FortuneSagas'

/* ------------- API ------------- */

const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(FortuneTypes.FORTUNE_REQUEST, getFortune, api)
  ])
}
