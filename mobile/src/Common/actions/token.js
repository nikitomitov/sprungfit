export const authGetToken = () => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            const token = getState().auth.token;
            if (!token) {
                reject();
            } else {
                resolve(token);
            }
        });  
        return promise;
    };
};