const presets = [
    [
        "@babel/env",
        {
            targets: {
                electron: "3.0.10",
            },
            useBuiltIns: "usage",
        },
    ],
];

module.exports = { presets };


//
// module.exports = function () {
//     const presets = [ ... ];
//     const plugins = [ ... ];
//
//     return {
//         presets,
//         plugins
//     };
// }
