const router = require('koa-router')()

//主页
router.get('/', async (ctx, next) => {
    await ctx.render('index', {
    })
});

// 下雪背景
router.get('/snow', async (ctx, next) => {
  await ctx.render('snow', {
  })
});

// 多语言方案
router.get('/languageTest', async (ctx, next) => {
    await ctx.render('languageTest', {
        language: global.language,
        lang: 'en'
    })
});

// 滚动吸顶
router.get('/ScrollTopAb', async (ctx, next) => {
    await ctx.render('ScrollTopAb', {
    })
});



router.get('/SpecialAPI', async (ctx, next) => {
    await ctx.render('SpecialAPI', {
    })
});

module.exports = router
