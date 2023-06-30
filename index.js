// code your solution here
function demoChain(name) {
    const part1 = "hi";
    return function () {
        const part2 = "there";
        return function () {
            console.log(`${part1.toUpperCase()} ${part2} ${name}`);
        };
    };
}

demoChain("Dr. Stephen Strange")()(); //=> HI there Dr. Stephen Strange