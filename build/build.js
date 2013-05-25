({
    appDir: "../src",
    baseUrl: ".",
    dir: "../dist",
    fileExclusionRegExp: /(^(dist|nbproject)$)|^build\.js$/,
    findNestedDependencies: true,
    mainConfigFile: '../src/config.js',
    modules: [
        {
            name: 'config'
        }
    ],
    
    //If set to true, any files that were combined into a build layer will be
    //removed from the output folder.
    removeCombined: false,
    
    // remove comments
    preserveLicenseComments: false
})