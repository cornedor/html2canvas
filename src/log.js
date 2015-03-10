var core = require('./core');
module.exports = function() {
    if (core.logging && window.console && window.console.log) {
        Function.prototype.bind.call(window.console.log, (window.console)).apply(window.console, [(Date.now() - core.start) + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
    }
};
