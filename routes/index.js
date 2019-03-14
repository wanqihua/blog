const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/snow', async (ctx, next) => {
  await ctx.render('snow', {
  })
})

module.exports = router
