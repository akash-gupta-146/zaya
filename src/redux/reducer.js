import { AGE_UP, AGE_DOWN, SET_COURSE, SET_ACTIVE_LESSON, SET_ACTIVE_OBJECT, SET_ACTIVE_VIDEO  } from './action-types' 
import update from 'react-addons-update'; // ES6

const initialState = {
    age : 21,
    course: [],
    activeLesson:0,
    activeObjective: 0,
    activeVideo: {},
    videos: []
}

const reducer =  (state = initialState,action) => {
    const newState = {...state}
    var vd = []


    switch(action.type){
        case SET_COURSE:
            newState.course = action.course
            break;
        case SET_ACTIVE_LESSON:
            newState.activeLesson= action.active
            break;
        case SET_ACTIVE_OBJECT:
            newState.activeObjective = action.objective;
            newState.course.lessonDetails[state.activeLesson].objectiveDetails[action.objective].objectiveVideosDetails.forEach(async (video,index)=>{
                let response = await fetch(`https://vimeo.com/api/oembed.json?url=${video.url}`);
                let data = await response.json();
                console.log('aaa')
                vd.push(data)
                newState.videos =  [].concat(vd)
            });

            console.log(newState.videos,'llllllllllllllllllllll')
            break;
        case SET_ACTIVE_VIDEO:
            newState.activeVideo = action.videoDetails
            break;
        case AGE_UP:
            newState.age++;
            break;
        case AGE_DOWN:
            newState.age--;
            break;
        default: return newState
    }
     return  newState;
}

export default reducer;