import { call, put } from 'redux-saga/effects'
import FortuneActions from '../Redux/FortuneRedux'

export function * getFortune (api, action) {
  try {
    // make the call to the api
    const response = yield call(api.getFortune)
    if (response.ok) {
      yield put(FortuneActions.fortuneSuccess(response.data))
    } else {
      yield put(FortuneActions.fortuneFailure())
    }
  } catch (error) {
    yield put(FortuneActions.fortuneFailure())
  }
}
