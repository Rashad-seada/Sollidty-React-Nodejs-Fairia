const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TenderApp", function () {
  let tenderApp;

  beforeEach(async () => {
    const TenderApp = await ethers.getContractFactory("TenderApp");
    tenderApp = await TenderApp.deploy();
    
    
  });

  describe("createTender", function () {

    it("Should emit Announce event", async function () {
      await expect(tenderApp.createTender("Title", "Description", "Keyword", 100, 200))
        .to.emit(tenderApp, "Announce");
    });

   it("Should create a new Tender", async function () {
    await tenderApp.createTender("Title", "Description", "Keyword", 100, 200);
    const tenders = await tenderApp.getTenders();
    
    // Access the latest tender (index 0)
    const latestTender = tenders[0];

    expect(latestTender.auther).to.equal(await tenderApp.signer.getAddress());
    expect(latestTender.title).to.equal("Title");
    expect(latestTender.description).to.equal("Description");
    expect(latestTender.keyword).to.equal("Keyword");
    expect(latestTender.bidBond).to.equal(100);
    expect(latestTender.estimatedCost).to.equal(200);
  });
  });

  describe("getTenders", function () {
    it("Should return the latest 10 tenders", async function () {
      for (let i = 1; i <= 15; i++) {
        await tenderApp.createTender(`Title ${i}`, `Description ${i}`, `Keyword ${i}`, 100, 200);
      }
      const latestTenders = await tenderApp.getTenders();
      expect(latestTenders.length).to.equal(10);
      for (let i = 0; i < latestTenders.length; i++) {
        const tender = latestTenders[i];
        expect(tender.title).to.equal(`Title ${15 - i}`);
        expect(tender.description).to.equal(`Description ${15 - i}`);
        expect(tender.keyword).to.equal(`Keyword ${15 - i}`);
        expect(tender.bidBond).to.equal(100);
        expect(tender.estimatedCost).to.equal(200);
      }
    });

    it("Should revert if there are no tenders available", async function () {
      await expect(tenderApp.getTenders()).to.be.revertedWith("No tenders available");
    });
  });

  describe("searchTenders", function () {
    it("Should return matching tenders", async function () {
      await tenderApp.createTender("Title", "Description", "Keyword", 100, 200);
      await tenderApp.createTender("Another Title", "Another Description", "Another Keyword", 100, 200);
      await tenderApp.createTender("Third Title", "Third Description", "Third Keyword", 100, 200);
      
      const matchingTenders = await tenderApp.searchTenders("Another");
      expect(matchingTenders.length).to.equal(1);
      const tender = matchingTenders[0];
      expect(tender.title).to.equal("Another Title");
      expect(tender.description).to.equal("Another Description");
      expect(tender.keyword).to.equal("Another Keyword");
      expect(tender.bidBond).to.equal(100);
      expect(tender.estimatedCost).to.equal(200);
    });

    it("Should revert if the search query is empty", async function () {
      await expect(tenderApp.searchTenders("")).to.be.revertedWith("Empty search query");
    });

    it("Should return an empty array if no matching tenders found", async function () {
      await tenderApp.createTender("Title", "Description", "Keyword", 100, 200);
      const matchingTenders = await tenderApp.searchTenders("Nonexistent");
      expect(matchingTenders.length).to.equal(0);
    });
  });
});
