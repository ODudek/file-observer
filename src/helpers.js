const isArray = (element) => Array.isArray(element);
const log = console.log;
const currentTime = () => {
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
};
const isNil = (element) => typeof element === undefined || typeof element === null || element === '' || element.length === 0;

module.exports = {
    isArray,
    log,
    currentTime,
    isNil
}
