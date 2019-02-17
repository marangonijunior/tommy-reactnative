import { ADD_USER, DELETE_USER, PUT_USER, FETCH_USER, FETCH_USER_ID } from './types';
import axios from 'axios';

const apiUrl = 'https://tommy-sign-users.herokuapp.com/users';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const createUser = (body) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, body, config)
      .then(response => {
        dispatch(createUserSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const createUserSuccess = (data) => {
  return {
    type: ADD_USER,
    payload: data
  }
};

export const putUser = (body) => {
  return (dispatch) => {
    return axios.put(`${apiUrl}/${body._id}`, body, config)
      .then(response => {
        dispatch(putUserSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const putUserSuccess = (data) => {
  return {
    type: PUT_USER,
    payload: data
  }
};

export const deleteUser = id => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteUserSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteUserSuccess = id => {
  return {
    type: DELETE_USER,
    payload: {
      id
    }
  }
}

export const fetchUser = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(fetchUserId(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const fetchUserId = (user) => {
  return {
    type: FETCH_USER_ID,
    payload: user
  }
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchAllUser(response.data.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const fetchAllUser = (users) => {
  return {
    type: FETCH_USER,
    payload: users
  }
};
