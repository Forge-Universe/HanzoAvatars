(function(){var e={3260:function(e,t,n){"use strict";var a=n(9242),i=n(3396);function r(e,t,n,a,r,s){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o)}var s=n(7327),o=n(6520),l=n(2578),u=n(6750),p=n(7365),d=n(8473),y=n(3922),c=n(3297),m=n(672),b=n(9511);const f={name:"OpenSea",generateCollectionUrl:(e,t)=>"https://"+(t?"www":"testnets")+".opensea.io/collection/"+e};var g=JSON.parse('["0xC5EBdd487fF97ce2698b69cc09EF0BEfdE476944","0x9542e847696df79129aC4e72f588496cF6268d49","0x807fE6EBA180B07b5E55a7D0557e816d2c47CEf4"]');const h={testnet:b.cn,mainnet:b.CO,contractName:"HanzoAvatars",tokenName:"Hanzo Avatars",tokenSymbol:"HNZAVA",hiddenMetadataUri:"ipfs://bafybeigogldcdwnyjv2pgyqikatpb3n4gl7z4twwuw6cssn5wqmu4z3gei/hidden.json",maxSupply:5e3,whitelistSale:{price:.04,maxMintAmountPerTx:1,whitelistSupply:500},preSale:{price:100,maxMintAmountPerTx:0},publicSale:{price:.06,maxMintAmountPerTx:500},contractAddress:"0xf52AA35fa1213D97942db88f3473783407552DAe",walletConnectProjectId:"54b86bafe334a726226e97077e25c877",marketplaceIdentifier:"hanzo-avatars",marketplaceConfig:f,whitelistAddresses:g,royaltyReceiver:"0x760401007f6dbCcdb925990f9B33D1bfe5B16417",royaltyNumerator:"1000",treasury:"0x760401007f6dbCcdb925990f9B33D1bfe5B16417"};var w=h,A=n(9282),T=n(3374),v=n.n(T);class k{constructor(){(0,s.Z)(this,"merkleTree",void 0)}getMerkleTree(){if(void 0===this.merkleTree){const e=g.map((e=>v()(e)));this.merkleTree=new A.MerkleTree(e,v(),{sortPairs:!0})}return this.merkleTree}getProofForAddress(e){return this.getMerkleTree().getHexProof(v()(e))}getRawProofForAddress(e){return this.getProofForAddress(e).toString().replaceAll("'","").replaceAll(" ","")}contains(e){return this.getMerkleTree().getLeafIndex(Buffer.from(v()(e)))>=0}}var M=new k;const C=[{stateMutability:"nonpayable",type:"constructor",inputs:[{name:"_tokenName",internalType:"string",type:"string"},{name:"_tokenSymbol",internalType:"string",type:"string"},{name:"_cost",internalType:"uint256",type:"uint256"},{name:"_maxSupply",internalType:"uint256",type:"uint256"},{name:"_maxMintAmountPerTx",internalType:"uint256",type:"uint256"},{name:"_hiddenMetadataUri",internalType:"string",type:"string"},{name:"_royaltyReceiver",internalType:"address",type:"address"},{name:"_royaltyNumerator",internalType:"uint96",type:"uint96"},{name:"_treasury",internalType:"address",type:"address"}]},{type:"error",inputs:[],name:"ApprovalCallerNotOwnerNorApproved"},{type:"error",inputs:[],name:"ApprovalQueryForNonexistentToken"},{type:"error",inputs:[],name:"BalanceQueryForZeroAddress"},{type:"error",inputs:[],name:"InvalidQueryRange"},{type:"error",inputs:[],name:"MintERC2309QuantityExceedsLimit"},{type:"error",inputs:[],name:"MintToZeroAddress"},{type:"error",inputs:[],name:"MintZeroQuantity"},{type:"error",inputs:[{name:"operator",internalType:"address",type:"address"}],name:"OperatorNotAllowed"},{type:"error",inputs:[],name:"OwnerQueryForNonexistentToken"},{type:"error",inputs:[],name:"OwnershipNotInitializedForExtraData"},{type:"error",inputs:[],name:"TransferCallerNotOwnerNorApproved"},{type:"error",inputs:[],name:"TransferFromIncorrectOwner"},{type:"error",inputs:[],name:"TransferToNonERC721ReceiverImplementer"},{type:"error",inputs:[],name:"TransferToZeroAddress"},{type:"error",inputs:[],name:"URIQueryForNonexistentToken"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Approval"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"operator",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"bool",type:"bool",indexed:!1}],name:"ApprovalForAll"},{type:"event",anonymous:!1,inputs:[{name:"fromTokenId",internalType:"uint256",type:"uint256",indexed:!0},{name:"toTokenId",internalType:"uint256",type:"uint256",indexed:!1},{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0}],name:"ConsecutiveTransfer"},{type:"event",anonymous:!1,inputs:[{name:"previousOwner",internalType:"address",type:"address",indexed:!0},{name:"newOwner",internalType:"address",type:"address",indexed:!0}],name:"OwnershipTransferred"},{type:"event",anonymous:!1,inputs:[{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Transfer"},{stateMutability:"view",type:"function",inputs:[],name:"OPERATOR_FILTER_REGISTRY",outputs:[{name:"",internalType:"contract IOperatorFilterRegistry",type:"address"}]},{stateMutability:"payable",type:"function",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"approve",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"balanceOf",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"cost",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"explicitOwnershipOf",outputs:[{name:"",internalType:"struct IERC721A.TokenOwnership",type:"tuple",components:[{name:"addr",internalType:"address",type:"address"},{name:"startTimestamp",internalType:"uint64",type:"uint64"},{name:"burned",internalType:"bool",type:"bool"},{name:"extraData",internalType:"uint24",type:"uint24"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenIds",internalType:"uint256[]",type:"uint256[]"}],name:"explicitOwnershipsOf",outputs:[{name:"",internalType:"struct IERC721A.TokenOwnership[]",type:"tuple[]",components:[{name:"addr",internalType:"address",type:"address"},{name:"startTimestamp",internalType:"uint64",type:"uint64"},{name:"burned",internalType:"bool",type:"bool"},{name:"extraData",internalType:"uint24",type:"uint24"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"getApproved",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[],name:"hiddenMetadataUri",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"},{name:"operator",internalType:"address",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"maxMintAmountPerTx",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"maxSupply",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"merkleRoot",outputs:[{name:"",internalType:"bytes32",type:"bytes32"}]},{stateMutability:"payable",type:"function",inputs:[{name:"_mintAmount",internalType:"uint256",type:"uint256"}],name:"mint",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_mintAmount",internalType:"uint256",type:"uint256"},{name:"_receiver",internalType:"address",type:"address"}],name:"mintForAddress",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"name",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"owner",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ownerOf",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[],name:"paused",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"nonpayable",type:"function",inputs:[],name:"renounceOwnership",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"revealed",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"salePrice",internalType:"uint256",type:"uint256"}],name:"royaltyInfo",outputs:[{name:"",internalType:"address",type:"address"},{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"payable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"payable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"data",internalType:"bytes",type:"bytes"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"approved",internalType:"bool",type:"bool"}],name:"setApprovalForAll",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_cost",internalType:"uint256",type:"uint256"}],name:"setCost",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"receiver",internalType:"address",type:"address"},{name:"feeNumerator",internalType:"uint96",type:"uint96"}],name:"setDefaultRoyalty",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_hiddenMetadataUri",internalType:"string",type:"string"}],name:"setHiddenMetadataUri",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_maxMintAmountPerTx",internalType:"uint256",type:"uint256"}],name:"setMaxMintAmountPerTx",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_merkleRoot",internalType:"bytes32",type:"bytes32"}],name:"setMerkleRoot",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_state",internalType:"bool",type:"bool"}],name:"setPaused",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_state",internalType:"bool",type:"bool"}],name:"setRevealed",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_wallet",internalType:"address",type:"address"}],name:"setTreasuryWallet",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_uriPrefix",internalType:"string",type:"string"}],name:"setUriPrefix",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_uriSuffix",internalType:"string",type:"string"}],name:"setUriSuffix",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_state",internalType:"bool",type:"bool"}],name:"setWhitelistMintEnabled",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_whitelistSupply",internalType:"uint256",type:"uint256"}],name:"setwhitelistSupply",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"interfaceId",internalType:"bytes4",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"symbol",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"_tokenId",internalType:"uint256",type:"uint256"}],name:"tokenURI",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"tokensOfOwner",outputs:[{name:"",internalType:"uint256[]",type:"uint256[]"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"},{name:"start",internalType:"uint256",type:"uint256"},{name:"stop",internalType:"uint256",type:"uint256"}],name:"tokensOfOwnerIn",outputs:[{name:"",internalType:"uint256[]",type:"uint256[]"}]},{stateMutability:"view",type:"function",inputs:[],name:"totalSupply",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"payable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"transferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"newOwner",internalType:"address",type:"address"}],name:"transferOwnership",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"uriPrefix",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"uriSuffix",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"address",type:"address"}],name:"whitelistClaimed",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"payable",type:"function",inputs:[{name:"_mintAmount",internalType:"uint256",type:"uint256"},{name:"_merkleProof",internalType:"bytes32[]",type:"bytes32[]"}],name:"whitelistMint",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"whitelistMintEnabled",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"whitelistMinted",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"whitelistSupply",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[],name:"withdraw",outputs:[]}],x={contract:null,initDone:!1,userAddress:null,network:null,networkConfig:w.mainnet,totalSupply:0,maxSupply:0,maxMintAmountPerTx:0,tokenPrice:BigInt(0),isPaused:!0,loading:!1,isWhitelistMintEnabled:!1,isUserInWhitelist:!1,merkleProofManualAddressStatus:null,errorMessage:null},S=w.walletConnectProjectId,{chains:O,publicClient:U,webSocketPublicClient:P}=(0,d.QB)([y.RJ],[(0,c.I)()]),N=(0,d._g)({autoConnect:!0,connectors:(0,u.gu)({projectId:S,chains:O}),publicClient:U,webSocketPublicClient:P}),I=new u.J0(N,O),B=new p.E({projectId:S},I),E={address:w.contractAddress,abi:C},W=(0,l.Q_)("Web3",{state:()=>x,actions:{async init(){console.log("Web3 init start"),this.registerWalletEvents(),this.contract=(0,d.uN)({...E,walletClient:I}),this.$patch({maxSupply:Number(await this.contract.read.maxSupply([])),totalSupply:Number(await this.contract.read.totalSupply([])),maxMintAmountPerTx:Number(await this.contract.read.maxMintAmountPerTx([])),tokenPrice:await this.contract.read.cost([]),isPaused:await this.contract.read.paused([]),isWhitelistMintEnabled:await this.contract.read.whitelistMintEnabled([]),isUserInWhitelist:M.contains(this.userAddress??"")}),this.initDone=!0},async registerWalletEvents(){I.watchAccount((({isConnected:e,address:t})=>{this.userAddress=e?t:null})),I.watchNetwork((({chain:e})=>{this.network=e?{name:e.name,chainId:e.id}:null}))},setError(e=null){let t="Unknown error...";null===e||"string"===typeof e?t=e:"object"===typeof e&&(e?.details?t=e.details:void 0!==e?.error?.message?t=e.error.message:void 0!==e?.data?.message?t=e.data.message:void 0!==e?.message&&(t=e.message)),this.errorMessage=null===t?null:t.charAt(0).toUpperCase()+t.slice(1)},async connectWallet(){await B.openModal()},copyMerkleProofToClipboard(e){const t=M.getRawProofForAddress(e);t.length<1?this.merkleProofManualAddressStatus=!1:(navigator.clipboard.writeText(t),this.merkleProofManualAddressStatus=!0)},async handleTransaction(e){const{hash:t}=await(0,d.n9)(e);m.Am.info(`\n        <p>Transaction sent! Please wait...</p>\n        <a href=${this.generateTransactionUrl(t)} target="_blank" rel="noopener">View on ${this.networkConfig.blockExplorer.name}</a>\n      `,{dangerouslyHTMLString:!0,position:"bottom-center"}),await(0,d.Mn)({hash:t}),this.totalSupply=Number(await this.contract.read.totalSupply([])),m.Am.info(`\n        <p>Success!</p>\n        <a href=${this.generateTransactionUrl(t)} target="_blank" rel="noopener">View on ${this.networkConfig.blockExplorer.name}</a>\n      `,{dangerouslyHTMLString:!0,position:"bottom-center"})},async mintTokens(e){try{this.loading=!0;const t=this.tokenPrice*BigInt(e),{request:n}=await(0,d.$q)({...E,functionName:"mint",args:[BigInt(e)],value:t});await this.handleTransaction(n),this.loading=!1}catch(t){this.setError(t),this.loading=!1}},async whitelistMintTokens(e){try{this.loading=!0;const t=this.tokenPrice*BigInt(e),{request:n}=await(0,d.$q)({...E,functionName:"whitelistMint",args:[BigInt(e),M.getProofForAddress(this.userAddress)],value:t});await this.handleTransaction(n),this.loading=!1}catch(t){this.setError(t),this.loading=!1}}},getters:{getUserAddress(){return this.userAddress},isWalletConnected(){return!!this.userAddress},isContractReady(){return void 0!==this.contract&&this.initDone},isSoldOut(){return 0!==this.maxSupply&&this.totalSupply>=this.maxSupply},isNotMainnet(){return null!==this.network&&this.network.chainId!==w.mainnet.chainId},generateContractUrl(){return this.networkConfig.blockExplorer.generateContractUrl(w.contractAddress)},generateMarketplaceUrl(){return w.marketplaceConfig.generateCollectionUrl(w.marketplaceIdentifier,!this.isNotMainnet)},generateTransactionUrl(e){return t=>e.networkConfig.blockExplorer.generateTransactionUrl(t)},marketPlaceName(){return w.marketplaceConfig.name}}});class F extends o.w3{constructor(...e){super(...e),(0,s.Z)(this,"Web3",W())}mounted(){this.Web3.init()}}var _=n(89);const z=(0,_.Z)(F,[["render",r]]);var H=z,R=n(2483),D=n(4870),Y=n(7139),j=n.p+"img/nft_1.deaacf84.jpg",L=n.p+"img/nft_2.889f9030.jpg",q=n.p+"img/nft_3.b028d948.jpg",Z=n.p+"img/nft_4.e717750d.jpg",Q=n.p+"img/nft_5.e3b3abff.jpg",J=n.p+"img/nft_6.50ef4c43.jpg",V=n.p+"img/plain_typo.7d9e0605.png",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9maPwYUSgLi0lYCDFqYqPMpKEkjVEGm5k3b2bU/Hi9N5MmW2U7RYmNXwv+ArbKWikiJVvWxAY955mpkcy5nXs+93vvOd17LtiCSSVlVA9CKp3VA36vayG06HI84aCOGnppCyuGNj47O01Fe7+lyorX/Vatyuf+tYaoaihQVSs8pmh6VnhSeHo1q1m8JdyqJMJR4RPhPl0uKHxj6ZEiP1scL/KnxXow4ANbs7Ar/osjv1hJ6ClheTldqWROKd3HeolTTc/PSewU78AggB8vLqaYwIeHIUZl9tCPmwFZUSF/8Cd/hozkKjJr5NFZIU6CLH2i5qS6KjEmuiojSd7q/9++GrFhd7G60ws1j6b52g2OTfgqmObHgWl+HYL9Ac7T5fzMPoy8iV4oa1170LQOpxdlLbINZxvQfq+F9fCPZBe3xWLwcgyNIWi5gvqlYs9K+xzdQXBNvuoSdnahR843LX8DMstnzra8+bcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJ+SURBVEiJtZVNSBVRFMd//+nJTG2soO6TCoKgog9yk5QEJViQtYxoU4uIFrmoiGjZIoRAIloYYriJlMJFiz4WbqSCIAIlIjCSaBO9oVKCPmYq57R480R9PnXivf9m5tx7zv2d+3WuqIIsDleb2VmgDVgPRMAw0O8F+b7pvklUOCxpRGlgE7BXvuv8D2irmQ0Ayyu4PJR02YytYBeBOkmNSrO4ClwCtXuBu5kButHM3mbIs+AF+QaLw1Ve2rAlHaoriQpXFg0261vYa0rjQGcSFfrN7FRpxkPAvmlOg5La5buxitA43GRmoxnAf4A64I2knaUZz16uA2Y2mkSFDovDhjnB0JgBCpADurwgv02++1U6XLvN7HmFgAjoBz2QeCbffU1jmszsRQbwhBfkV5YMlX6SqNALnFwg+AfwChgDlgJHpo+xgMZBzgvcXwBZHNYB+4FhM+sBDgHefCP8p957QX5DycgBk2Z2DVgBvAOsBlCAD9MNT75LQN2AA/YAS2oEfjkDDCBxC4hrBKTI0GA52Hc/JR2sIfc78LQMnMKHJO0A7gPfqO5e98ovnuYycKoJ4F6aXdXAksoen9wsuwm4Wy1gqhvy3ceyZGY3JFF4HexclaCfJTXId5OzO8oKhRe480BHNaiS2uaCwjzlzuJws5m1As3AUTLeb0nH5bs7lforlkb5blRSD8X7vdh6XIKeng8KoCQq5LwgP3XULQ7rDZoxOwEcywIExtOZPl4wuSQOd2F2BtgOLAPWpt+sui3pgnz3ZTHOOcEI0iMzW0f2xz0CBpC6Pd9Ves/n1Iy9S5e5BbOWNIk1QD3gA78pVrRPwGvgiaQh+S7MmCwA/wBv+9wNRndN6gAAAABJRU5ErkJggg==",X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9maPwYUSgLi0lYCDFqYqPMpKEkjVEGm5k3b2bU/Hi9N5MmW2U7RYmNXwv+ArbKWikiJVvWxAY955mpkcy5nXs+93vvOd17LtiCSSVlVA9CKp3VA36vayG06HI84aCOGnppCyuGNj47O01Fe7+lyorX/Vatyuf+tYaoaihQVSs8pmh6VnhSeHo1q1m8JdyqJMJR4RPhPl0uKHxj6ZEiP1scL/KnxXow4ANbs7Ar/osjv1hJ6ClheTldqWROKd3HeolTTc/PSewU78AggB8vLqaYwIeHIUZl9tCPmwFZUSF/8Cd/hozkKjJr5NFZIU6CLH2i5qS6KjEmuiojSd7q/9++GrFhd7G60ws1j6b52g2OTfgqmObHgWl+HYL9Ac7T5fzMPoy8iV4oa1170LQOpxdlLbINZxvQfq+F9fCPZBe3xWLwcgyNIWi5gvqlYs9K+xzdQXBNvuoSdnahR843LX8DMstnzra8+bcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAKMSURBVEiJvdU7iFNZHMfx7++i3PhgVwS9wccuaqOCT0S00UbFBRkERddBhyncbgsLUbS3stDKRiwUFBsLEQURbCx84U4Ed4WpZIv1HthFUYsclfvbwgQymWSSm1H/EHLv/5HPOTm5RHyncAy7bP8GrJF0Xt8YW2L7CDACrGytfRO4iGEP9igwBMzs0JLP+FqYY1hh+zAwgr28R/vDacNFDPuwR2wPdSh/BHLgp7Z8bSDYMayyPQwMT7G7a5Iu2D4/CZbG+j5jxzDT5gD4MLB7ql5J+5VmN4p6fgf4pa38WdLCnjt2DOtsD9s+BCzt0X63gX4o6vkr4OcOPX8pzd50hB3DbJu94FHbO3stDngLOpFUsouOYX5Rzz8Ac7r0jgFMgB3DZtu/Ns4v6wMEuCzpuNLsX8ew0fbj9s+dGKoBzHAMs2wfBEZtb+8TAxhvgLcai95h+16vIYmnX2D7NfBjCRDgrKSTSjM30CHbN/uYew88AUiARyXAB5I2J5XqiRZ0uE8UoKY0+wSQJJXqbkkrgdPA8y4DEXQsqVS3Kc2eNpNFDEdtXy2x8FrzYtJzXMSwAfsAcBBYBtyS9LvS7O+2vmPY50qgIB1N0uxSR7gZjkHAOqVZrb1W1MNp8JlSKCBptdLs5ZRwt8XYnAGfKosC/ySV6uLmTVIKhvUDotByvqVhzMIBUYA/Bofx3EFVSQ+mATOv7f42qJ8fmYFnrYmy/8c/tFyPJZXqHgDH8NL2FbpvZFxp9l9rouyOFzTen0va2kwqza5KWgu86DI36ZEsC28B3knaojSLrQWl2Z8N/HqHucclnYnhGDY4hkW9+op6frKo526+HMOmacFlwjHsKur5eFHP7zuGSd/s/4zYHgM1lhmuAAAAAElFTkSuQmCC";const G={className:"collection-status"},$={className:"user-address"},ee=(0,i._)("span",{className:"label"},"Wallet address:",-1),te={className:"address"},ne={className:"supply"},ae={className:"current-sale"};function ie(e,t,n,a,r,s){return(0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("div",$,[ee,(0,i._)("span",te,(0,Y.zw)(e.Web3.userAddress),1)]),(0,i._)("div",ne,(0,Y.zw)(e.Web3.totalSupply)+"/"+(0,Y.zw)(e.Web3.maxSupply),1),(0,i._)("div",ae,(0,Y.zw)(e.isSaleOpen?e.Web3.isWhitelistMintEnabled?"Whitelist only":"Open":"Closed"),1)])}class re extends o.w3{constructor(...e){super(...e),(0,s.Z)(this,"Web3",W())}get isSaleOpen(){return(this.Web3.isWhitelistMintEnabled||!this.Web3.isPaused)&&!this.Web3.isSoldOut}}const se=(0,_.Z)(re,[["render",ie]]);var oe=se;const le={key:0,class:"mint-widget"},ue={className:"price"},pe=(0,i._)("strong",null,"Mint price:",-1),de={className:"controls"},ye=["disabled"],ce={className:"mint-amount"},me=["disabled"],be=["disabled"],fe={key:1},ge={className:"cannot-mint"},he=(0,i._)("strong",null,"whitelist",-1),we=(0,i._)("strong",null,"paused",-1),Ae=(0,i._)("br",null,null,-1);function Te(e,t,n,a,r,s){return e.canMint?((0,i.wg)(),(0,i.iD)("div",le,[(0,i._)("div",ue,[pe,(0,i.Uk)(" "+(0,Y.zw)(e.formattedPrice)+" "+(0,Y.zw)(e.Web3.networkConfig.symbol),1)]),(0,i._)("div",de,[(0,i._)("button",{className:"decrease",onClick:t[0]||(t[0]=t=>e.changeAmount(-1)),disabled:e.Web3.loading},"-",8,ye),(0,i._)("span",ce,(0,Y.zw)(e.mintAmount),1),(0,i._)("button",{className:"increase",onClick:t[1]||(t[1]=t=>e.changeAmount(1)),disabled:e.Web3.loading},"+",8,me)]),(0,i._)("button",{className:"mintButton",onClick:t[2]||(t[2]=(...t)=>e.mint&&e.mint(...t)),disabled:e.Web3.loading||0==e.mintAmount},"Mint",8,be)])):((0,i.wg)(),(0,i.iD)("div",fe,[(0,i._)("div",ge,[e.Web3.isWhitelistMintEnabled?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("You are not included in the "),he,(0,i.Uk)(".")],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)("The contract is "),we,(0,i.Uk)(".")],64)),Ae,(0,i.Uk)(" Please come back during the next sale! ")])]))}var ve=n(758);class ke extends o.w3{constructor(...e){super(...e),(0,s.Z)(this,"Web3",W()),(0,s.Z)(this,"mintAmount",0)}get canMint(){return!this.Web3.isPaused||this.canWhitelistMint}get canWhitelistMint(){return this.Web3.isWhitelistMintEnabled&&this.Web3.isUserInWhitelist}get formattedPrice(){return ve.dF(this.Web3.tokenPrice*BigInt(this.mintAmount)).toString()}changeAmount(e){this.mintAmount+e>=0&&this.mintAmount+e<=this.Web3.maxMintAmountPerTx&&(this.mintAmount+=e)}async mint(){this.Web3.isPaused?await this.Web3.whitelistMintTokens(this.mintAmount):await this.Web3.mintTokens(this.mintAmount)}}const Me=(0,_.Z)(ke,[["render",Te]]);var Ce=Me;const xe={id:"minting-dapp",class:"preview"},Se=(0,i.uE)('<div class="sidebar"><ul><li><img src="'+j+'" alt="Hanzo Nft Collection"></li><li><img src="'+L+'" alt="Hanzo Nft Collection"></li><li><img src="'+q+'" alt="Hanzo Nft Collection"></li><li><img src="'+Z+'" alt="Hanzo Nft Collection"></li><li><img src="'+Q+'" alt="Hanzo Nft Collection"></li><li><img src="'+J+'" alt="Hanzo Nft Collection"></li><li><img src="'+j+'" alt="Hanzo Nft Collection"></li><li><img src="'+L+'" alt="Hanzo Nft Collection"></li></ul></div><img id="logo" src="'+V+'" alt="Logo Hanzo">',2),Oe={key:0,class:"alert alert-warning",role:"alert"},Ue={class:"small"},Pe={key:1,class:"alert alert-warning alert-dismissible fade show",role:"alert"},Ne={key:2,class:"containerMintStatus"},Ie={key:1},Be=(0,i._)("h2",null,[(0,i.Uk)("Hanzo Avatars have been "),(0,i._)("strong",null,"sold out"),(0,i.Uk)("! "),(0,i._)("span",{class:"emoji"},"🥳")],-1),Ee=["href"],We={key:3,class:"collection-not-ready"},Fe=(0,i._)("svg",{class:"spinner",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,i._)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,i._)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),_e={key:4,class:"no-wallet"},ze={key:5,class:"walletTop"},He=(0,i.uE)('<div class="socialLinks"><ul><li><a href="https://twitter.com/LegendOfHanzo" target="_blank"><img src="'+K+'" alt="hanzo twitter"></a></li><li><a href="https://t.me/hanzommorpg" target="_blank"><img src="'+X+'" alt="hanzo telegram"></a></li></ul></div>',1);var Re=(0,i.aZ)({__name:"HomeView",setup(e){const t=W(),n=(0,D.iH)("");return(0,i.YP)((()=>t.userAddress),(e=>{!n.value&&e&&(n.value=e?.toString())})),(e,n)=>((0,i.wg)(),(0,i.iD)("div",xe,[Se,(0,D.SU)(t).isNotMainnet?((0,i.wg)(),(0,i.iD)("div",Oe,[(0,i.Uk)(" You are not connected to the Ethereum network. "),(0,i._)("span",Ue,[(0,i.Uk)("Current network: "),(0,i._)("strong",null,(0,Y.zw)((0,D.SU)(t).network?.name),1)])])):(0,i.kq)("",!0),(0,D.SU)(t).errorMessage?((0,i.wg)(),(0,i.iD)("div",Pe,[(0,i.Uk)((0,Y.zw)((0,D.SU)(t).errorMessage)+" ",1),(0,i._)("button",{onClick:n[0]||(n[0]=e=>(0,D.SU)(t).setError()),type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})])):(0,i.kq)("",!0),(0,D.SU)(t).isWalletConnected&&(0,D.SU)(t).isContractReady?((0,i.wg)(),(0,i.iD)("div",Ne,[(0,i.Wm)(oe),(0,D.SU)(t).isSoldOut?((0,i.wg)(),(0,i.iD)("div",Ie,[Be,(0,i.Uk)(" You can buy from our beloved holders on "),(0,i._)("a",{href:(0,D.SU)(t).generateMarketplaceUrl,target:"_blank"},(0,Y.zw)((0,D.SU)(t).marketPlaceName),9,Ee),(0,i.Uk)(". ")])):((0,i.wg)(),(0,i.j4)(Ce,{key:0}))])):(0,i.kq)("",!0),(0,D.SU)(t).isContractReady?(0,D.SU)(t).isWalletConnected?(0,D.SU)(t).isWalletConnected?((0,i.wg)(),(0,i.iD)("div",ze,[(0,i._)("button",{class:"connectButton",onClick:n[2]||(n[2]=(...e)=>(0,D.SU)(t).connectWallet&&(0,D.SU)(t).connectWallet(...e))})])):(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",_e,[(0,i._)("button",{class:"connectButton",onClick:n[1]||(n[1]=(...e)=>(0,D.SU)(t).connectWallet&&(0,D.SU)(t).connectWallet(...e))},"Connect Wallet")])):((0,i.wg)(),(0,i.iD)("div",We,[Fe,(0,i.Uk)(" Loading collection data... ")])),He]))}});const De=Re;var Ye=De;const je=[{path:"/",name:"home",component:Ye}],Le=(0,R.p7)({history:(0,R.PO)(),routes:je});var qe=Le;const Ze=(0,l.WB)();var Qe=Ze,Je=(n(2166),n(5361));window.Buffer=window.Buffer||Je.Buffer,(0,a.ri)(H).use(qe).use(Qe).mount("#app")},9511:function(e,t){"use strict";t.CO=t.cn=void 0,t.cn={chainId:11155111,symbol:"ETH (test)",blockExplorer:{name:"Etherscan (Sepolia)",generateContractUrl:e=>`https://sepolia.etherscan.io/address/${e}`,generateTransactionUrl:e=>`https://sepolia.etherscan.io/tx/${e}`}},t.CO={chainId:1,symbol:"ETH",blockExplorer:{name:"Etherscan",generateContractUrl:e=>`https://etherscan.io/address/${e}`,generateTransactionUrl:e=>`https://etherscan.io/tx/${e}`}}},5883:function(){},6601:function(){},2361:function(){},4616:function(){}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,r){if(!a){var s=1/0;for(p=0;p<e.length;p++){a=e[p][0],i=e[p][1],r=e[p][2];for(var o=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(o=!1,r<s&&(s=r));if(o){e.splice(p--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{335:"560a6a0b",612:"c71de24b",776:"b0cd37f0",780:"34c2a190",892:"6203744a",943:"ab80b63d",979:"e656b47c"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-web3:";n.l=function(a,i,r,s){if(e[a])e[a].push(i);else{var o,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var d=u[p];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+r),o.src=a),e[a]=[i];var y=function(t,n){o.onerror=o.onload=null,clearTimeout(c);var i=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(n)})),t)return t(n)},c=setTimeout(y.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=y.bind(null,o.onerror),o.onload=y.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=r);var s=n.p+n.u(t),o=new Error,l=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,s=a[0],o=a[1],l=a[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var p=l(n)}for(t&&t(a);u<s.length;u++)r=s[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},a=self["webpackChunkvue_web3"]=self["webpackChunkvue_web3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3260)}));a=n.O(a)})();
//# sourceMappingURL=app.0a6160b7.js.map