export const MARK_TIME = 'MARK_TIME'
export const INIT_FROM_STORAGE = 'INIT_FROM_STORAGE'
export const SERVER_ERROR = 'SERVER_ERROR'

export const markTime = (data) => {
  const { error, body } = data
  if(error) return { type: SERVER_ERROR, payload: body }

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
      return { type: 'NONE' }
  }
  return { type: MARK_TIME, payload }
}

export const initFromStorage = (storedData) => {
  if(!storedData) return 

  const today = new Date()
  const day = new Date(storedData.day)
  
  if(today.getDay() !== day.getDay() && today.getMonth() !== day.getMonth()) return  
  
  return { type: INIT_FROM_STORAGE, payload: storedData }
}

export const markExtraPause = (data) => {
  const { error, body } = data
  if(error) return { type: 'NONE' }

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

  return { type: MARK_TIME, payload }
}
