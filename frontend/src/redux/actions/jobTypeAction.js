
import axios from 'axios';
// import { toast } from 'react-toastify'
import { JOB_TYPE_LOAD_FAIL,
JOB_TYPE_LOAD_REQUEST,
JOB_TYPE_LOAD_SUCCESS ,
CREATE_JOB_TYPE_FAIL,
CREATE_JOB_TYPE_REQUEST,

CREATE_JOB_TYPE_SUCCESS} from '../constants/jobTypeConstant';





export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`http://localhost:8000/type/jobs`);
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}
// create jobs category
export const createJobTypeAction = (jobtype) => async (dispatch) => {
    dispatch({ type: CREATE_JOB_TYPE_REQUEST })

    try {
        const { data } = await axios.post(`/type/create`, jobtype)
        dispatch({
            type: CREATE_JOB_TYPE_SUCCESS,
            payload: data
        })
       alert("Job type created successfully");


    } catch (error) {
        dispatch({
            type: CREATE_JOB_TYPE_FAIL,
            payload: error.response.data.error
        })
        alert(error.response.data.error);

    }
}