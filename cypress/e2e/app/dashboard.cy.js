/// <reference types="cypress" />

describe("Pantalla de tareas", () => {
    it("Renderiza la página correctamente", () => {
        cy.visit("https://proyecto-react-avanzado-nu.vercel.app/")
    })
})

describe('Verificar elementos en la tabla', () => {
    it('Debe mostrar once elementos en la tabla y verificar el último', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('#tasks-table tbody tr')
        .should('have.length', 11);
  
      cy.get('#tasks-table tbody tr')
        .last()
        .should('contain.text', 'Diseñar la página de configuración');
    });
  });

  // cypress/integration/tasks.spec.ts

describe('Tasks Table', () => {
  beforeEach(() => {
      // Asume que el servidor de desarrollo de Next.js se está ejecutando en localhost:3000
      cy.visit('http://localhost:3000')
  })

  it('should add a new task and assign it to a user', () => {
      // Test data
      const newTaskText = 'Nueva Tarea'
      const userToAssign = 'joseperez'

      // Enter new task text
      cy.get('#task-input').type(newTaskText)

      // Select user from dropdown
      cy.get('select#user-select').select(userToAssign)

      // Click the add task button
      cy.get('button#create-task-button').click()

      // Verify the new task is added to the table
      cy.get('table#tasks-table tbody tr').last().within(() => {
          cy.get('td').eq(0).should('contain', newTaskText) // Task text
          cy.get('td').eq(1).should('contain', userToAssign) // Assigned user
          cy.get('td').eq(2).should('contain', 'not-started') // Task status
      })
  })

  it('should assign the task to any user', () => {
      // Test data
      const newTaskText = 'Otra Tarea'
      const users = ['joseperez', 'mariagarcia'] // Add all users you have

      users.forEach(user => {
          // Enter new task text
          cy.get('#task-input').clear().type(newTaskText)

          // Select user from dropdown
          cy.get('select#user-select').select(user)

          // Click the add task button
          cy.get('button#create-task-button').click()

          // Verify the new task is added to the table
          cy.get('table#tasks-table tbody tr').last().within(() => {
              cy.get('td').eq(0).should('contain', newTaskText) // Task text
              cy.get('td').eq(1).should('contain', user) // Assigned user
              cy.get('td').eq(2).should('contain', 'not-started') // Task status
          })
      })
  })
});
