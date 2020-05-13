// Question 2

const expectedPaths = [
    "node1_hello",
    "node1_node1_goodbye",
    "node1_node2_node1_yo",
    "node1_node2_node2_como esta",
    "node1_node2_node2_muchacho"
]


// Question 3

const getPathsOf = (nodes, string = "", initialResult = []) => {
    let result = initialResult

    if (typeof nodes === "object") {

        for (const property in nodes) {
          return getPathsOf(nodes[property], `${string}${property}_`, result)
        }
    }
    if (typeof nodes === "string") {
        return result = [... result, `${string}`]
    }
}

module.exports = {
    expectedPaths,
    getPathsOf
}