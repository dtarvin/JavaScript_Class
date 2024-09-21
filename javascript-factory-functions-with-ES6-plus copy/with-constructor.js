// const withConstructor = function(constructor) {
//     return function(o) {
//         return {_proto_:{}, ...o};
//     }
// }

const withConstructor = constructor => o => ({
    __proto__: {
        constructor
    },
    ...o
});