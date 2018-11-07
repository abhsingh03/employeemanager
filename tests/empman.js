var testdataem1 = require('../tests/testdata')
var emfunctionsave = require('./savefunction')
var emfunctioncancel = require('./cancelfunction')
var emcharacterfunction = require('./characterfunction')
var emphonefunction = require('./phonefunction')
var employeemanagerpo

module.exports = {
    beforeEach: browser => {
        employeemanagerpo = browser.page.employeemanagerpo()
        employeemanagerpo.navigate()
    },

    after: browser => {
        browser.end()

    },

    'Check Save Button': browser => {
        emfunctionsave(employeemanagerpo, testdataem1.savebutton[0])
    },

    'Check Cancel Button': browser => {
        emfunctioncancel(employeemanagerpo, testdataem1.cancelbutton[0])
    },

    'Check Character Limit': browser => {
        emcharacterfunction(employeemanagerpo, testdataem1.characterlimit[0])
    },

    'Check Phone Limit': browser => {
        emphonefunction(employeemanagerpo, testdataem1.phonelimit[0])
    },
}
