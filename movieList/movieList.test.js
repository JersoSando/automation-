const {Builder, Capabilities} = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// Importing Functions
const {deleteMovie, crossMovie, notifyDisplay} = require("./movieFunctions.js");

// beforeAll and afterAll
beforeAll(async() => {
    await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async() => {
    await driver.quit();
});

// test for deleteMovie
test("Delete movie", async () => {
    await deleteMovie(driver);

    await driver.sleep(5000);
})

test("Cross first movie", async () => {
    await crossMovie(driver);
    await driver.sleep(5000);
})

// test for notifyDisplay
test("update message works", async () => {
    await notifyDisplay(driver);
    await driver.sleep(5000);
})