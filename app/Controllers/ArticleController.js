const Task = require('../Models/demo')
class ArticleController {
    async insert() {
        try {
            const model = await Task.create(this.request.body)
            this.body = model
        } catch (err) {
            this.body = {error: err}
        }
    }
    
    *show() {
        // some code 
    }
    
    *create() {
        // some code 
    }
 
    *update() {
        // some code 
    }
 
    *destroy() {
        // some code 
    }
}
 
module.exports = ArticleController;