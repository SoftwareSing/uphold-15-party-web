import { SHA3 } from 'sha3'

export function hashPassword (password) {
  const hash = new SHA3(256)
  return hash.update(password).digest('hex')
}
