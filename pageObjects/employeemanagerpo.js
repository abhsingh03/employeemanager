module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.1_Version/index.html',
    elements: {
        nameEntry: 'input[name="nameEntry"]',
        name1: 'p[name="employeeName"]',
        phoneEntry: 'input[name="phoneEntry"]',
        title: 'input[name="titleEntry"]',
        save: 'button[name="save"]',
        cancel: 'button[name="cancel"]',
        employee1: 'li[name="employee1"]',
        employee2: 'li[name="employee2"]',
        employee3: 'li[name="employee3"]',
        employee4: 'li[name="employee4"]',
        employee5: 'li[name="employee5"]',
        employee6: 'li[name="employee6"]',
        employee7: 'li[name="employee7"]',
        employee8: 'li[name="employee8"]',
        employee9: 'li[name="employee9"]',
        employee10: 'li[name="employee10"]',
        
        error:    {
            selector: '(//span[text()="The name field must be between 1 and 30 characters long. The title field must be between 1 and 30 characters long."])',
            locateStrategy: 'xpath' 
        }   
    },
}
