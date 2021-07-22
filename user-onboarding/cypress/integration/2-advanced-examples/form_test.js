//Describe , It Function, Expect
describe("Form test", () => {
  it("test that form inputs are working", () => {
    cy.visit("http://localhost:3001/");

    //Disabled Button Test
    cy.get("button#submit").should("be.disabled");

    //Name Input Test
    cy.get('[for="name"] > input')
      .type("Brandon")
      .should("have.value", "Brandon");

    //Email Input Test
    cy.get('[for="email"] > input')
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");

    //Password Input Test
    cy.get('[for="password"] > input').type("password");

    //Checkbox Clicked Test
    cy.get('[data-cy="terms"]').click().should("have.checked", true);

    //Checkbox Test
    cy.get("button#submit").should("not.be.disabled");
  });

  it("errors displayed", () => {
    cy.get('[for="email"] > input').clear();

    cy.get('[data-cy="email-error-msg"]').should("have.value", "");
  });
});
