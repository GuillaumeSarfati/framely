const ejs = require('ejs');

module.exports = async function (filePath, context, callback) {
    try {

        const rendered = await ejs.renderFile(`${filePath}`, {
            ...context,
            url: (path, params) => {
                const [namespace, route] = path.split('/')
                let targetUrl = global.framely.routers[namespace].routes[route]

                Object.keys(params).forEach(key => {
                    targetUrl = targetUrl.replace(`:${key}`, params[key])
                })

                return targetUrl
            }
        })
        return callback(null, rendered)
    } catch (e) {
        // TODO URGENT DOUBLE LOST RENDERINF WTF
        // EDIT /FAVICON.ICO WTF
        // return callback(e)
        return callback(null)
    }
};