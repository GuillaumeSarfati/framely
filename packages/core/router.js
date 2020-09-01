const express = require('express');

module.exports = () => {
    const router = express.Router()
    const parentPath = module.parent.filename

    router.use('/public', express.static(parentPath.replace('router.js', 'public')));

    router.routes = {}
    router.values = {}

    router.setValue = function (key, value) {
        this.values[key] = value
        if (key === 'namespace') {
            global.framely.routers[value] = this
        }
    }

    router.getValue = function (key) {
        return this.values[key]
    }

    router.define = function (routeName, routePath, callback) {
        router.routes[routeName] = routePath
        return router.get(routePath, callback)
    }

    router.navigate = (routeName, params = {}) => {
        let route = router.routes[routeName]

        Object.keys(params).forEach(param => {
            route.replace(`:${param}`, params[param])
        })
        return route
    }
    return router 
}