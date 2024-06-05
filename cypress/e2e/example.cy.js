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
