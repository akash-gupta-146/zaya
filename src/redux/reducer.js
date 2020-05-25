import { AGE_UP, AGE_DOWN, SET_COURSE, SET_ACTIVE_LESSON, SET_ACTIVE_OBJECT, SET_ACTIVE_VIDEO, MARK_DONE,MARK_NOT_DOING, MARK_NEXT_CLASS  } from './action-types' 
import update from 'react-addons-update'; // ES6

const initialState = {
    age : 21,
    course: [],
    activeLesson:0,
    activeObjective: 0,
    activeVideo: {},
    videos: [],
    lessonProgress:[]
}

const reducer =  (state = initialState,action) => {
    var newState = {...state}
    var vd = []


    switch(action.type){
        case SET_COURSE:
            newState.course = action.course
            newState.course.lessonDetails.forEach((lesson,i)=>{
                lesson.objectiveDetails.forEach((objective,j)=>{
                    objective.done = false;
                })
            })
            break;
        case SET_ACTIVE_LESSON:
            newState.activeLesson= action.active;
            newState.activeObjective = 0;
            newState.activeVideo = []
            action.objective = 0;
        case SET_ACTIVE_OBJECT:
            newState.activeObjective = action.objective;
            newState.course.lessonDetails[state.activeLesson].objectiveDetails[action.objective].objectiveVideosDetails.forEach(async (video,index)=>{
                let response = await fetch(`https://vimeo.com/api/oembed.json?url=${video.url}`);
                let data = await response.json();
                console.log('aaa')
                vd.push(data)
                newState.videos =  [].concat(vd)
            });
            break;
        case MARK_DONE:
            newState = Object.assign({},
                state,state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].done= true,
                state,state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].notDoing= false,
                state,state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].nextClass= false,

                )
            // return Object.assign({},state)
            break;
        case SET_ACTIVE_VIDEO:
            newState.activeVideo = action.videoDetails
            break;
        case MARK_NOT_DOING:
            newState = Object.assign({},newState,state,
                state,state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].done= false,
                state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].notDoing= true,
                state,state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].nextClass= false,
                )
            break;
            case MARK_NEXT_CLASS:
                newState = Object.assign({},newState,state,
                    state,state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].done= false,
                    state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].notDoing= false,
                    state,state.course.lessonDetails[action.lesson].objectiveDetails[action.objective].nextClass= true,
                    )
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