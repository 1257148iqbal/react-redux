const initialState=[
    {
        id:0,
        name:"Salman",
        number:12544521,
        email:'salam@gmail.com'
    },
    {
        id:1,
        name:"Kalam",
        number:85424525,
        email:'kalam@gmail.com'

    },
    {
        id:2,
        name:"Halim",
        number:52421522,
        email:'halim@gmail.com'

    },
]

const contactReducer=(state=initialState, action)=>{
    const {type, payload}=action;
    switch (type) {
        case "ADD_CONTACT":
            state=[...state, payload]
            return state;
        case "UPDATE_CONTACT":
            const updateState=state.map(contact=>contact.id===payload.id? payload: contact);
            state=updateState;
            return state;
        case "DELETE_CONTACT":            
            const filterContact=state.filter(contact=>contact.id!==payload && contact);
            state=filterContact;
            return state;
        default:
            return state;
    }
}

export default contactReducer;