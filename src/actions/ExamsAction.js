

export const toggleDateSearch = value => {
    return {
       type: 'TOGGLE_DATE_SEARCH',
       payload: value
    }
}

export const addArrayExams = value => {
    return{
        type: 'ADD_ARRAY_EXAMS',
        payload: value
    }
}

export const addBackupArrayExams = value => {
    return {
        type: 'ADD_BACKUP_ARRAY_EXAMS',
        payload: value
    }
}

export const changeQuerySearch = value => {
    return {
        type: 'CHANGE_QUERY_SEARCH',
        payload: value
    }
}

export const changeDateBegin = value => {
    return {
        type: 'CHANGE_DATE_BEGIN',
        payload: value
    }
}

export const changeDateEnd = value => {
    return {
        type: 'CHANGE_DATE_END',
        payload: value
    }
}