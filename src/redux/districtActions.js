import axios from 'axios';

export const fetchDistrictDataRequest = () => {
    return {
        type: "FETCH_DISTRICTDATA_REQUEST"
    }
}


export const fetchDistrictDataSuccess = (districtData, districts) => {
    return {
        type: "FETCH_DISTRICTDATA_SUCCESS",
        districtData: districtData,
        districts: districts
    }
}

export const fetchDistrictDataFailure = (error) => {
    return {
        type: "FETCH_DISTRICTDATA_FAILURE",
        payload: error
    }
}

export const sortDistrictData = (sortType,sortKey) => {
    if(sortKey==="Deaths")
    sortKey="deceased";
    return {
        type: "SORT_DISTRICTDATA",
        sortKey: sortKey.toLowerCase(),
        sortType: sortType,
    }
}


export const fetchDistrictData = (stateName) => {
    return (dispatch) => {
       dispatch(fetchDistrictDataRequest);
       axios.get("https://api.covid19india.org/state_district_wise.json")
      .then((res) => {
        const districtData = res.data[stateName].districtData;
        const districts = Object.keys(districtData);
        dispatch(fetchDistrictDataSuccess(districtData, districts));
      })
     
      .catch((err) => {
        const errorMsg = err;
        dispatch(fetchDistrictDataFailure(errorMsg));
      });
    }
}