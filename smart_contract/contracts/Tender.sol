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

    function getLeatestTenders() public view returns (Tender[10] memory){
        
    }

    function AnnounceTender(
        address auther,
        string memory title,
        string memory description,
        string memory keyword,
        uint256 bidBond,
        uint256 estimatedCost
    ) public {



    }
    
}