const router = require('koa-router')()

router.get('/snow', async (ctx, next) => {
  await ctx.render('snow', {
  })
});

router.get('/languageTest', async (ctx, next) => {
    await ctx.render('languageTest', {
        language: global.language,
        lang: 'en'
    })
});

module.exports = router;

