const router = require('koa-router')();
const blogService = require('../service/blog');

router.prefix('/api/blog');

router.get('/list', async function(ctx) {
  console.log(ctx.request.query);
  let result = await blogService.getPage(ctx.request.query);

  ctx.body = {
    code: true,
    data: result
  };
});

router.get('/:id', async ctx => {
  let id = ctx.params.id;
  let result = await blogService.get(id);
  ctx.body = {
    code: true,
    data: result
  };
});

router.post('/modify', async ctx => {
  let postData = ctx.request.body;
  let result = await blogService.insert(postData);
  ctx.body = {
    code: true,
    data: result
  };
});

router.post('/onoff/:id', async ctx => {
  let id = ctx.params.id;
  let postData = ctx.request.body;
  let result = await blogService.onoff(id, postData.status);
  ctx.body = {
    code: true,
    data: result
  };
});

module.exports = router;
