import DistrictData from "../components/DistrictData"

const initialState = {
    loading: false,
    districts: [],
    districtData: {},
    error: ''
}

const districtReducer = (state=initialState,action) => {
    switch(action.type){
        case 'FETCH_DISTRICTDATA_REQUEST': return {
            ...state,
            loading: true
        }
        case 'FETCH_DISTRICTDATA_SUCCESS': return {
            ...state,
            loading: false,
            districtData: action.districtData,
            districts: action.districts,
            error: ''
        }
        case 'FETCH_DISTRICTDATA_FAILURE': return {
            ...state,
            loading: false,
            districtData: [],
            error: action.payload
        }
        case 'SORT_DISTRICTDATA': 
        const alphabetical_sort_object_of_objects=(data, attr)=> {
            var arr = [];
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    var obj = {};
                    obj[prop] = data[prop];
                    obj.tempSortName = data[prop][attr];
                    obj.districtName=prop;
                    arr.push(obj);
                }
            }
            arr.sort(function(a, b) {
                var at = a.tempSortName,
                    bt = b.tempSortName;
                return at > bt ? 1 : ( at < bt ? -1 : 0 );
            });
        
            var result = [];
            for (var i=0, l=arr.length; i<l; i++) {
                var obj = arr[i];
                result.push(obj.districtName);
            }
            return result;
        }
        let sortedData=alphabetical_sort_object_of_objects(state.districtData,action.sortKey);
        if(action.sortType==="desc")
        sortedData=sortedData.reverse();
        return{
            ...state,
            districts: [...sortedData]
        }

        default: return state;
    }
}

export default districtReducer;