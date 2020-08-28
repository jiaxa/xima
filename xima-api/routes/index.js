const router = require('koa-router')();
const vaccineService = require('../service/vaccine');

// router.get("/", async (ctx, next) => {
//   await ctx.render("index", {
//     title: "Hello Koa 2!",
//   });
// });

router.get('/string', async (ctx, next) => {
  var result = await vaccineService.list();
  ctx.body = result;
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  };
});

module.exports = router;
