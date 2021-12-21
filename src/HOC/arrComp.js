export const arrComp = (arr) => {
    const less = arr.filter((data, index) => (data < 5))
    const mul = less.map((data) => (data * 5))
    return mul
}