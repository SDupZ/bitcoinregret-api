require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const repository = require('./repository');

const app = new Koa();
const router = new Router();


// Cors
const options = {
  origin: [
    /\.bitcoinregret\.net$/,
  ],
};

app.use(cors(options));

router.get('/price', async (ctx) => {
  const {
    date,
  } = ctx.query;

  const currentPrice = await repository.fetchPriceOnDate(date);
  ctx.body = JSON.stringify(currentPrice);
});

router.get('/currentPrice', async (ctx) => {
  const currentPrice = await repository.fetchCurrentPrice();
  ctx.body = JSON.stringify(currentPrice);
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(process.env.PORT);
