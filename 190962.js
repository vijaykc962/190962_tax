let a=25005000;
function netincome(a){
let x=0;
if(250000<a && a<500000){x=5}
if(500000<a && a<750000){x=10}
if(750000<a && a<1000000){x=15}
if(1000000<a && a<1250000){x=20}
if(1250000<a && a<1500000){x=25}
if(1500000<a){x=30}

let ans=a-(a*x)/100;
return ans}

console.log(netincome(a));