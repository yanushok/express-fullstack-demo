export const homeList = (req, res) => {
    res.render('index', { title: 'Home' });
};

export const locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
};

export const addReview = (req, res) => {
    res.render('index', { title: 'Add review' });
};