const {By} = require('selenium-webdriver');

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Batman');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath('(//button)[2]')).click();
}

const crossMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Annie');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath('//input')).sendKeys('The Parent Trap');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath('//span')).click();
}

const notifyDisplay = async (driver) => {
    const message = driver.findElement(By.id('message'))
    expect(message).toBe("Annie watched!")
}

module.exports = {
    deleteMovie,
    crossMovie,
    notifyDisplay
};