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
      const newTaskText = 'Nueva Tarea'
      const userToAssign = 'joseperez'

      cy.get('#task-input').type(newTaskText)
      cy.get('select#user-select').select(userToAssign)
      cy.get('button#create-task-button').click()

      cy.get('table#tasks-table tbody tr').last().within(() => {
          cy.get('td').eq(0).should('contain', newTaskText)
          cy.get('td').eq(1).should('contain', userToAssign)
          cy.get('td').eq(2).should('contain', 'not-started')
      })
  })

  it('should assign the task to any user', () => {
      const newTaskText = 'Otra Tarea'
      const users = ['joseperez', 'mariagarcia']

      users.forEach(user => {
          cy.get('#task-input').clear().type(newTaskText)
          cy.get('select#user-select').select(user)
          cy.get('button#create-task-button').click()
          cy.get('table#tasks-table tbody tr').last().within(() => {
              cy.get('td').eq(0).should('contain', newTaskText)
              cy.get('td').eq(1).should('contain', user)
              cy.get('td').eq(2).should('contain', 'not-started')
          })
      })
  })
});
