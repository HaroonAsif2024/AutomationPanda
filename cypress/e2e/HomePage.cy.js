describe('Visit Automation Panda', () => {
    it('should load the Automation Panda homepage', () => {
        // Visit the URL
        cy.visit('https://automationpanda.com/');

        // Check if the page contains the expected text
        cy.contains('Automation Panda');
    });

    it('should verify the homepage title is visible', () => {
        cy.get('#post-19330 > :nth-child(1) > .entry-header > .entry-title')
            .should('be.visible')  // Check if the title is visible
            .scrollIntoView()      // Scroll into view
            .wait(2000);           // Wait for 2 seconds
    });

    it('should verify "Our Solutions" is present on the page', () => {
        cy.contains('Our Solutions') // Verify text is present on the page
            .should('be.visible')    // Check if it is visible
            .wait(2000);             // Wait for 2 seconds
    });

    it('should verify a specific UI element has the correct height', () => {
        cy.get('elementaddress') // Replace 'elementaddress' with the actual selector
            .should('have.css', 'height', '478px'); // Check if the height is 478px
    });
});
