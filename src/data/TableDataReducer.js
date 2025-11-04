export default function TableDataReducer(state, action) {
  const naturalData = [...state.initialData];
  
  switch (action.type) {
    case 'INITIALIZE':
      return {
        initialData: action.payload,
        sortedData: action.payload,
      };

    case 'SORT_ASC':
      return {
        ...state,
        sortedData: [...state.sortedData].sort((a, b) => {
          if (action.payload === 'user') return a.user.name.localeCompare(b.user.name);
          if (action.payload === 'post') return a.post.title.localeCompare(b.post.title);
          if (action.payload === 'comments') return a.comments.length - b.comments.length;
          return 0;
        }),
      };

    case 'SORT_DESC':
      return {
        ...state,
        sortedData: [...state.sortedData].sort((a, b) => {
          if (action.payload === 'user') return b.user.name.localeCompare(a.user.name);
          if (action.payload === 'post') return b.post.title.localeCompare(a.post.title);
          if (action.payload === 'comments') return b.comments.length - a.comments.length;
          return 0;
        }),
      };
      
    case 'SORT_NATURAL':
      return {
        ...state,
        sortedData: naturalData,
      };

    default:
      return state;
  }
}