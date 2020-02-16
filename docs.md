<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [MultiClient][1]
    -   [Parameters][2]
    -   [addr][3]
    -   [clients][4]
    -   [close][5]
    -   [dial][6]
        -   [Parameters][7]
    -   [getPublicKey][8]
    -   [getSeed][9]
    -   [identifier][10]
    -   [isClosed][11]
    -   [isReady][12]
    -   [listen][13]
        -   [Parameters][14]
    -   [on][15]
        -   [Parameters][16]
    -   [onConnect][17]
        -   [Parameters][18]
    -   [onMessage][19]
        -   [Parameters][20]
    -   [onSession][21]
        -   [Parameters][22]
    -   [publish][23]
        -   [Parameters][24]
    -   [readyClientIDs][25]
    -   [send][26]
        -   [Parameters][27]
    -   [sendWithClient][28]
        -   [Parameters][29]
-   [Client][30]
    -   [Parameters][31]
    -   [addr][32]
    -   [close][33]
    -   [getPublicKey][34]
    -   [getSeed][35]
    -   [getSubscribers][36]
        -   [Parameters][37]
    -   [getSubscribersCount][38]
        -   [Parameters][39]
    -   [getSubscription][40]
        -   [Parameters][41]
    -   [identifier][42]
    -   [isClosed][43]
    -   [isReady][44]
    -   [on][45]
        -   [Parameters][46]
    -   [onConnect][47]
        -   [Parameters][48]
    -   [onMessage][49]
        -   [Parameters][50]
    -   [publish][51]
        -   [Parameters][52]
    -   [send][53]
        -   [Parameters][54]
-   [Wallet][55]
    -   [Parameters][56]
    -   [address][57]
    -   [createOrUpdateNanoPay][58]
        -   [Parameters][59]
    -   [deleteName][60]
        -   [Parameters][61]
    -   [getBalance][62]
        -   [Parameters][63]
    -   [getNonce][64]
        -   [Parameters][65]
    -   [getPublicKey][66]
    -   [getSeed][67]
    -   [registerName][68]
        -   [Parameters][69]
    -   [sendTransaction][70]
        -   [Parameters][71]
    -   [subscribe][72]
        -   [Parameters][73]
    -   [toJSON][74]
    -   [transferTo][75]
        -   [Parameters][76]
    -   [unsubscribe][77]
        -   [Parameters][78]
    -   [verifyPassword][79]
        -   [Parameters][80]
    -   [version][81]
    -   [fromJSON][82]
        -   [Parameters][83]
    -   [getBalance][84]
        -   [Parameters][85]
    -   [getNonce][86]
        -   [Parameters][87]
    -   [publicKeyToAddress][88]
        -   [Parameters][89]
    -   [sendTransaction][90]
        -   [Parameters][91]
    -   [verifyAddress][92]
        -   [Parameters][93]
-   [Amount][94]
-   [ConnectHandler][95]
-   [CreateTransactionOptions][96]
    -   [Properties][97]
-   [Destination][98]
-   [DialOptions][99]
    -   [Properties][100]
-   [Message][101]
    -   [Properties][102]
-   [MessageData][103]
-   [MessageHandler][104]
-   [PublishOptions][105]
    -   [Properties][106]
-   [ReplyData][107]
-   [SendOptions][108]
    -   [Properties][109]
-   [SessionHandler][110]
-   [TransactionOptions][111]
    -   [Properties][112]
-   [TxnOrHash][113]

## MultiClient

NKN client that sends data to and receives data from other NKN clients.

### Parameters

-   `options` **[Object][114]** Client configuration (optional, default `{}`)
    -   `options.seed` **[string][115]** Secret seed (64 hex characters). If empty, a random seed will be used. (optional, default `undefined`)
    -   `options.identifier` **[string][115]** Identifier used to differentiate multiple clients sharing the same secret seed. (optional, default `undefined`)
    -   `options.reconnectIntervalMin` **[number][116]** Minimal reconnect interval in ms. (optional, default `1000`)
    -   `options.reconnectIntervalMax` **[number][116]** Maximal reconnect interval in ms. (optional, default `64000`)
    -   `options.responseTimeout` **[number][116]** Message response timeout in ms. Zero disables timeout. (optional, default `5000`)
    -   `options.msgHoldingSeconds` **[number][116]** Maximal message holding time in second. Message might be cached and held by node up to this duration if destination client is not online. Zero disables cache. (optional, default `0`)
    -   `options.encrypt` **[boolean][117]** Whether to end to end encrypt message. (optional, default `true`)
    -   `options.seedRpcServerAddr` **[string][115]** Seed RPC server address used to join the network. (optional, default `'https://mainnet-rpc-node-0001.nkn.org/mainnet/api/wallet'`)
    -   `options.tls` **[boolean][117]** Force to use wss instead of ws protocol. If not defined, wss will only be used in https location. (optional, default `undefined`)
    -   `options.numSubClients` **[number][116]** Number of sub clients to create. (optional, default `3`)
    -   `options.originalClient` **[boolean][117]** Whether to create client with no additional identifier prefix added. This client is not counted towards sub clients controlled by `options.numSubClients`. (optional, default `false`)
    -   `options.msgCacheExpiration` **[number][116]** Message pid cache expiration time in ms. This cache is used to remove duplicate messages received by different clients. (optional, default `300000`)
    -   `options.sessionConfig` **[Object][114]** Session configuration (optional, default `{}`)

### addr

Client address, which will be `identifier.pubicKeyHex` if `identifier` is not empty, otherwise just `pubicKeyHex`.

Type: [string][115]

### clients

Underlying NKN clients used to send/receive data.

Type: {}

### close

Close the client and all sessions.

Returns **[Promise][118]&lt;void>** 

### dial

Dial a session to a remote NKN address.

#### Parameters

-   `remoteAddr` **[string][115]** 
-   `options` **[DialOptions][119]**  (optional, default `{}`)

Returns **[Promise][118]&lt;ncp.Session>** 

### getPublicKey

Get the public key of the client.

Returns **[string][115]** Public key as hex string.

### getSeed

Get the secret seed of the client.

Returns **[string][115]** Secret seed as hex string.

### identifier

Address identifier.

Type: [string][115]

### isClosed

Whether client is closed.

Type: [boolean][117]

### isReady

Whether client is ready (connected to a node).

Type: [boolean][117]

### listen

Start accepting sessions from addresses, which could be one or an array of
RegExp. If addrs is a string or string array, each element will be
converted to RegExp. Session from NKN address that matches any RegExp in
addrs will be allowed. When addrs is null or undefined, any address will be
accepted. Each function call will overwrite previous listening addresses.

#### Parameters

-   `addrs` **([RegExp][120] \| [Array][121]&lt;[RegExp][120]> | [string][115] \| [Array][121]&lt;[string][115]> | null | void)** 

### on

#### Parameters

-   `evt` **[string][115]** 
-   `func` **function (): any** 

**Meta**

-   **deprecated**: please use onConnect, onMessage, onSession, etc.


### onConnect

Add event listener function that will be called when at least one sub
client is connected to node. Multiple listeners will be called sequentially
in the order of added.

#### Parameters

-   `func` **[ConnectHandler][122]** 

### onMessage

Add event listener function that will be called when client receives a
message. Multiple listeners will be called sequentially in the order of
added. Can be an async function, in which case each call will wait for
promise to resolve before calling next listener function. If the first
non-null and non-undefined returned value is `Uint8Array` or `string`,
the value will be sent back as reply; if the first non-null and
non-undefined returned value is `false`, no reply or ACK will be sent;
if all handler functions return `null` or `undefined`, an ACK indicating
msg received will be sent back.

#### Parameters

-   `func` **[MessageHandler][123]** 

### onSession

Add event listener function that will be called when client accepts a new
session.

#### Parameters

-   `func` **[SessionHandler][124]** 

### publish

Send byte or string data to all subscribers of a topic using all available
clients.

#### Parameters

-   `topic` **[string][115]** 
-   `data` **[MessageData][125]** 
-   `options` **[PublishOptions][126]**  (optional, default `{}`)

Returns **[Promise][118]&lt;null>** A promise that will be resolved with null when send success.

### readyClientIDs

Get the list of clientID that are ready.

Returns **[Array][121]&lt;[string][115]>** 

### send

Send byte or string data to a single or an array of destination using all
available clients.

#### Parameters

-   `dest` **[Destination][127]** 
-   `data` **[MessageData][125]** 
-   `options` **[SendOptions][128]**  (optional, default `{}`)

Returns **[Promise][118]&lt;[ReplyData][129]>** A promise that will be resolved when reply or ACK from destination is received, or reject if send fail or message timeout. If dest is an array with more than one element, or `options.noReply=true`, the promise will resolve with null as soon as send success.

### sendWithClient

Send byte or string data to a single or an array of destination using the
client with given clientID. Typically `send` should be used instead for
better reliability and lower latency.

#### Parameters

-   `clientID` **[string][115]** 
-   `dest` **[Destination][127]** 
-   `data` **[Uint8Array][130]** 
-   `options` **[SendOptions][128]**  (optional, default `{}`)

Returns **[Promise][118]&lt;[ReplyData][129]>** A promise that will be resolved when reply or ACK from destination is received, or reject if send fail or message timeout. If dest is an array with more than one element, or `options.noReply=true`, the promise will resolve with null as soon as send success.

## Client

NKN client that sends data to and receives data from other NKN clients.
Typically you might want to use [MultiClient][1] for better
reliability and lower latency.

### Parameters

-   `options` **[Object][114]** Client configuration (optional, default `{}`)
    -   `options.seed` **[string][115]** Secret seed (64 hex characters). If empty, a random seed will be used. (optional, default `undefined`)
    -   `options.identifier` **[string][115]** Identifier used to differentiate multiple clients sharing the same secret seed. (optional, default `undefined`)
    -   `options.reconnectIntervalMin` **[number][116]** Minimal reconnect interval in ms. (optional, default `1000`)
    -   `options.reconnectIntervalMax` **[number][116]** Maximal reconnect interval in ms. (optional, default `64000`)
    -   `options.responseTimeout` **[number][116]** Message response timeout in ms. Zero disables timeout. (optional, default `5000`)
    -   `options.msgHoldingSeconds` **[number][116]** Maximal message holding time in second. Message might be cached and held by node up to this duration if destination client is not online. Zero disables cache. (optional, default `0`)
    -   `options.encrypt` **[boolean][117]** Whether to end to end encrypt message. (optional, default `true`)
    -   `options.seedRpcServerAddr` **[string][115]** Seed RPC server address used to join the network. (optional, default `'https://mainnet-rpc-node-0001.nkn.org/mainnet/api/wallet'`)
    -   `options.tls` **[boolean][117]** Force to use wss instead of ws protocol. If not defined, wss will only be used in https location. (optional, default `undefined`)

### addr

Client address, which will be `identifier.pubicKeyHex` if `identifier` is not empty, otherwise just `pubicKeyHex`.

Type: [string][115]

### close

Close the client.

### getPublicKey

Get the public key of the client.

Returns **[string][115]** Public key as hex string.

### getSeed

Get the secret seed of the client.

Returns **[string][115]** Secret seed as hex string.

### getSubscribers

Get subscribers of a topic.

#### Parameters

-   `topic` **[string][115]** 
-   `options` **{offset: [number][116]?, limit: [number][116]?, meta: [boolean][117]?, txPool: [boolean][117]?}** Get subscribers options. (optional, default `{}`)
    -   `options.offset` **[number][116]** Offset of subscribers to get. (optional, default `0`)
    -   `options.limit` **[number][116]** Max number of subscribers to get. This does not affect subscribers in txpool. (optional, default `1000`)
    -   `options.meta` **[boolean][117]** Whether to include metadata of subscribers in the topic. (optional, default `false`)
    -   `options.txPool` **[boolean][117]** Whether to include subscribers whose subscribe transaction is still in txpool. Enabling this will get subscribers sooner after they send subscribe transactions, but might affect the correctness of subscribers because transactions in txpool is not guaranteed to be packed into a block. (optional, default `false`)

Returns **[Promise][118]&lt;{subscribers: ([Array][121]&lt;[string][115]> | {}), subscribersInTxPool: ([Array][121]&lt;[string][115]> | {})?}>** A promise that will be resolved with subscribers info. Note that `options.meta=false/true` will cause results to be an array (of subscriber address) or map (subscriber address -> metadata), respectively.

### getSubscribersCount

Get subscribers count of a topic.

#### Parameters

-   `topic` **[string][115]** 

Returns **[Promise][118]&lt;[number][116]>** 

### getSubscription

Get the subscription details of a subscriber in a topic.

#### Parameters

-   `topic` **[string][115]** 
-   `subscriber` **[string][115]** 

Returns **[Promise][118]&lt;{meta: [string][115], expiresAt: [number][116]}>** 

### identifier

Address identifier.

Type: [string][115]

### isClosed

Whether client is closed.

Type: [boolean][117]

### isReady

Whether client is ready (connected to a node).

Type: [boolean][117]

### on

#### Parameters

-   `evt` **[string][115]** 
-   `func` **function (): any** 

**Meta**

-   **deprecated**: please use onConnect, onMessage, etc.


### onConnect

Add event listener function that will be called when client is connected to
node. Multiple listeners will be called sequentially in the order of added.

#### Parameters

-   `func` **[ConnectHandler][122]** 

### onMessage

Add event listener function that will be called when client receives a
message. Multiple listeners will be called sequentially in the order of
added. Can be an async function, in which case each call will wait for
promise to resolve before calling next listener function. If the first
non-null and non-undefined returned value is `Uint8Array` or `string`,
the value will be sent back as reply; if the first non-null and
non-undefined returned value is `false`, no reply or ACK will be sent;
if all handler functions return `null` or `undefined`, an ACK indicating
msg received will be sent back.

#### Parameters

-   `func` **[MessageHandler][123]** 

### publish

Send byte or string data to all subscribers of a topic.

#### Parameters

-   `topic` **[string][115]** 
-   `data` **[MessageData][125]** 
-   `options` **[PublishOptions][126]**  (optional, default `{}`)

Returns **[Promise][118]&lt;null>** A promise that will be resolved with null when send success.

### send

Send byte or string data to a single or an array of destination.

#### Parameters

-   `dest` **[Destination][127]** 
-   `data` **[MessageData][125]** 
-   `options` **[SendOptions][128]** Send options that will override client options. (optional, default `{}`)

Returns **[Promise][118]&lt;[ReplyData][129]>** A promise that will be resolved when reply or ACK from destination is received, or reject if send fail or message timeout. If dest is an array with more than one element, or `options.noReply=true`, the promise will resolve with null as soon as send success.

## Wallet

NKN client that sends data to and receives data from other NKN clients.

### Parameters

-   `options` **[Object][114]** Wallet options.
    -   `options.seed` **[string][115]** Secret seed (64 hex characters). If empty, a random seed will be used. (optional, default `undefined`)
    -   `options.password` **[string][115]** Wallet password.
    -   `options.rpcServerAddr` **[string][115]** Seed RPC server address used to join the network. (optional, default `'https://mainnet-rpc-node-0001.nkn.org/mainnet/api/wallet'`)
    -   `options.iv` **[string][115]** AES iv, typically you should use Wallet.fromJSON instead of this field. (optional, default `undefined`)
    -   `options.masterKey` **[string][115]** AES master key, typically you should use Wallet.fromJSON instead of this field. (optional, default `undefined`)

### address

Wallet address, which is a string starts with 'NKN'.

Type: [string][115]

### createOrUpdateNanoPay

Create or update a NanoPay channel. NanoPay transaction does not have
nonce and will not be sent until you call `sendTransaction` explicitly.

#### Parameters

-   `toAddress` **[string][115]** 
-   `amount` **([number][116] \| [string][115] \| [Amount][131])** 
-   `expiration` **[number][116]** NanoPay expiration height.
-   `id` **[number][116]** NanoPay id, should be unique for (this.address, toAddress) pair.
-   `options` **[TransactionOptions][132]**  (optional, default `{}`)

Returns **[Promise][118]&lt;common.pb.transaction.Transaction>** 

### deleteName

Delete name for this wallet.

#### Parameters

-   `name` **[string][115]** 
-   `options` **[TransactionOptions][132]**  (optional, default `{}`)

Returns **[Promise][118]&lt;[TxnOrHash][133]>** 

### getBalance

Get the balance of a NKN wallet address. If address is not given, will use
the address of this wallet.

#### Parameters

-   `address` **[string][115]?** 

Returns **[Promise][118]&lt;[Amount][131]>** 

### getNonce

Get the next nonce of a NKN wallet address. If address is not given, will use
the address of this wallet.

#### Parameters

-   `address` **[string][115]?** 
-   `options` **[Object][114]** Get nonce options. (optional, default `{}`)
    -   `options.txPool` **[boolean][117]** Whether to consider transactions in txPool. If true, will return the next nonce after last nonce in txPool, otherwise will return the next nonce after last nonce in ledger. (optional, default `true`)

Returns **[Promise][118]&lt;[number][116]>** 

### getPublicKey

Get the public key of the wallet.

Returns **[string][115]** Public key as hex string.

### getSeed

Get the secret seed of the wallet.

Returns **[string][115]** Secret seed as hex string.

### registerName

Register name for this wallet.

#### Parameters

-   `name` **[string][115]** 
-   `options` **[TransactionOptions][132]**  (optional, default `{}`)

Returns **[Promise][118]&lt;[TxnOrHash][133]>** 

### sendTransaction

Send a transaction to RPC server.

#### Parameters

-   `txn` **common.pb.transaction.Transaction** 

Returns **[Promise][118]&lt;[string][115]>** 

### subscribe

Subscribe to a topic with an identifier for a number of blocks. Client
using the same key pair and identifier will be able to receive messages
from this topic.

#### Parameters

-   `topic` **[string][115]** 
-   `duration` **[number][116]** Duration in unit of blocks.
-   `identifier` **[string][115]** Client identifier. (optional, default `''`)
-   `meta` **[string][115]** Metadata of this subscription. (optional, default `''`)
-   `options` **[TransactionOptions][132]**  (optional, default `{}`)

Returns **[Promise][118]&lt;[TxnOrHash][133]>** 

### toJSON

Serialize wallet to JSON string format.

Returns **[string][115]** 

### transferTo

Transfer token from this wallet to another wallet address.

#### Parameters

-   `toAddress` **[string][115]** 
-   `amount` **([number][116] \| [string][115] \| [Amount][131])** 
-   `options` **[TransactionOptions][132]**  (optional, default `{}`)

Returns **[Promise][118]&lt;[TxnOrHash][133]>** 

### unsubscribe

Unsubscribe from a topic for an identifier. Client using the same key pair
and identifier will no longer receive messages from this topic.

#### Parameters

-   `topic` **[string][115]** 
-   `identifier` **[string][115]** Client identifier. (optional, default `''`)
-   `options` **[TransactionOptions][132]**  (optional, default `{}`)

Returns **[Promise][118]&lt;[TxnOrHash][133]>** 

### verifyPassword

Verify whether the password is the correct password of this wallet.

#### Parameters

-   `password` **[string][115]** 

Returns **[boolean][117]** 

### version

Wallet version.

Type: [number][116]

### fromJSON

Recover wallet from JSON string and password.

#### Parameters

-   `walletJson` **([string][115] | WalletJson)** 
-   `password` **[string][115]** 

### getBalance

Get the balance of a NKN wallet address.

#### Parameters

-   `address` **[string][115]** 
-   `options` **{rpcServerAddr: [string][115]}**  (optional, default `{}`)

Returns **[Promise][118]&lt;[Amount][131]>** 

### getNonce

Get the next nonce of a NKN wallet address.

#### Parameters

-   `address` **[string][115]** 
-   `options` **[Object][114]** Get nonce options. (optional, default `{}`)
    -   `options.rpcServerAddr` **[string][115]** RPC server address to query nonce. (optional, default `'https://mainnet-rpc-node-0001.nkn.org/mainnet/api/wallet'`)
    -   `options.txPool` **[boolean][117]** Whether to consider transactions in txPool. If true, will return the next nonce after last nonce in txPool, otherwise will return the next nonce after last nonce in ledger. (optional, default `true`)

Returns **[Promise][118]&lt;[number][116]>** 

### publicKeyToAddress

Convert a NKN public key to NKN wallet address.

#### Parameters

-   `publicKey` **[string][115]** 

Returns **[string][115]** 

### sendTransaction

Send a transaction to RPC server.

#### Parameters

-   `txn` **common.pb.transaction.Transaction** 
-   `options` **[Object][114]** Send transaction options. (optional, default `{}`)
    -   `options.rpcServerAddr` **[string][115]** RPC server address to query nonce. (optional, default `'https://mainnet-rpc-node-0001.nkn.org/mainnet/api/wallet'`)

Returns **[Promise][118]&lt;[string][115]>** 

### verifyAddress

Verify whether an address is a valid NKN wallet address.

#### Parameters

-   `addr` **[string][115]** 

Returns **[boolean][117]** 

## Amount

**Extends Decimal**

Amount of NKN tokens. See documentation at
[decimal.js][134].

## ConnectHandler

Connect handler function type.

Type: function ({addr: [string][115]}): void

## CreateTransactionOptions

Create transaction options type.

Type: {fee: ([number][116] \| [string][115] \| [Amount][131] | null | void), attrs: [string][115]?, buildOnly: [boolean][117]?}

### Properties

-   `fee` **([number][116] \| [string][115])?** Transaction fee.
-   `attrs` **[string][115]?** Transaction attributes, cannot exceed 100 bytes.
-   `buildOnly` **[boolean][117]?** Whether to only build transaction but not send it.

## Destination

One or multiple NKN address type.

Type: ([string][115] \| [Array][121]&lt;[string][115]>)

## DialOptions

Dial session options type.

Type: {dialTimeout: [number][116]?, sessionConfig: {}?}

### Properties

-   `dialTimeout` **[number][116]?** Dial timeout in ms. Zero disables timeout.
-   `sessionConfig` **{}?** 

## Message

Message type.

Type: {src: [string][115], payload: [MessageData][125], payloadType: common.pb.payloads.PayloadType, isEncrypted: [boolean][117], pid: [Uint8Array][130]}

### Properties

-   `src` **[string][115]** 
-   `payload` **[MessageData][125]** 
-   `payloadType` **common.pb.payloads.PayloadType** 
-   `isEncrypted` **[boolean][117]** 
-   `pid` **[Uint8Array][130]** 

## MessageData

Message data type.

Type: ([Uint8Array][130] \| [string][115])

## MessageHandler

Message handler function type.

Type: function ([Message][135]): ([ReplyData][129] \| `false` | void | [Promise][118]&lt;([ReplyData][129] \| `false` | void)>)

## PublishOptions

Publish message options type.

Type: {txPool: [boolean][117]?, encrypt: [boolean][117]?, msgHoldingSeconds: [number][116]?, pid: [Uint8Array][130]?, replyToPid: [Uint8Array][130]?}

### Properties

-   `txPool` **[boolean][117]?** Whether to send message to subscribers whose subscribe transaction is still in txpool. Enabling this will cause subscribers to receive message sooner after sending subscribe transaction, but might affect the correctness of subscribers because transactions in txpool is not guaranteed to be packed into a block.
-   `encrypt` **[boolean][117]?** Whether to end to end encrypt message.
-   `msgHoldingSeconds` **[number][116]?** Maximal message holding time in second. Message might be cached and held by node up to this duration if destination client is not online. Zero disables cache.
-   `pid` **[Uint8Array][130]?** 
-   `replyToPid` **[Uint8Array][130]?** 

## ReplyData

Reply data type, `null` means ACK instead of reply is received.

Type: ([MessageData][125] | null)

## SendOptions

Send message options type.

Type: {responseTimeout: [number][116]?, encrypt: [boolean][117]?, msgHoldingSeconds: [number][116]?, noReply: [boolean][117]?, pid: [Uint8Array][130]?, replyToPid: [Uint8Array][130]?}

### Properties

-   `responseTimeout` **[number][116]?** Message response timeout in ms. Zero disables timeout.
-   `encrypt` **[boolean][117]?** Whether to end to end encrypt message.
-   `msgHoldingSeconds` **[number][116]?** Maximal message holding time in second. Message might be cached and held by node up to this duration if destination client is not online. Zero disables cache.
-   `noReply` **[boolean][117]?** Do not allocate any resources to wait for reply. Returned promise will resolve with null immediately when send success.
-   `pid` **[Uint8Array][130]?** 
-   `replyToPid` **[Uint8Array][130]?** 

## SessionHandler

Accept session handler function type.

Type: function (ncp.Session): void

## TransactionOptions

Transaction options type.

Type: any

### Properties

-   `nonce` **[number][116]?** Transaction nonce, will get from RPC node if not provided.

## TxnOrHash

Transaction hash if `options.buildOnly=false`, otherwise the transaction object.

Type: ([string][115] | common.pb.transaction.Transaction)

[1]: #multiclient

[2]: #parameters

[3]: #addr

[4]: #clients

[5]: #close

[6]: #dial

[7]: #parameters-1

[8]: #getpublickey

[9]: #getseed

[10]: #identifier

[11]: #isclosed

[12]: #isready

[13]: #listen

[14]: #parameters-2

[15]: #on

[16]: #parameters-3

[17]: #onconnect

[18]: #parameters-4

[19]: #onmessage

[20]: #parameters-5

[21]: #onsession

[22]: #parameters-6

[23]: #publish

[24]: #parameters-7

[25]: #readyclientids

[26]: #send

[27]: #parameters-8

[28]: #sendwithclient

[29]: #parameters-9

[30]: #client

[31]: #parameters-10

[32]: #addr-1

[33]: #close-1

[34]: #getpublickey-1

[35]: #getseed-1

[36]: #getsubscribers

[37]: #parameters-11

[38]: #getsubscriberscount

[39]: #parameters-12

[40]: #getsubscription

[41]: #parameters-13

[42]: #identifier-1

[43]: #isclosed-1

[44]: #isready-1

[45]: #on-1

[46]: #parameters-14

[47]: #onconnect-1

[48]: #parameters-15

[49]: #onmessage-1

[50]: #parameters-16

[51]: #publish-1

[52]: #parameters-17

[53]: #send-1

[54]: #parameters-18

[55]: #wallet

[56]: #parameters-19

[57]: #address

[58]: #createorupdatenanopay

[59]: #parameters-20

[60]: #deletename

[61]: #parameters-21

[62]: #getbalance

[63]: #parameters-22

[64]: #getnonce

[65]: #parameters-23

[66]: #getpublickey-2

[67]: #getseed-2

[68]: #registername

[69]: #parameters-24

[70]: #sendtransaction

[71]: #parameters-25

[72]: #subscribe

[73]: #parameters-26

[74]: #tojson

[75]: #transferto

[76]: #parameters-27

[77]: #unsubscribe

[78]: #parameters-28

[79]: #verifypassword

[80]: #parameters-29

[81]: #version

[82]: #fromjson

[83]: #parameters-30

[84]: #getbalance-1

[85]: #parameters-31

[86]: #getnonce-1

[87]: #parameters-32

[88]: #publickeytoaddress

[89]: #parameters-33

[90]: #sendtransaction-1

[91]: #parameters-34

[92]: #verifyaddress

[93]: #parameters-35

[94]: #amount

[95]: #connecthandler

[96]: #createtransactionoptions

[97]: #properties

[98]: #destination

[99]: #dialoptions

[100]: #properties-1

[101]: #message

[102]: #properties-2

[103]: #messagedata

[104]: #messagehandler

[105]: #publishoptions

[106]: #properties-3

[107]: #replydata

[108]: #sendoptions

[109]: #properties-4

[110]: #sessionhandler

[111]: #transactionoptions

[112]: #properties-5

[113]: #txnorhash

[114]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[115]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[116]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[117]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[118]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[119]: #dialoptions

[120]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[121]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[122]: #connecthandler

[123]: #messagehandler

[124]: #sessionhandler

[125]: #messagedata

[126]: #publishoptions

[127]: #destination

[128]: #sendoptions

[129]: #replydata

[130]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

[131]: #amount

[132]: #transactionoptions

[133]: #txnorhash

[134]: https://mikemcl.github.io/decimal.js/

[135]: #message