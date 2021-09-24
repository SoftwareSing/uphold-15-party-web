/**
 * @param {'GET' | 'POST'} method
 * @param {String} path
 * @param {Any} [data]
 */
export async function send (method, path, data) {
  if (isOnDev()) path = `${window.location.origin.replace(/:5015$/, ':3015')}${path}`

  try {
    const res = await window.fetch(path, {
      headers: {
        'content-type': 'application/json'
      },
      method,
      body: data !== undefined ? JSON.stringify(data) : undefined
    })
    const text = await res.text()
    const obj = text ? JSON.parse(text) : undefined

    if (res.status >= 400) {
      if (obj.error) throw new HttpError(obj.error, res.status, true)
      else throw new HttpError('無法確認錯誤訊息，請稍後再試', res.status, false)
    }
    return obj
  } catch (err) {
    if (err instanceof HttpError) throw err

    console.error(err)
    throw new HttpError('未知的連線錯誤，請稍後再試', 999, false)
  }
}

function isOnDev () {
  return /:5015$/.test(window.location.host)
}

export class HttpError extends Error {
  /**
   * @param {String} message
   * @param {Number} code
   * @param {Boolean} isServerReturnedMessage
   */
  constructor (message, code, isServerReturnedMessage) {
    super(message)
    this.code = code
    this.isServerReturnedMessage = isServerReturnedMessage
  }
}
