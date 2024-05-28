export const abi = [
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_usdtToken",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_usdcToken",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_wbtcToken",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_daiToken",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_wethToken",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "target",
              "type": "address"
          }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "AddressInsufficientBalance",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "EmptyArgs",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "EmptySource",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "FailedInnerCall",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "NoInlineSecrets",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "OnlyRouterCanFulfill",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
          }
      ],
      "name": "UnexpectedRequestID",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "string",
              "name": "propertyNumber",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bonusAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
          }
      ],
      "name": "BonusInfoCreated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "string",
              "name": "propertyNumber",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "meetSalesCondition",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "postDeadlineCheck",
              "type": "uint256"
          }
      ],
      "name": "BonusInfoUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "answer",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "updatedAt",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint8",
              "name": "decimals",
              "type": "uint8"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "DecodedResponse",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "string",
              "name": "propertyNumber",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bonusAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
          }
      ],
      "name": "FundsWithdrawn",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferRequested",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
          }
      ],
      "name": "RequestFulfilled",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
          }
      ],
      "name": "RequestSent",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "response",
              "type": "bytes"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "err",
              "type": "bytes"
          }
      ],
      "name": "Response",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "name": "bonusInfo",
      "outputs": [
          {
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "bonusAmount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "sellByDate",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "atCondition",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "minRequestDays",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "atPrice",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "meetSalesCondition",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "postDeadlineCheck",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "fundsWithdrawn",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "propertyNumber",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "startDateInUnixSeconds",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "sellByDateInUnixSeconds",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "atCondition",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "minRequestDays",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "atPrice",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "bonusAmount",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          }
      ],
      "name": "createBonusInfo",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "daiToken",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
          },
          {
              "internalType": "bytes",
              "name": "response",
              "type": "bytes"
          },
          {
              "internalType": "bytes",
              "name": "err",
              "type": "bytes"
          }
      ],
      "name": "handleOracleFulfillment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "propertyAddress",
              "type": "string"
          }
      ],
      "name": "payments",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_lastError",
      "outputs": [
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_lastRequestId",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_lastResponse",
      "outputs": [
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_meetSalesCondition",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_postDeadlineCheck",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_propertyNumber",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_receiver",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_sender",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "s_totalCarbonGas",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
          },
          {
              "internalType": "string[]",
              "name": "args",
              "type": "string[]"
          }
      ],
      "name": "sendRequest",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "usdcToken",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "usdtToken",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "wbtcToken",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "wethToken",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "Sender",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "Receiver",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "propertyNumber",
              "type": "string"
          }
      ],
      "name": "withdrawFundsReceiver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "Sender",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "Receiver",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "propertyNumber",
              "type": "string"
          }
      ],
      "name": "withdrawFundsSender",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "stateMutability": "payable",
      "type": "receive"
  }
]