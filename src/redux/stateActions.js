import axios from 'axios';

export const fetchStateDataRequest = () => {
    return {
        type: "FETCH_STATEDATA_REQUEST"
    }
}


export const fetchStateDataSuccess = (stateData) => {
    return {
        type: "FETCH_STATEDATA_SUCCESS",
        payload: stateData
    }
}

export const fetchStateDataFailure = (error) => {
    return {
        type: "FETCH_STATEDATA_FAILURE",
        payload: error
    }
}

export const sortStateData = (sortType,sortKey) => {
    return {
        type: "SORT_STATEDATA",
        sortKey: sortKey.toLowerCase(),
        sortType: sortType
    }
}


export const fetchStateData = () => {
    return (dispatch) => {
        dispatch(fetchStateDataRequest);
        axios.get("https://api.covid19india.org/data.json")
        .then((res) => {
            const stateData = res.data.statewise;
            dispatch(fetchStateDataSuccess(stateData));
        })
        .catch((err) => {
            const errorMsg=err;
            dispatch(fetchStateDataFailure(errorMsg));
        })
    }
}