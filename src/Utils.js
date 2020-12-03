//This File For Function


  // filter records by search text
let filter = (data, value, field) => {
    let result = [];
    for (let i of data) {
        if (search(i[field], value) === true) {
            result.push(i);
        }
    }
    return result;
};

let search = (ar, v) => {
    if (Array.isArray(ar)) {
        for (let i of ar) {
            if (i == v) {
                return true;
            }
        }
    } else {
        if (ar == v) {
            return true;
        }
    }
    return false;
};


export let searchWithValues = (data, filterData) => {
    let result = [...data];

    for (let i of filterData) {
        result = filter(result, i.value, i.field);
    }

    return result;
};


