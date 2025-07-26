function minCoinsToMakeAmount(coins, amount){
    const dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;

    for(let i=0;i<=amount;i++){
        for(let coin of coins){
            if(i-coin>=0){
                dp[i]=Math.min(dp[i],dp[i-coin]+1);
            }
        }
    }




    return dp[amount]===Infinity?-1:dp[amount];
    }
console.log(minCoinsToMakeAmount(3,[1,2,5],6));
