/* eslint-disable no-undef */
import { validatorString, validatorNumbers } from './utilsF'

describe('Validator String', () => {
  it('should return an error message for empty calls', () => {
    expect(validatorString()).toBe("Valor obrigatório")
  })
  it('should return an error message for invalid values', () => {
    expect(validatorString({})).not.toBe(true)
  })
  it('should return correctly results for strings', () => {
    expect(validatorString('uma string')).toBe(true)
  })
})

describe('Validator Number', () => {
  it('empty call must an error message', () => {
    expect(validatorNumbers()).toBe("Obrigatório informar um número")
  })
  it('should return an error message for invalid values', () => {
    expect(validatorNumbers('uma string')).not.toBe(true)
  })
  it('should return correctly results for Numbers', () => {
    expect(validatorNumbers(10)).toBe(true)
  })
})