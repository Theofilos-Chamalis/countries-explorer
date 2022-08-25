describe("Navigation to details page", () => {
  it("Should navigate to the details page of Albania", () => {
    // Start from the index page
    cy.visit("/");

    // Find the card that contains the "Albania" string and click it
    cy.contains("Albania").click();

    // The new url should include "/countryName=Albania"
    cy.url().should("include", "?countryName=Albania");

    // The new page should contain an h1 with "Albania"
    cy.get("h1").contains("Albania");
  });
});

describe("Filtering by name and navigation to details page", () => {
  it("Should enter greece in the filter and navigate to its detail page", () => {
    // Start from the index page
    cy.visit("/");

    // Find the input field and type "greece" into it
    cy.get("input").type("greece");

    // Find the card that contains the "Albania" string and click it
    cy.contains("Greece").click();

    // The new url should include "/countryName=Greece"
    cy.url().should("include", "?countryName=Greece");

    // The new page should contain an h1 with "Greece"
    cy.get("h1").contains("Greece");
  });
});

describe("Filtering based on region", () => {
  it("Should select the Oceania filter and include Fiji but not Albania", () => {
    // Start from the index page
    cy.visit("/");

    // Click to open the dropdown menu
    cy.get("[id^=dropdownDefault]").click();

    // Find the list item "Oceania and click it
    cy.get("p").contains("Oceania").click();

    // The results should contain Fiji
    cy.contains("Fiji").should("be.visible");

    // The results should not contain Albania
    cy.contains("Albania").should("not.exist");
  });
});

export default {};
