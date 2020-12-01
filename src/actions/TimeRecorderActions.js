import Http from '../libs/http'
import { showConnectionError, tryFetch, successFetch } from './GeneralActions'

export const MARK_TIME = 'MARK_TIME'
export const SERVER_ERROR = 'SERVER_ERROR'
export const NEW_DAY = 'NEW_DAY'

export const markTime = () => async (dispatch, getState) => {
  const { general } = getState()
  dispatch(tryFetch())

  try {
    const data = await Http.instance.post({ id: general.employeeId }, 'days')
    dispatch(successFetch())

    const { error, body } = data
    if(error)return dispatch({ type: SERVER_ERROR, payload: body })
  
    const keys = Object.keys(body)
  
    let payload
    
    switch (true) {
      case keys.includes('day_start'):
        payload = {
          interval: 'Hora de inicio:',
          hour: `${body.day_start} hs.`,
          btnText: 'Salida a Almorzar',
          isWorking: true,
          showPauseButton: true
        }
        break
      case keys.includes('lunch_start'):
        payload = {
          interval: 'Almuerzo comenzado:',
          hour: `${body.lunch_start} hs.`,
          btnText: 'Terminar almuerzo',
          isWorking: false,
          showPauseButton: false
        }
        break
      case keys.includes('lunch_end'):
        payload = {
          interval: 'Almuerzo finalizado:',
          hour: `${body.lunch_end} hs.`,
          btnText: 'Salida',
          isWorking: true,
          showPauseButton: true
        }
        break
      case keys.includes('day_end'):
        payload = {
          interval: 'Día finalizado:',
          hour: `${body.day_end} hs.`,
          btnText: '',
          isWorking: false,
          showPauseButton: false,
          showMarkButton: false
        }
        break
      default:
        return
    }

    dispatch({ type: MARK_TIME, payload })

  } catch (error) {
    dispatch(showConnectionError())
  }
}

export const markExtraPause = () => async (dispatch, getState) => {
  const { general } = getState()
  dispatch(tryFetch())

  try {
    const data = await Http.instance.post({ id: general.employeeId, extraPause: true }, 'days')
    dispatch(successFetch())

    const { error, body } = data
    if(error) return
  
    const keys = Object.keys(body)
    let payload
    
    if (keys.includes('extraPause_start')) {
      payload = {
        interval: 'Pausa comenzada:',
        hour: `${body.extraPause_start} hs.`,
        isWorking: false,
        showMarkButton: false
      }
    } else {
      payload = {
        interval: 'Pausa terminada:',
        hour: `${body.extraPause_end} hs.`,
        isWorking: true,
        showPauseButton: false,
        pauseAvailable: false,
        showMarkButton: true
      }
    }

    dispatch({ type: MARK_TIME, payload })
    
  } catch (error) {
    dispatch(showConnectionError())   
  }
}

export const checkDate = () => (dispatch, getState) => {
  const storedData = getState()
  const storedDay = storedData.timeRecorder.day

  const today = new Date()
  const storedDate = new Date(storedDay)
  
  if(today.getDay() === storedDate.getDay() && today.getMonth() === storedDate.getMonth()){
    return
  }
  
  dispatch({ type: NEW_DAY })
}