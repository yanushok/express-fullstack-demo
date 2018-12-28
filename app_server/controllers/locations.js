exports.homeList = (req, res) => {
    res.render('index', { title: 'Home' });
};

exports.locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
};

exports.addReview = (req, res) => {
    res.render('index', { title: 'Add review' });
};