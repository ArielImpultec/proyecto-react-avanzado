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

  // describe('Agregar nueva tarea y verificar en la tabla', () => {
  //   it('Debe añadir una nueva tarea y verificar en la tabla', () => {
  //     cy.visit('http://localhost:3000');
      
  //     const nuevaTarea = 'Tarea de prueba';
  //     cy.get('input#input-tareas')
  //     .type(nuevaTarea)
  //     .should('have.value', nuevaTarea);

  //   const usuarioSeleccionado = 'joseperez';
  //   cy.get('select#user-select')
  //     .select(usuarioSeleccionado)
  //     .should('have.value', 1);
  //   cy.get('input#input-tareas').type('{enter}');
  //  cy.contains('table#tasks-table tbody tr', nuevaTarea)
  //     .should('exist');
  //    });
  // });
  
