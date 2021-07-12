const initialState = {
    loading: false,
    stateData: [],
    error: '',
    sortKey: null
}

const stateReducer = (state=initialState,action) => {
    switch(action.type){
        
        case 'FETCH_STATEDATA_REQUEST': return {
            ...state,
            loading: true
        }

        case 'FETCH_STATEDATA_SUCCESS': return {
            ...state,
            loading: false,
            stateData: action.payload,
            error: ''
        }

        case 'FETCH_STATEDATA_FAILURE': return {
            ...state,
            loading: false,
            stateData: [],
            error: action.payload
        }

        case 'SORT_STATEDATA':  
        if (action.sortType === "asc")
        return {
            ...state,
            stateData: [...state.stateData.sort((a, b) => {
            var x = parseInt(a[action.sortKey], 10);
            var y = parseInt(b[action.sortKey], 10);
            return x < y ? -1 : x > y ? 1 : 0;
            })]
        }
        else
        return {
            ...state,
            stateData: [...state.stateData.sort((a, b) => {
            var x = parseInt(a[action.sortKey], 10);
            var y = parseInt(b[action.sortKey], 10);
            return x < y ? 1 : x > y ? -1 : 0;
            })]
        }
        default: return state;
    }
}

export default stateReducer;