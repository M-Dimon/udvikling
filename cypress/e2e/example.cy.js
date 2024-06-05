// Test om siden loader
describe('Frontend loads', () => {
  //Fortæller den hvad den skal gøre
  it('visits the app', () => {
    //Her bruger vi så cypress, og vi vil have den besøger vores site.
    cy.request('http://localhost:5173').then((response) => {
      // Vi forventer en respons som status kode, der er lig 200
      expect(response.status).to.eq(200);
    }) //Dette tester at den kan besøge sitet.
  })
})


describe('Fronntend loads', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5173')
  })
})

describe('Check h1 tag on app has "You did it!"', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').should('have.text', 'You did it!')
  })
})