const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TenderApp", function () {
  let tenderApp;

  beforeEach(async () => {
    const TenderApp = await ethers.getContractFactory("TenderApp");
    tenderApp = await TenderApp.deploy();
    await tenderApp.deployed();
  });

  describe("createTender", function () {

    it("Should emit Announce event", async function () {
      await expect(tenderApp.createTender("From", "Title", "Description", "BidBond", 100, 200, 300, 400, "Keyword"))
        .to.emit(tenderApp, "Announce");
    });
  
    it("Should create a new Tender", async function () {
      await tenderApp.createTender("From", "Title", "Description", "BidBond", 100, 200, 300, 400, "Keyword");
      const tenders = await tenderApp.getTenders();
      
      // Access the latest tender (index 0)
      const latestTender = tenders[0];
  
      expect(latestTender.auther).to.equal(await tenderApp.signer.getAddress());
      expect(latestTender.from).to.equal("From");
      expect(latestTender.title).to.equal("Title");
      expect(latestTender.description).to.equal("Description");
      expect(latestTender.keyword).to.equal("Keyword");
      expect(latestTender.bidBond).to.equal("BidBond");
      expect(latestTender.prequalificationDeadline).to.equal(100);
      expect(latestTender.bidSubmissionDeadline).to.equal(200);
      expect(latestTender.contractSignDeadline).to.equal(300);
      expect(latestTender.estimatedProjectCost).to.equal(400);
    });
  });

  describe("getTenders", function () {
    it("Should return the latest 10 tenders", async function () {
      for (let i = 1; i <= 15; i++) {
        await tenderApp.createTender(
          ethers.utils.formatBytes32String(`From ${i}`),
          ethers.utils.formatBytes32String(`Title ${i}`),
          ethers.utils.formatBytes32String(`Description ${i}`),
          ethers.utils.formatBytes32String(`Bid Bond ${i}`),
          100,
          200,
          300,
          1000,
          ethers.utils.formatBytes32String(`Keyword ${i}`)
        );
      }

      const latestTenders = await tenderApp.getTenders();
      expect(latestTenders.length).to.equal(10);

      for (let i = 0; i < latestTenders.length; i++) {
        const tender = latestTenders[i];
        expect(tender.from).to.equal(ethers.utils.formatBytes32String(`From ${15 - i}`));
        expect(tender.title).to.equal(ethers.utils.formatBytes32String(`Title ${15 - i}`));
        expect(tender.description).to.equal(ethers.utils.formatBytes32String(`Description ${15 - i}`));
        expect(tender.bidBond).to.equal(ethers.utils.formatBytes32String(`Bid Bond ${15 - i}`));
        expect(tender.prequalificationDeadline).to.equal(100);
        expect(tender.bidSubmissionDeadline).to.equal(200);
        expect(tender.contractSignDeadline).to.equal(300);
        expect(tender.estimatedProjectCost).to.equal(1000);
        expect(tender.keyword).to.equal(ethers.utils.formatBytes32String(`Keyword ${15 - i}`));
      }
    });

    it("Should revert if there are no tenders available", async function () {
      await expect(tenderApp.getTenders()).to.be.revertedWith("No tenders available");
    });
  });

  describe("searchTenders", function () {
    it("Should return matching tenders", async function () {
      await tenderApp.createTender("From1", "Title1", "Description1", "BidBond1", 100, 200, 300, 400, "Keyword1");
      await tenderApp.createTender("From2", "Another Title", "Another Description", "BidBond2", 150, 250, 350, 450, "Keyword2");
      await tenderApp.createTender("From3", "Third Title", "Third Description", "BidBond3", 200, 300, 400, 500, "Keyword3");
        
      const matchingTenders = await tenderApp.searchTenders("Another");
      expect(matchingTenders.length).to.equal(1);
      const tender = matchingTenders[0];
      
      expect(tender.from).to.equal("From2");
      expect(tender.title).to.equal("Another Title");
      expect(tender.description).to.equal("Another Description");
      expect(tender.bidBond).to.equal("BidBond2");
      expect(tender.prequalificationDeadline).to.equal(150);
      expect(tender.bidSubmissionDeadline).to.equal(250);
      expect(tender.contractSignDeadline).to.equal(350);
      expect(tender.estimatedProjectCost).to.equal(450);
      expect(tender.keyword).to.equal("Keyword2");
    });
  
    it("Should revert if the search query is empty", async function () {
      await expect(tenderApp.searchTenders("")).to.be.revertedWith("Empty search query");
    });
  
    it("Should return an empty array if no matching tenders found", async function () {
      await tenderApp.createTender("From1", "Title1", "Description1", "BidBond1", 100, 200, 300, 400, "Keyword1");
      
      const matchingTenders = await tenderApp.searchTenders("Nonexistent");
      expect(matchingTenders.length).to.equal(0);
    });
  });
  
});
