// controller router
const Router = require('koa-controller-router');
const path = require('path');
// midle wares
const authMiddleware = function *(next) {
    // auth check 
    
    yield next;
  };
  
  const isAdminMiddleware = function *(next) {
    // check user role 
    
    yield next;
  };
const router = new Router({
    controllersPath: path.resolve(process.cwd(), 'app', 'Controllers')// default value is /path/to/project/controllers/ 
  });
  
  router.get('/api/v1/articles', 'ArticleController@insert');
  router.get('/api/v1/articles/:id', 'ArticleController@show');
  router.post('/api/v1/articles', authMiddleware, 'ArticleController@create');
  router.put('/api/v1/articles/:id', authMiddleware, 'ArticleController@update');
  router.patch('/api/v1/articles/:id', authMiddleware, 'ArticleController@update');
  router.del('/api/v1/articles', authMiddleware, isAdminMiddleware, 'ArticleController@destroy');
  module.exports = router;