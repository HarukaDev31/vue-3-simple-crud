export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isRequired(value) {
  return value !== null && value !== undefined && value.toString().trim() !== ''
}
