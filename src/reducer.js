export default function reducer (state, action) {
  switch (action.type) {
    case 'joined':
      return{
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId,
      }
      case 'SET_USERS':
      return{
        ...state,
        users: action.payload
      }
      case 'NEW_MESSAGE':
      return{
        ...state,
        messages: [...state.messages, action.payload]
      }
      default:
        return state;
  }
  
}