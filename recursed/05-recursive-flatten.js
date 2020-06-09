/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // => []
flatten([1, 2]); // => [1, 2]
flatten([1, [2, [3]]]); // => [1, 2, 3]
***********************************************************************/
let flatten = arr => {
    let flatIt = [];
    return arr.reduce((acc,el) => {
        if (Array.isArray(el)) {
            acc.push(...flatten(el));
        } else {
            acc.push(el)
        }
        return acc;
    }, [])
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
