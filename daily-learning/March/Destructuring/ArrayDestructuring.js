const ArrayDestructuring = () => {
    

    const $Array = [1, 2, 3, 4]

    // Basic Array Destructuring
    // const [a, b, c, d,] = $Array


    // Skipping Elements in Destructuring
    const [a, , , d,] = $Array
    const [x, , , y] = $Array


    // Default Values in Array Destructuring
    // const [a, b, c, d, e = 5] = $Array


    // Swapping Values Using Destructuring
    let p = 2;
    let q = 4;

    [p, q] = [q, p]



    // console.log(p, q)
}

export default ArrayDestructuring