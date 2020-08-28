const router = require('koa-router')();
const editorService = require('../service/editor');

router.prefix('/api/editor');

router.get('/:id', async ctx => {
  let id = ctx.params.id;
  let result = await editorService.get(id);
  console.log(result);
  ctx.body = {
    code: true, //result ? true : false,
    data: result
  };
});

router.post('/modify', async ctx => {
  let postData = ctx.request.body;
  let result = await editorService.insert(postData);
  ctx.body = {
    code: true,
    data: result
  };
});

module.exports = router;
