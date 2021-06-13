export const updateText = (text) => ({
  type: 'TEXT_UPDATE',
  payload: { text },
})

export const resetText = () => ({
  type: 'TEXT_RESET',
  payload: {},
})
