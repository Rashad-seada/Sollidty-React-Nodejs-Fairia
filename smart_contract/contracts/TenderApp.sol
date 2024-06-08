

pragma solidity 0.8.24;

contract TenderApp {

    event Announce();
    
    struct Applicants {
        uint256 tenderId; // Unique identifier for the tender
        address applicant;
        string form;
        string title;
        string description;
    }

    struct Tender {
        uint256 id; // Unique identifier for the tender

        address auther;
        string from;
        string title;
        string description;
        uint256 bidBond;
        uint256 prequalificationDeadline;
        uint256 bidSubmissionDeadline;
        uint256 contractSignDeadline;
        uint256 estimatedProjectCost;
        string keyword;
        uint256 timestamp;
    }

    Tender[] tenders;
    Applicants[] applicants;

    uint256 private latestIndex;

    constructor() {
        latestIndex = 0;
    }

    function getTenderById(uint256 id) public view returns (Tender memory) {
        require(id < tenders.length, "Invalid tender ID");
        return tenders[id];
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

        // Start index for retrieving tenders
        uint256 startIndex = (tenders.length > 10) ? tenders.length - 10 : 0;

        // Retrieve the latest 10 tenders
        for (uint256 i = 0; i < 10; i++) {
            if (startIndex + i < tenders.length) {
                latestTenders[i] = tenders[startIndex + i];
            } else {
                break; // Break the loop if we reached the end of tenders array
            }
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
        uint256 bidBond,
        uint256 prequalificationDeadline, 
        uint256 bidSubmissionDeadline, 
        uint256 contractSignDeadline, 
        uint256 estimatedProjectCost, 
        string memory keyword
    ) public {

        tenders.push(Tender(
            latestIndex,
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
        latestIndex = latestIndex + 1;
    }

    function applyToTender(uint256 tenderIndex, string memory form, string memory title, string memory description) public {
        require(tenderIndex < tenders.length, "Invalid tender index");
        //require(msg.value == tenders[tenderIndex].bidBond, "Invalid bid bond amount");

        

        Tender storage tender = tenders[tenderIndex];
        //require(msg.sender != tender.auther, "Applicants cannot be the tender author");

        applicants.push(Applicants({
            tenderId : tenderIndex,
            applicant: msg.sender,
            form: form,
            title: title,
            description: description
        }));
        
    }

    function getApplicantsByTender(uint256 tenderId) public view returns (Applicants[] memory) {
        // Create a dynamic array to store the matching applicants
        Applicants[] memory matchingApplicants = new Applicants[](applicants.length);

        uint256 count = 0;

        // Iterate over the list of applicants and check if their tenderId matches the given tenderId
        for (uint256 i = 0; i < applicants.length; i++) {
            Applicants memory currentApplicant = applicants[i];
            if (currentApplicant.tenderId == tenderId) {
                // Add the matching applicant to the array
                matchingApplicants[count] = currentApplicant;
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(matchingApplicants, count)
        }

        return matchingApplicants;
    }

    function getTendersByAuthor() public view returns (Tender[] memory) {
        // Create a dynamic array to store the matching tenders
        Tender[] memory matchingTenders = new Tender[](tenders.length);

        uint256 count = 0;

        // Iterate over the list of tenders and check if the author matches
        for (uint256 i = 0; i < tenders.length; i++) {
            Tender memory currentTender = tenders[i];
            if (currentTender.auther == msg.sender) {
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

    function getTendersByApplicant() public view returns (Tender[] memory) {
        // Create a dynamic array to store the matching tenders
        Tender[] memory applicantTenders = new Tender[](applicants.length);

        uint256 count = 0;

        // Iterate over the list of applicants and check if the applicant matches
        for (uint256 i = 0; i < applicants.length; i++) {
            if (applicants[i].applicant == msg.sender) {
                // Add the corresponding tender to the array
                applicantTenders[count] = tenders[applicants[i].tenderId];
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(applicantTenders, count)
        }

        return applicantTenders;
    }

    
}

