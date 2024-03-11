// SPDX-License-Identifier: UNLICENSED 
pragma solidity 0.8.24;

contract TenderApp {

    event Announce();

    struct Tender {
        address auther;
        string title;
        string description;
        string keyword;
        uint256 bidBond;
        uint256 estimatedCost;
        uint256 timestamp;
    }

    Tender[] tender;
    uint256 private latestIndex;

    constructor() {
        latestIndex = 0;
    }

    function getLeatestTenders() public view returns (Tender[10] memory){
       require(tender.length > 0, "No tenders available");

        // Create an array to store the latest tenders
        Tender[10] memory latestTenders;

        // Start from the latest index and retrieve the 10 latest tenders
        for (uint256 i = 0; i < 10 && latestIndex >= i; i++) {
            latestTenders[i] = tender[latestIndex - i];
        }

        return latestTenders;
    }

    function AnnounceTender(
        string memory title,
        string memory description,
        string memory keyword,
        uint256 bidBond,
        uint256 estimatedCost
    ) public {

        tender.push(Tender(msg.sender, title, description, keyword, bidBond, estimatedCost,block.timestamp));
        emit Announce();

        // Update the latest index
        latestIndex = tender.length - 1;

    }
    
}