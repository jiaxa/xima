const router = require('koa-router')();
const articleService = require('../service/article');

router.prefix('/api/article');

router.get('/list', async function(ctx) {
  console.log(ctx.request.query);
  let result = await articleService.getPage(ctx.request.query);

  ctx.body = {
    code: true,
    data: result
  };
});

router.get('/:id', async ctx => {
  let id = ctx.params.id;
  let result = await articleService.get(id);
  ctx.body = {
    code: true,
    data: result
  };
});

router.post('/modify', async ctx => {
  let postData = ctx.request.body;
  let result = await articleService.insert(postData);
  ctx.body = {
    code: true,
    data: result
  };
});

router.post('/onoff/:id', async ctx => {
  let id = ctx.params.id;
  let postData = ctx.request.body;
  let result = await articleService.onoff(id, postData.status);
  ctx.body = {
    code: true,
    data: result
  };
});

module.exports = router;
