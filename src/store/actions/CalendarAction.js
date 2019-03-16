export const changeDateExam = value => {
    return {
        type: 'CHANGE_DATE_EXAM',
        payload: value
    }
}

export const toggleDateSearch = value => {
    return {
        type: 'TOGGLE_DATE_SEARCH',
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