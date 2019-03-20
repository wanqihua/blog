const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('snow', {
  })
})

router.get('/snow', async (ctx, next) => {
  await ctx.render('index', {
  })
})

module.exports = router
