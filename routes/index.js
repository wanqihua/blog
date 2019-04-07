const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
    })
});

router.get('/snow', async (ctx, next) => {
  await ctx.render('snow', {
  })
});

router.get('/SpecialAPI', async (ctx, next) => {
    await ctx.render('SpecialAPI', {
    })
});


module.exports = router;
