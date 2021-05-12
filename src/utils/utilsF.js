export function validatorString(value) {
  if (!value) return 'Valor obrigatório'
  const type = typeof value
  if (type !== 'string') return 'O valor deve ser uma String'
  return true
}


export function validatorNumbers(number) {
  if (!number) return 'Obrigatório informar um número'
  const ref = /\d/g
  const isValid = ref.test(number)
  if (isValid) return true
  return false
}