// rest operator
const user = { id: 100, name: 'Howard Moon'}
const userWithPass = { ...user, password: 'Password!' }

user //=> { id: 100, name: 'Howard Moon' }
userWithPass //=> { id: 100, name: 'Howard Moon', password: 'Password!' }

const noPassword = ({ password, ...rest }) => rest

noPassword(user) //=> { id: 100, name: 'Howard moon'

user