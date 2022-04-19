var CONTRACT_ADDRESS = '0x9801e942F8143887eaD706f9Ed3e0848501F8995';

var referrer = '0x3eAfdeBb1CED16D21b875eF591B45c61a1ad7556'
var upline = '0x3eAfdeBb1CED16D21b875eF591B45c61a1ad7556'


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var refurl = getUrlParameter('ref');

if(refurl){
    localStorage.setItem('ref', refurl);
}

upline = localStorage.getItem('ref') ?   localStorage.getItem('ref') : referrer;

var ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_marketing","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyFish","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateFishBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateFishBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rubies","type":"uint256"}],"name":"calculateFishSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"fishRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyFish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyFishermen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getRubiesSinceLastHarvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"harvestFish","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openMines","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellFish","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

var tokenContract;

var currentAddr;
var contract = null;
var gasPrice = '10000000000' //10000000000
var percent1,percent2,percent3,percent4,percent5,percent6;
var startD, startH, startM, startS;

var BUSDPrice = 0;
var TokenPrice = 0;

var affiliate = 0;




async function Connect() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
            await ethereum.enable()

            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
			console.log(currentAddr)
			runAPP()
            return
        } catch (error) {
            console.error(error)
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)

        let accounts = await web3.eth.getAccounts()
        currentAddr = accounts[0]
        console.log(currentAddr)
        runAPP()
        return
    }
    //setTimeout(checkForBinanceChain, 1500)
}
async function checkForBinanceChain() {
    try {
        await window.BinanceChain.enable()
        console.log(typeof(window.BinanceChain))
        if (window.BinanceChain) {
            console.log('BinanceChain')
            await BinanceChain.enable()
            window.web3 = new Web3(window.BinanceChain)
            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
            
            console.log(contract)
            runAPP()
            return
        }
    } catch (e) {}
}  

async function runAPP(){
    let networkID = await web3.eth.net.getId()
    if (networkID == 56) { // 56 - BSC Live. 97 -- BSC Test
		contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
		console.log(contract)
    } 
}

    setInterval(() => {				
        if(contract){
			$("#refString").val('https://' + window.location.host  + '/?ref=' + currentAddr)
			
        } 
    }, 3000);
        
    setInterval(() => {
        if(contract){
            web3.eth.getAccounts().then(res=>{
                currentAddr = res[0]
            })
    
            var connectedAddr = currentAddr[0] + 
                                currentAddr[1] + 
                                currentAddr[2] + 
                                currentAddr[3] + 
                                currentAddr[4] + '...' +
                                currentAddr[currentAddr.length-5] + 
                                currentAddr[currentAddr.length-4] + 
                                currentAddr[currentAddr.length-3] + 
                                currentAddr[currentAddr.length-2] + 
                                currentAddr[currentAddr.length-1]

            $("#connect-btn1").text(connectedAddr)

            getContractBalance();
            web3.eth.getBalance(currentAddr).then(bal => {
                bal = web3.utils.fromWei(bal);
                bal = (Math.round(bal * 100) / 100).toFixed(2);
                $("#walletBalance").text(bal + " BNB")
            })
            getFishermen(currentAddr)
            getRewards(currentAddr)
		}
        
    }, 3000);



function approve() {
	tokenContract.methods.approve(CONTRACT_ADDRESS, web3.utils.toWei("1")).send({ from: currentAddr });
}

function stakeBNB() {
if (contract) {
	var amount = document.getElementById("app__inputbnb").value;
    amount = web3.utils.toWei(String(amount), 'ether')

	contract.methods.buyFish(upline/*, (trxspenddoc.value*1e9)*/)
		.send({
						value: amount,
						from: currentAddr,
						gasPrice: gasPrice,
					})
			
	}
}

function sellFish() {
if (contract) {
	contract.methods.sellFish()
		.send({
						// value: amount,
						from: currentAddr,
						gasPrice: gasPrice,
					})
			
	}
}

function compound() {
if (contract) {
	contract.methods.harvestFish(upline)
		.send({
						// value: amount,
						from: currentAddr,
						gasPrice: gasPrice,
					})
			
	}
}

function getContractBalance() {
	contract.methods.getBalance().call().then(res=>{
        res = web3.utils.fromWei(res);
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#contractBalance").text(res + " BNB");
        console.log(res);
    })

}

function getFishermen(currentAddr) {
    contract.methods.getMyFishermen(currentAddr).call().then(res=>{
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#yourFishermen").text(res + " FISHERMEN");
        console.log(res);
    })
}

function getRewards(currentAddr) {
    contract.methods.fishRewards(currentAddr).call().then(res=>{
        res = web3.utils.fromWei(res);
        //res = (Math.round(res * 100) / 100).toFixed(5);
        $("#yourRewards").text(res + " BNB");
        console.log(res);
    })
}


function calcuate(number)
{
	console.log(number);
	 if (number && number >= 0) 
		contract.methods.calculatePrinterBuySimple((number*1e7 ).toString()).call().then(res=>{
		console.log((res/1e7))	;
		})
																						   
}

function spendLimit(callback) {
	tokenContract.methods.allowance(currentAddr,contract).call().then(result => {
			callback(web3.utils.fromWei(result));
		}).catch((err) => {
			console.log(err)
		});
	}

function calculateprinter(anzahl) {
	tokenContract.methods.allowance(currentAddr,contract).call().then(result => {
			callback(web3.utils.fromWei(result));
		}).catch((err) => {
			console.log(err)
		});
	}

function userBalance(callback){
	tokenContract.methods.balanceOf(currentAddr).call().then(result => {
				var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
		callback(amt);
				usrBal=amt;
	}).catch((err) => {
		console.log(err)
	});
}
	

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
    showAlert('Successfuly copied','success')
}

/*$.getJSON( "https://api.pancakeswap.info/api/v2/tokens/0xc8AE7ded8b33ea0Da0d7c7FC6FEd35e3C1822be0", function( data ) {
   $("#tpg-price").text((data["data"]["price"]*100).toFixed(3));
	console.log(data["data"]["price"]);
});*/