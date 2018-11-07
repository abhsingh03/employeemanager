module.exports = (employeemanagerpo, phonelimit) => {
    employeemanagerpo
            .navigate()
            .click('@employee1')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)
            
            employeemanagerpo
            .navigate()
            .click('@employee2')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee3')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee4')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee5')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee6')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee7')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee8')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee9')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)

            employeemanagerpo
            .navigate()
            .click('@employee10')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', phonelimit.phoneEntry)
            .click('@save')
            employeemanagerpo.expect.element('@phoneEntry').value.to.equal('60985101871').before(5000)
}