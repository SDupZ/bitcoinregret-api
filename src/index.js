const Koa = require('koa');
const cors = require('@koa/cors');

const tableTennis = require('./tableTennis');

const app = new Koa();

// Cors
const options = {
  origin: '*'
};

app.use(cors(options));

// response
app.use(async (ctx, next) => {
  const result = await tableTennis.getRankedParticipants();
  ctx.body = JSON.stringify(result);
  await next();
});

app.listen(3000);
