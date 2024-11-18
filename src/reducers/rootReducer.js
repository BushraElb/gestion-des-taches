const initialState = {
    tasks: []
  }
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'AJOUTER_TACHE':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        }
      case 'SUPPRIMER_TACHE':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        }
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, terminer: !task.terminer } : task
          )
        }
      default:
        return state
    }
  }