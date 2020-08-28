const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const historyFallback = require('koa2-history-api-fallback');

const index = require('./routes/index');
const users = require('./routes/users');
const vaccine = require('./routes/vaccine');
const article = require('./routes/article');
const editor = require('./routes/editor');
const blog = require('./routes/blog');

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());
// app.use(require('koa-static')(__dirname + '/public'));

app.use(
  views(__dirname + '/views', {
    extension: 'pug',
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(vaccine.routes(), vaccine.allowedMethods());
app.use(article.routes(), article.allowedMethods());
app.use(editor.routes(), editor.allowedMethods());
app.use(blog.routes(), blog.allowedMethods());

// 在这个地方加入。一定要加在静态文件的serve之前，否则会失效。
app.use(historyFallback()); // 将这两个中间件挂载在api的路由之后
// app.use(historyApiFallback({ whiteList: ["/api"] }));

app.use(require('koa-static')(__dirname + '/dist'));


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
