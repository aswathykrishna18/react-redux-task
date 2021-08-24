import actions from './actions';
const initState = {
  isLoggedIn: !!localStorage.getItem('isLoggedIn'),
  userLogin: {
    "username": "hruday@gmail.com",
    "password": 'hruday123'
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      localStorage.setItem('isLoggedIn', true);
      return {
        ...state,
        isLoggedIn: true
      }
    case actions.LOGOUT:
      localStorage.setItem('isLoggedIn', false);
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}