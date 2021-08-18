class NewsController {
    // get new
    index(req, res) {
        res.render('new');
    }
    // get new/:slug
    show(req, res) {
        console.log('xxx');
    }
}

module.exports = new NewsController();
