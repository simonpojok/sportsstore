export const CommonReducer = (...reducers) => (storeData, action) => {
    console.log(`COMMON REDUCER >> ${action.type} << ${new Date().toString()}`);
    for (let i = 0; i < reducers.length; i++) {
        let newStore = reducers[i](storeData, action);
        if ( newStore !== storeData) {
            return newStore;
        }
    }
    return storeData;
}