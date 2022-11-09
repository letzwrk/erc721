
const { expect } = require("chai") ;

describe ( "Deploy contract and mint token ", function ( ) {

    let deployer ; // owner of contract

    let MyToken ; 

    let myToken ; // this is the deployable contract 


    beforeEach ( async function ( ) {

        // Creates new instance for the contract by the interface and bytecode initcode
        [ deployer ] = await ethers.getContractFactory ( " MyToken " ) ; 

        MyToken = await ethers.getContractFactory( " MyToken " ) ; 

        myToken = await MyToken.deploy ( ) ; 

    } ) ;


    it ( " Test mint token " , async function ( ) {

        // DALL - E img ? ? ? ?
        var mt = await myToken.mintToken( " http:// " ) ;

        await mt.wait ( 1 ) ; 

        console.log ( " Here is your minted token: " , mt ) ; 

    } ) ;


} ) ;

