//Describe , It Function, Expect
describe("Form test", () => {
  it("test that form inputs are working", () => {
    cy.visit("http://localhost:3001/");
  });

  //Disabled Button Test
  cy.get("button#submit").should("be.disabled");

  //Name Input Test
  cy.get('[for="name"] > input')
    .type("Brandon")
    .should("have.value", "Brandon");

  //Email Input Test
  cy.get('[for="email"] > input').type("brandonverfurth@gmail.com");

  //Password Input Test
  cy.get('[for="password"] > input').type("password");
});

it("errors displayed", () => {
  cy.get('[for="email"] > input').clear();

    cy.get('[data-cy="email-error-msg"]')
    .should('have.value', '')
});
})
