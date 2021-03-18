const obj = {
    Alan: {
        online: false,
    },
    Jeff: {
        online: true,
    },
    Sarah: {
        online: false,
    },
}

function countOnline(usersObj) {
    let numOnline = 0
    for (let user in usersObj) {
        //log(user);
        //log(user);
        //log(typeof user);
        //log(Object.keys(user));
        //log(usersObj[user].online);

        if (usersObj[user].online == true) {
            numOnline++
        }
    }
    //log("bout to return..");
    return numOnline
}

const log = (output) => console.log(output)
log(countOnline(obj))
