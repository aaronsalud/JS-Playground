import axios from 'axios';
import { CHANGE_SEARCH_TERM, SET_ROBOTS } from './types';

export const setSearchTerm = searchTerm => (dispatch, getState) => {
    dispatch({
        type: CHANGE_SEARCH_TERM,
        payload: searchTerm
    });

    const { robots } = getState();

    if (searchTerm) {
        dispatch(filterRobots(searchTerm, robots));
    }
    else {
        dispatch(fetchRobots());
    }
};

export const fetchRobots = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(setRobots(response.data));
}

export const filterRobots = (searchTerm, robots) => {
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return setRobots(filteredRobots);
};

export const setRobots = (robots) => {
    return {
        type: SET_ROBOTS,
        payload: robots
    }
}