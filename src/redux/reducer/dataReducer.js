// const data = (action) => {
//     console.log(action.payload.csat);
//     return {
//         csat: action.payload.csat
//     }
// }

export default (state = [], action) => {
    console.log("add_route", action);

    switch (action.type) {
        case "ADD_ROUTE":
            return action.payload;
        default:
            return state;
    }
};
