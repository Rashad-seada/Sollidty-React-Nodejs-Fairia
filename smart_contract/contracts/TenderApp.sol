

pragma solidity 0.8.24;

contract TenderApp {

    event Announce();
    
    struct Applicants {
        uint256 id; // Unique identifier for the tender
        uint256 tenderId; // Unique identifier for the tender
        address applicant;
        string form;
        string title;
        string description;
        bool isCompleted;
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
    uint256 private latestApplicationsIndex;

    constructor() {
        latestIndex = 0;
        latestApplicationsIndex = 0;
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
            id : latestApplicationsIndex
            tenderId : tenderIndex,
            applicant: msg.sender,
            form: form,
            title: title,
            description: description,
            isCompleted : false
        }));

        latestApplicationsIndex = latestApplicationsIndex + 1;
        
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

    // New function to get applicants by sender address
    function getApplicantsByAuther() public view returns (Applicants[] memory) {
        // Create a dynamic array to store the matching applicants
        Applicants[] memory senderApplicants = new Applicants[](applicants.length);

        uint256 count = 0;

        // Iterate over the list of applicants and check if the applicant matches msg.sender
        for (uint256 i = 0; i < applicants.length; i++) {
            if (applicants[i].applicant == msg.sender) {
                // Add the matching applicant to the array
                senderApplicants[count] = applicants[i];
                count++;
            }
        }

        // Resize the array to remove any unused space
        assembly {
            mstore(senderApplicants, count)
        }

        return senderApplicants;
    }

    function completeApplication(
        uint256 applicationId,
        uint256 tenderId,

        uint256 answer1,
        uint256 answer2,
        uint256 answer3,
        uint256 answer4,
        uint256 answer5,
        uint256 answer6,
        uint256 answer7,
        uint256 answer8,
        uint256 answer9,
        uint256 answer10,
        uint256 answer11,
        uint256 answer12,
        uint256 answer13,
        uint256 answer14,
        uint256 answer15,
        uint256 answer16,
        uint256 answer17,
        uint256 answer18,
        uint256 answer19,
        uint256 answer20,
        uint256 answer21,
        uint256 answer22,
        uint256 answer23,
        uint256 answer24,
        uint256 answer25,
        uint256 answer26,
        uint256 answer27,
        uint256 answer28,
        uint256 answer29,
        uint256 answer30,
        uint256 answer31,
        uint256 answer32,
        uint256 answer33,
        uint256 answer34,
        uint256 answer35,
        uint256 answer36,
        uint256 answer37,
        uint256 answer38,
        uint256 answer39,
        uint256 answer40,
        uint256 answer41,
        uint256 answer42,
        uint256 answer43,
        uint256 answer44,
        uint256 answer45,
        uint256 answer46,
        uint256 answer47,
        uint256 answer48,
        uint256 answer49,
        uint256 answer50,
        uint256 answer51,
        uint256 answer52,
        uint256 answer53,
    ) public {

        require(tenderId < tenders.length, "Invalid tender index");
        require(applicationId < applicants.length, "Invalid applicant index");

        // yes (1) , no (2)
        uint256 totalScore = 0;

        if(answer1 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer2 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer3 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer4 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer5 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer6 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer7 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer8 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

        
        if(answer9 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer10 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer11 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        
        if(answer12 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        // well defined (1) clear (2) unclear (3)
        if(answer13 == 1){
          totalScore += 10 * 0.1;
        }else if(answer13 == 2) {
          totalScore += 6 * 0.1;
        } else {
          totalScore += 5 * 0.1;
        }
      
        if(answer14 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer15 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer16 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer17 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer18 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer19 == 1){
          totalScore += 10 * 0.3;
        }else {
          totalScore += 5 * 0.3;
        }

        if(answer20 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

        if(answer21 == 1){
          totalScore += 10 * 0.4;
        }else {
          totalScore += 5 * 0.4;
        }

        
        if(answer22 >= 10){
          totalScore += 10 * 0.4;
        } else if(answer22 >= 6) {
          totalScore += 6 * 0.4;
        } else {
          totalScore += 5 * 0.4;
        }

          if(answer23 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

          if(answer24 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

          if(answer25 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer26 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        // hight (1) limited (2) low (3)
        if(answer27 == 1){
          totalScore += 10 * 0.3;
        } else if(answer22 == 2) {
          totalScore += 6 * 0.3;
        } else {
          totalScore += 5 * 0.3;
        }

        // hight (1) limited (2) low (3)
        if(answer28 == 1){
          totalScore += 10 * 0.3;
        } else if(answer22 == 2) {
          totalScore += 6 * 0.3;
        } else {
          totalScore += 5 * 0.3;
        }

        // hight (1) limited (2) low (3)
        if(answer29 == 1){
          totalScore += 10 * 0.3;
        } else if(answer22 == 2) {
          totalScore += 6 * 0.3;
        } else {
          totalScore += 5 * 0.3;
        }

        if(answer30 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer31 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer32 >= 3){
          totalScore += 10 * 0.5;
        }else{
          totalScore += 5 * 0.5;
        }

        if(answer33 < 3){
          totalScore += 2 * 0.7;
        }else if(answer33 >= 3 && answer33 <= 5){
          totalScore += 5 * 0.7;
        }else if(answer33 >= 6 && answer33 <= 10){
          totalScore += 7 * 0.7;
        }else if(answer33 > 10){
          totalScore += 10 * 0.7;
        }

        // hight (1) moderate (2) limited (3) non-familiar (4)
        if(answer34 == 1){
          totalScore += 10 * 0.2;
        }else if(answer34 == 2){
          totalScore += 7 * 0.2;
        }else if(answer34 == 3){
          totalScore += 5 * 0.2;
        }else if(answer34 == 4){
          totalScore += 2 * 0.2;
        }

        // extensive (1) standard (2) no relevant (3)
        if(answer35 == 1){
          totalScore += 10 * 0.2;
        }else if(answer35 == 2){
          totalScore += 6 * 0.2;
        }else if(answer35 == 3){
          totalScore += 3 * 0.2;
        }

        if(answer36 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        if(answer37 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

        if(answer38 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

        if(answer39 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

        if(answer40 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

        if(answer41 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

        if(answer42 == 1){
          totalScore += 10 * 0.2;
        }else {
          totalScore += 5 * 0.2;
        }

         // pending litigation (1)
         // resolved past litigation (2) 
         // no litigation record (3)
        if(answer43 == 1){
          totalScore += 3 * 0.2;
        }else if(answer43 == 2){
          totalScore += 6 * 0.2;
        }else if(answer43 == 3){
          totalScore += 10 * 0.2;
        }

        if(answer44 == 1){
          totalScore += 10 * 0.3;
        }else {
          totalScore += 5 * 0.3;
        }

        if(answer45 == 1){
          totalScore += 10 * 0.1;
        }else {
          totalScore += 5 * 0.1;
        }

        // No (1)
        // Single bad (2) 
        // two or more (3)
        if(answer46 == 1){
          totalScore += 3 * 0.005;
        }else if(answer46 == 2){
          totalScore += 6 * 0.005;
        }else if(answer46 == 3){
          totalScore += 10 * 0.005;
        }

        if(answer47 == 1){
          totalScore += 10 * 0.005;
        }else {
          totalScore += 5 * 0.005;
        }

        if(answer48 == 1){
          totalScore += 10 * 0.01;
        }else {
          totalScore += 5 * 0.01;
        }

        if(answer49 == 1){
          totalScore += 10 * 0.01;
        }else {
          totalScore += 5 * 0.01;
        }

        if(answer50 == 1){
          totalScore += 10 * 0.01;
        }else {
          totalScore += 5 * 0.01;
        }

        if(answer51 == 1){
          totalScore += 10 * 0.02;
        }else {
          totalScore += 5 * 0.02;
        }

        if(answer52 == 1){
          totalScore += 10 * 0.07;
        }else {
          totalScore += 5 * 0.07;
        }

        if(answer53 == 1){
          totalScore += 10 * 0.05;
        }else {
          totalScore += 5 * 0.05;
        }

        

    }
    
}

