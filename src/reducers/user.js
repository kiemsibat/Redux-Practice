const initialState = [
    { name: "dog", age: 20 },
    { name: "cat", age: 2 },
    { name: "fish", age: 5 },
  ];



const UserReducer = (state = initialState,action) => {
    switch (action.type) {
        default :
            return state;
    }
}

export default UserReducer;