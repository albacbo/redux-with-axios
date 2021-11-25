import {GET_STUDENTS} from '../store/types';
import {GET_STUDENT} from '../store/types';
import {ADD_STUDENT} from '../store/types';
import {UPDATE_STUDENT} from '../store/types';
import {DELETE_STUDENT} from '../store/types';
import axios from 'axios';

export const getStudents = () => async dispatch => {
    
    try{
        const res = await axios.get(`localhost:3002/students`)
        dispatch( {
            type: GET_STUDENTS,
            payload: res.data
        })
    }
    catch(e){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }
}

export const getStudent = (id) => async dispatch => {
    
    try{
        const res = await axios.get(`localhost:3002/students/:id`)
        dispatch( {
            type: GET_STUDENT,
            id,
            payload: res.data
        })
    }
    catch(e){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }
}

export const addStudent = (student) => async dispatch => {
    
    try{
        const res = await axios.post(`localhost:3002/students`)
        dispatch( {
            type: ADD_STUDENT,
            student,
            payload: res.data
        })
    }
    catch(e){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }
}

export const updateStudent = (student) => async dispatch => {
    
    try{
        const res = await axios.put(`localhost:3002/students`)
        dispatch( {
            type: UPDATE_STUDENT,
            student,
            payload: res.data
        })
    }
    catch(e){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }
}

export const deleteStudent = (id) => async dispatch => {
    
    try{
        const res = await axios.post(`localhost:3002/students`)
        dispatch( {
            type: DELETE_STUDENT,
            id,
            payload: res.data
        })
    }
    catch(e){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }
}