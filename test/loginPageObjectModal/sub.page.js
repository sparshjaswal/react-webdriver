

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SubPage extends Page {
    /**
     * define selectors using getter methods
     */
    get success () {
        return $('.login-successfull');
    }
}

module.exports = new SubPage();
