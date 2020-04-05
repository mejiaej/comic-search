describe('Filter by categories', () => {
  it('checks default categorie', () => {
    cy.visitHome();

    cy.getDataCy('pill').should($pill => {
      expect($pill).to.have.length(5);
      expect($pill.eq(0)).to.contain('Year');
      expect($pill.eq(0)).to.not.have.attr('role');

      expect($pill.eq(1)).to.contain('Writer');
      expect($pill.eq(1).attr('role')).to.contain('button');

      expect($pill.eq(2)).to.contain('Artist');
      expect($pill.eq(2).attr('role')).to.contain('button');

      expect($pill.eq(3)).to.contain('Owner');
      expect($pill.eq(3).attr('role')).to.contain('button');

      expect($pill.eq(4)).to.contain('Random');
      expect($pill.eq(4).attr('role')).to.contain('button');
      
     
    });
  });

  it('gets default 50 comicBookSummaries', () => {
    cy.visitHome();
    cy.get('[data-cy=comicBookSummaryContainer]').should($summary => {
      expect($summary, 'comicBookSummaryContainer').to.have.length(21);
    });
  });
});
