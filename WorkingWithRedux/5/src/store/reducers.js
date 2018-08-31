const initialState = {
  notes: [
    {
      id:'27812b',
      title: 'An example note',
      details: 'THis is an example of a note'
    },
    {
      id:'278922',
      title: 'Another  example note',
      details: 'THis is an example of a note...agiaing'
    }
  ],
  name: 'Manny'
}

export default (state = initialState, action) =>{
  switch (action.type){
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.note],
      }
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note=>note!==action.note),
      }
    case 'GET_NOTES':
      return {
        ...state,
      }
    default:
        return state;
  }
}
