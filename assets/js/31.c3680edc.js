(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{222:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"terminology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[t._v("#")]),t._v(" Terminology")]),t._v(" "),a("p",[t._v("SLP inherits Bitcoin terminology and adds onto it. This list is not meant to be exhaustive for Bitcoin terminology, instead hopefully including just what is needed to adequately describe the SLP definitions here. It is important to understand the different concepts on this page to be an effective SLP developer and communicator.")]),t._v(" "),a("h2",{attrs:{id:"address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address"}},[t._v("#")]),t._v(" Address")]),t._v(" "),a("p",[t._v("An address corresponds to a "),a("a",{attrs:{href:"#pubkey"}},[t._v("public key")]),t._v(" and is generally what you share with others either in messaging or with QR codes.")]),t._v(" "),a("h2",{attrs:{id:"base-unit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-unit"}},[t._v("#")]),t._v(" Base Unit")]),t._v(" "),a("p",[t._v("The smallest possible unit of a token. For BCH this is referred to as "),a("a",{attrs:{href:"#satoshi"}},[t._v("Satoshi")]),t._v(". For SLP tokens it is just called base unit. For example, "),a("a",{attrs:{href:"https://simpleledger.info/token/4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPICE"),a("OutboundLink")],1),t._v(" has Decimals of 8, so when you send 1 spice you are actually sending 10^8 SPICE, or 100000000 base units of SPICE. Compare this with "),a("a",{attrs:{href:"https://simpleledger.info/token/7f8889682d57369ed0e32336f8b7e0ffec625a35cca183f4e81fde4e71a538a1",target:"_blank",rel:"noopener noreferrer"}},[t._v("HONK"),a("OutboundLink")],1),t._v(" which has Decimals of 0, so sending 1 HONK is the same as sending 1 base unit of HONK. It's easiest to think of the Decimals parameter as for visual purposes only, although many higher level libraries do operate in decimalized units rather than base units.")]),t._v(" "),a("h2",{attrs:{id:"burn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#burn"}},[t._v("#")]),t._v(" Burn")]),t._v(" "),a("p",[t._v("Tokens can be burnt either by accident (such as by importing your wallet into non-SLP enabled wallet software) or intentionally by using tools to intentionally reduce the overall supply of your token.")]),t._v(" "),a("h2",{attrs:{id:"child-nft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#child-nft"}},[t._v("#")]),t._v(" Child NFT")]),t._v(" "),a("p",[t._v("Child tokens are made from performing a "),a("a",{attrs:{href:"#genesis"}},[t._v("Genesis")]),t._v(" by burning a "),a("a",{attrs:{href:"#nft-group"}},[t._v("NFT Group")]),t._v(" token. All child NFTs have a link to their parent/group, and so can represent multiple unique objects of the same kind.")]),t._v(" "),a("h2",{attrs:{id:"dag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag"}},[t._v("#")]),t._v(" DAG")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"#utxo"}},[t._v("UTXO")]),t._v(" model ensures that the graph of transactions is a directed (one direction, like time) acyclic (no cycles, like no wormholes) graph (not like a line on a piece of paper). It's mostly used to be precise, you can read more about it "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"dust-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dust-limit"}},[t._v("#")]),t._v(" Dust Limit")]),t._v(" "),a("p",[t._v("The minimum amount of "),a("a",{attrs:{href:"#satoshi"}},[t._v("satoshis")]),t._v(" allowed for an output, currently 546. Most SLP outputs will have this many satoshis because it is the minimum overhead they have to spend.")]),t._v(" "),a("h2",{attrs:{id:"federated-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#federated-validation"}},[t._v("#")]),t._v(" Federated Validation")]),t._v(" "),a("p",[t._v("Federated Validation is the idea to query multiple different third-party SLP validation services and ensure all or a large majority of their results are in agreement. This is necessarily weaker security than "),a("a",{attrs:{href:"#graph-search"}},[t._v("graph search")]),t._v(" however for resource constrained devices the performance benefits may outweigh the reduction in security. This is still a much better choice than having a single point of failure server.")]),t._v(" "),a("h2",{attrs:{id:"graph-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph-search"}},[t._v("#")]),t._v(" Graph Search")]),t._v(" "),a("p",[t._v("Graph Search is a method of trustless validation which reconstructs the "),a("a",{attrs:{href:"#dag"}},[t._v("DAG")]),t._v(" from data about raw Bitcoin transactions, and performs a client-side walk to validate the history is correct. Using the "),a("a",{attrs:{href:"#token-id"}},[t._v("Token Id")]),t._v(", the "),a("a",{attrs:{href:"#txid"}},[t._v("TXID")]),t._v(" we want to Graph Search, and the property that sha256 hashing is unbroken, we can ensure that the data received from a third party has not been tampered with. "),a("a",{attrs:{href:"/tooling/gs++"}},[t._v("GS++")]),t._v(" is the most popular and best performing Graph Search server.")]),t._v(" "),a("h2",{attrs:{id:"genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[t._v("#")]),t._v(" Genesis")]),t._v(" "),a("p",[t._v("The first transaction to create a token. For "),a("a",{attrs:{href:"#child-nft"}},[t._v("Child NFTs")]),t._v(" this involves burning a "),a("a",{attrs:{href:"#group-nft"}},[t._v("Group NFT")]),t._v(" token. However, for regula tokens you don't need any prior SLP - Genesis transactions can be created using only BCH "),a("a",{attrs:{href:"#utxo"}},[t._v("UTXOs")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"group-nft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-nft"}},[t._v("#")]),t._v(" Group NFT")]),t._v(" "),a("p",[t._v("Group NFTs act essentially as regular tokens, they can be minted or sent as normal. However, their special property allows for the creation of new "),a("a",{attrs:{href:"#nft-child"}},[t._v("NFT Child")]),t._v(" tokens by being burnt during a "),a("a",{attrs:{href:"#genesis"}},[t._v("Genesis")]),t._v(" transaction. Wallets and explorers may treat Group NFTs special, because they represent the ability to mint unique tokens in the future through the creation of NFT children.")]),t._v(" "),a("h2",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("p",[t._v("Inputs are comprised of an "),a("a",{attrs:{href:"#outpoint"}},[t._v("outpoint")]),t._v(", a signature script to spend from the "),a("a",{attrs:{href:"#script-pubkey"}},[t._v("script pubkey")]),t._v(", and a sequence number which isn't really used. In short, inputs consume "),a("a",{attrs:{href:"#utxo"}},[t._v("UTXOs")]),t._v(" and the amount of BCH and SLP in each input determines how much that transaction can send in each "),a("a",{attrs:{href:"#output"}},[t._v("output")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"mint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[t._v("#")]),t._v(" Mint")]),t._v(" "),a("p",[t._v("Mint is one of the possible transaction types for SLP. It allows for a transaction which has the "),a("a",{attrs:{href:"#minting-baton"}},[t._v("minting baton")]),t._v(" as an input to create new tokens.")]),t._v(" "),a("h2",{attrs:{id:"minting-baton"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minting-baton"}},[t._v("#")]),t._v(" Minting Baton")]),t._v(" "),a("p",[t._v("During "),a("RouterLink",{attrs:{to:"/specs/slp-token-type-1/#genesis-token-genesis-transaction"}},[t._v("Genesis")]),t._v(" you can choose to create a minting baton to continue minting tokens after the initial mint. The baton is a special "),a("a",{attrs:{href:"#utxo"}},[t._v("UTXO")]),t._v(" which gives the holder the ability to create new SLP tokens. You can choose to eventually stop minting capability by "),a("a",{attrs:{href:"#burn"}},[t._v("burning")]),t._v(" the minting baton.")],1),t._v(" "),a("h2",{attrs:{id:"nft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nft"}},[t._v("#")]),t._v(" NFT")]),t._v(" "),a("p",[t._v("Non-fungible Token, or in other words, a token where their exists only 1. You can make NFTs using "),a("RouterLink",{attrs:{to:"/specs/slp-token-type-1/"}},[t._v("TokenType1")]),t._v(", however it is usually better to use "),a("RouterLink",{attrs:{to:"/specs/slp-nft-1/"}},[t._v("NFT1")]),t._v(" as they give additional functionality such as "),a("a",{attrs:{href:"#group-nft"}},[t._v("Grouping")]),t._v(" and "),a("a",{attrs:{href:"#child-nft"}},[t._v("Child")]),t._v(". In addition, using NFT1 can allow for different handling by wallets and explorers to better represent the tokens special place as the only one of its kind.")],1),t._v(" "),a("h2",{attrs:{id:"op-return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#op-return"}},[t._v("#")]),t._v(" OP_RETURN")]),t._v(" "),a("p",[t._v("A script opcode used to store data on the blockchain. SLP's metadata is stored using OP_RETURN messages.")]),t._v(" "),a("h2",{attrs:{id:"outpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outpoint"}},[t._v("#")]),t._v(" Outpoint")]),t._v(" "),a("p",[t._v("A combination of a "),a("a",{attrs:{href:"#txid"}},[t._v("TXID")]),t._v(" and a "),a("a",{attrs:{href:"#vout"}},[t._v("Vout")]),t._v(" to identify a specific "),a("a",{attrs:{href:"#output"}},[t._v("output")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("p",[t._v("An output in a transaction contains both the amount of "),a("a",{attrs:{href:"#satoshi"}},[t._v("satoshis")]),t._v(" and a "),a("a",{attrs:{href:"#pubkey-script"}},[t._v("pubkey script")]),t._v(" allowing someone to spend the output in the future.")]),t._v(" "),a("h2",{attrs:{id:"public-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-key"}},[t._v("#")]),t._v(" Public Key")]),t._v(" "),a("p",[t._v("The public portion of your private key. These are used to generate "),a("a",{attrs:{href:"#address"}},[t._v("addresses")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"pubkey-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pubkey-script"}},[t._v("#")]),t._v(" Pubkey Script")]),t._v(" "),a("p",[t._v("Also known as scriptPubKey, these are scripts which constrain who can redeem the outputs. In most cases it will either be a person who can prove they own a certain "),a("a",{attrs:{href:"#public-key"}},[t._v("public key")]),t._v(" or a multisignature address.")]),t._v(" "),a("h2",{attrs:{id:"satoshi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satoshi"}},[t._v("#")]),t._v(" Satoshi")]),t._v(" "),a("p",[a("a",{attrs:{href:"#base-unit"}},[t._v("Base unit")]),t._v(" of Bitcoin. Also, the name of the creator of Bitcoin.")]),t._v(" "),a("h2",{attrs:{id:"satoshis-locked-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satoshis-locked-up"}},[t._v("#")]),t._v(" Satoshis Locked Up")]),t._v(" "),a("p",[t._v("The amount of "),a("a",{attrs:{href:"#satoshi"}},[t._v("satoshis")]),t._v(" associated with "),a("a",{attrs:{href:"#output"}},[t._v("outputs")]),t._v(" that contain SLP funds. These satoshis are normally considered locked as they can't be spent without performing a SLP transaction, and also because normally these outputs are "),a("a",{attrs:{href:"#dust-limit"}},[t._v("dust")]),t._v(" outputs.")]),t._v(" "),a("h2",{attrs:{id:"send"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[t._v("#")]),t._v(" Send")]),t._v(" "),a("p",[t._v("The most common operation in SLP, the simple act of transferring some tokens to someone else.")]),t._v(" "),a("h2",{attrs:{id:"staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" Staking")]),t._v(" "),a("p",[t._v("Staking is a scheme where token holders who have older "),a("a",{attrs:{href:"#utxo"}},[t._v("UTXOs")]),t._v(" receive some benefit, such as dividends or voting privileges.")]),t._v(" "),a("h2",{attrs:{id:"token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" Token")]),t._v(" "),a("p",[t._v("A token is some sort of tokenized asset or idea that has an associated "),a("a",{attrs:{href:"#token-id"}},[t._v("token id")]),t._v(" and was created using a "),a("a",{attrs:{href:"#genesis"}},[t._v("Genesis")]),t._v(" transaction. There are SLP Tokens, as well as tokens on other Blockchains as well.")]),t._v(" "),a("h2",{attrs:{id:"token-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-id"}},[t._v("#")]),t._v(" Token Id")]),t._v(" "),a("p",[t._v("A Token Id is the "),a("a",{attrs:{href:"#txid"}},[t._v("TXID")]),t._v(" of the "),a("a",{attrs:{href:"#genesis"}},[t._v("Genesis")]),t._v(" transaction for a specific "),a("a",{attrs:{href:"#token"}},[t._v("Token")]),t._v(". All future "),a("a",{attrs:{href:"#send"}},[t._v("sends")]),t._v(" and "),a("a",{attrs:{href:"#mint"}},[t._v("mints")]),t._v(" of the token must reference the Token Id inside the "),a("a",{attrs:{href:"#op-return"}},[t._v("OP_RETURN")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"tokengraph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tokengraph"}},[t._v("#")]),t._v(" Tokengraph")]),t._v(" "),a("p",[t._v("Tokengraph is the concept of an all purpose node that allows for querying data about the graph of transactions. "),a("a",{attrs:{href:"/tooling/slpdb"}},[t._v("SLPDB")]),t._v(" is an implementation of Tokengraph. There is additional description inside the "),a("RouterLink",{attrs:{to:"/specs/slp-token-type-1/#tokengraph"}},[t._v("spec")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"trusted-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trusted-validation"}},[t._v("#")]),t._v(" Trusted Validation")]),t._v(" "),a("p",[t._v("Validation of SLP transactions which rely on a single trusted source of truth. This can be very dangerous if it is a third-party server. However, if you are running your own infrastructure this is very safe. It is distinctly different from "),a("a",{attrs:{href:"#graph-search"}},[t._v("Graph Search")]),t._v(" in that this does not perform client-side validation. "),a("a",{attrs:{href:"#federated-validation"}},[t._v("Federated Validation")]),t._v(" is performing trusted validation but upon multiple sources of truth.")]),t._v(" "),a("h2",{attrs:{id:"txid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#txid"}},[t._v("#")]),t._v(" TXID")]),t._v(" "),a("p",[t._v("Transaction identifier. It is the hash of the transactions data.")]),t._v(" "),a("h2",{attrs:{id:"utxo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utxo"}},[t._v("#")]),t._v(" UTXO")]),t._v(" "),a("p",[t._v("An unspent output (Unspent TX Output) which can be spent as an "),a("a",{attrs:{href:"#input"}},[t._v("input")]),t._v(" in a later transaction. In the SLP context, UTXOs may have associated SLP tokens. SLP tracks ownership of tokens using only UTXOs, including the "),a("a",{attrs:{href:"#minting-baton"}},[t._v("mint baton")]),t._v(" as well. The UTXO model is different from Ethereum which uses an Account model, so far the UTXO model has been more performant whereas the Account model is better suited for advanced scripting.")]),t._v(" "),a("h2",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[t._v("#")]),t._v(" Validation")]),t._v(" "),a("p",[t._v("Because SLP transactions are not ensured by mining, we instead must perform our own validation of transactions. Someone could easily spoof the "),a("a",{attrs:{href:"#op-return"}},[t._v("OP_RETURN")]),t._v(" message to make it appear like they have sent many tokens, without actually owning any. Because of this, we must use some method of validation of transaction data, such as "),a("a",{attrs:{href:"#graph-search"}},[t._v("Graph Search")]),t._v(", "),a("a",{attrs:{href:"#federated-validation"}},[t._v("Federated Validation")]),t._v(", or "),a("a",{attrs:{href:"#trusted-validation"}},[t._v("Trusted Validation")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"vout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vout"}},[t._v("#")]),t._v(" Vout")]),t._v(" "),a("p",[t._v("Output vector. The second output of a transaction would be vout 2.")])])}),[],!1,null,null,null);e.default=r.exports}}]);