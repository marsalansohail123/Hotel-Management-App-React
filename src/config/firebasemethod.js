import { getDatabase, onValue, push, ref, set } from "firebase/database";

import app from "./firebaseconfig";

const database = getDatabase(app);

function AddRoomDb(obj) {
    return new Promise((resolve, reject) => {
        const reference = ref(database, "add room");
        const newRef = push(reference).key;
        const send = ref(database, `add room/${newRef}`);
        const newDate = JSON.stringify(new Date());
        const currDate = newDate.slice(1, 11);
        obj.id = newRef;
        obj.date = "Added on: " + currDate;
        set(send, obj)
            .then(() => {
                resolve("Room Added Successfully");
            })
            .catch((err) => {
                reject(err)
            });
    });
};

function ReadData(nodeName) {
    return new Promise((resolve, reject) => {
        const reference = ref(database, nodeName);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                resolve(data);
                return;
            }
            else {
                reject('Error');
                return;
            }
        })
    })
}

export {
    AddRoomDb,
    ReadData
}