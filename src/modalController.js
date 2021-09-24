import { writable } from 'svelte/store'

export const titleWritable = writable('')
export const messageWritable = writable('')

export function showModal ({ title = '', message = '' } = {}) {
  titleWritable.set(title)
  messageWritable.set(message)
  modal().show()

  return new Promise((resolve) => {
    element().addEventListener('hidden.bs.modal', resolve, { once: true })
  })
}

function element () {
  return document.getElementById('commonModal')
}
function modal () {
  return new bootstrap.Modal(element())
}
