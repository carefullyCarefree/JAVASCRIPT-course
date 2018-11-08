var bill = ['black', 90, false, true, 'harry', 293, 'Elephant'];
for(var i = 0; i < bill.length; i++) {
  if(typeof bill[i] !== 'string') continue;
  console.log(bill[i]);
}
for(var i = 0; i < bill.length; i++) {
  if(typeof bill[i] !== 'string') break;
  console.log(bill[i]);
}
for(var i = bill.length; i >= 0; i--) {
  if(typeof bill[i] !== 'string') continue;
  console.log(bill[i]);
}
