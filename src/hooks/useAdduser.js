import React from 'react';

const useAdduser = () => {
    const saveUser = (email, password, method) => {
        const user = { email, password };
        fetch('http://localhost:5000/adduser', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {})
            .finally(() => {

            })
    }

    return [saveUser]
};

export default useAdduser;