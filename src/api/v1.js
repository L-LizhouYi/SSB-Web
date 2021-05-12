import axios from 'axios'

var header = {'Authorization': localStorage.getItem('token')}

const userLogin = (form) => axios.post('/api/user/login', form).then(response => response.data)

const userMe = () => axios.get('/api/user/me', {headers: header}).then(response => response.data)

const userRegister = (form) => axios.post('/api/user/register', form).then(response => response.data)

const userLogout = () => axios.get('/api/user/logout', {headers: header}).then(response => response.data)
export {
  userLogin,
  userMe,
  userRegister,
  userLogout
}
