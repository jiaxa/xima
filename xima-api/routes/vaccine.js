const router = require('koa-router')();
const vaccineService = require('../service/vaccine');
const areaService = require('../service/area');
const chscService = require('../service/chsc');

router.prefix('/api/vaccine');

router.get('/area', async function(ctx) {
  var result = await areaService.list();
  // console.log(result);
  ctx.body = {
    code: true,
    data: result
  };
});

router.get('/list', async function(ctx) {
  var result = await vaccineService.list();
  ctx.body = {
    code: true,
    data: result
  };
});

router.get('/chsc', async function(ctx) {
  //   console.log(ctx.params);
  console.log(ctx.request.query);
  //   console.log(ctx.request.querystring);
  //   console.log(ctx.request.body);
  let result = await chscService.getPage(ctx.request.query);

  ctx.body = {
    code: true,
    data: result
  };
});

router.get('/bar', function(ctx, next) {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;
