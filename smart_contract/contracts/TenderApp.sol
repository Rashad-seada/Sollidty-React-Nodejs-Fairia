pragma solidity 0.8.24;

contract TenderApp {

    event Announce();

    struct Tender {
        address auther;
        string from;
        string title;
        string description;
        string bidBond;
        uint256 prequalificationDeadline;
        uint256 bidSubmissionDeadline;
        uint256 contractSignDeadline;
        uint256 estimatedProjectCost;
        string keyword;
        uint256 timestamp;
    }

    Tender[] tenders;
    uint256 private latestIndex;

    constructor() {
        latestIndex = 0;
    }

    function stringContains(string memory str, string memory substr) internal pure returns (bool) {
        bytes memory strBytes = bytes(str);
        bytes memory substrBytes = bytes(substr);
        uint256 j = 0;
        for (uint256 i = 0; i < strBytes.length; i++) {
            if (strBytes[i] == substrBytes[j]) {
                j++;
                if (j == substrBytes.length) {
                    return true;
                }
            } else {
                j = 0;
            }
        }
        return false;
    }

    function getTenders() public view returns (Tender[10] memory){
        require(tenders.length > 0, "No tenders available");

        // Create an array to store the latest tenders
        Tender[10] memory latestTenders;

        // Start from the latest index and retrieve the 10 latest tenders
        for (uint256 i = 0; i < 10 && latestIndex >= i; i++) {
            latestTenders[i] = tenders[latestIndex - i];
        }

        return latestTenders;
    }

    function searchTenders(string memory query) public view returns (Tender[] memory){
        require(bytes(query).length > 0, "Empty search query");

        // Create a dynamic array to store the matching tenders
        Tender[] memory matchingTenders = new Tender[](tenders.length);

        uint256 count = 0;

        // Iterate over the list of tenders and check if the query matches any field
        for (uint256 i = 0; i < tenders.length; i++) {
            Tender memory currentTender = tenders[i];
            if (stringContains(currentTender.title, query) || stringContains(currentTender.keyword, query)) {
                // Add the matching tender to the array
                matchingTenders[count] = currentTender;
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(matchingTenders, count)
        }

        return matchingTenders;
    }

    function createTender(
        string memory from,
        string memory title,
        string memory description,
        string memory bidBond,
        uint256 prequalificationDeadline, 
        uint256 bidSubmissionDeadline, 
        uint256 contractSignDeadline, 
        uint256 estimatedProjectCost, 
        string memory keyword
    ) public {

        tenders.push(Tender(
            msg.sender,
            from,
            title,
            description,
            bidBond,
            prequalificationDeadline,
            bidSubmissionDeadline,
            contractSignDeadline,
            estimatedProjectCost,
            keyword,
            block.timestamp
        ));
        emit Announce();
        // Update the latest index
        latestIndex = tenders.length - 1;
    }
    
}
