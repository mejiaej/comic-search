describe('Filter by categories', () => {
  it('checks default categorie', () => {
    cy.visitHome();
    cy.getDataCy('searchInput').type('Banana').should('have.value', 'Banana');
    cy.getDataCy('searchButton').click();

    cy.getDataCy('comicBookSummaryContainer').should($summary => {
      expect($summary).to.have.length(1);
    });
  });
});
