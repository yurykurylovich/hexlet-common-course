const mapping = {
  user: (user) => `Hello ${user.getName()}`,
  guest: (guest) => `Nice to meet you ${guest.getName()}`
}

export default (someUser) => {
  return mapping[someUser.getTypeName()](someUser)
}
