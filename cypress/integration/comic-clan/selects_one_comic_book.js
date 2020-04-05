describe('comic book page', () => {
  it('select one comic book', () => {
    cy.visitHome();
    cy.getDataCy('searchInput').type('Banana');
    cy.getDataCy('searchButton').click();

    cy.getDataCy('comicBookSummaryContainer').should($summary => {
      expect($summary).to.have.length(1);
    });

    // click first comic book
    cy.getDataCy('comicBookSummaryContainer')
      .eq(0)
      .click();
    
    cy.url().should('contain', '/comicbook');
    cy.getDataCy('comicBookContainer').should($comicBookContainer => {
      expect($comicBookContainer.find('[data-cy=comickBookName]').text()).equal(
        'The True Story of Banana Man #955 (2002)',
      );
      expect(
        $comicBookContainer.find('[data-cy=comickBookWriter]').text(),
      ).equal('Writer: Donni Marjy');
      expect(
        $comicBookContainer.find('[data-cy=comickBookArtist]').text(),
      ).equal('Artist: Nanon Sib');
      expect(
        $comicBookContainer.find('[data-cy=comickBookPublication]').text(),
      ).equal('Publication: Lovely Ltd.');
    });

    cy.getDataCy('backLink').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
