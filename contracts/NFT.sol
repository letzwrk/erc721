// SPDX-License-Identifier: MIT 

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract MyToken is ERC721 {

    uint public tokenCounter;

    constructor ( ) ERC721 ( "MyToken", "MT" ) {

        tokenCounter = 0;

    }


function mintToken ( string memory _tokenURI ) public {

    _safeMint ( msg.sender, tokenCounter );

    _setTokenURI ( tokenCounter, msg.sender );

    tokenCounter++;

        

}

} ; 





