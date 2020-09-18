a = new Array();
a = [1,2,3,4];
b = a.slice(1,3);
document.write(b);

c = [1,2];
c.push(3);
c.unshift(0);
document.write("합친 배열" + c);
c.pop();
c.shift();
document.write("다시 되돌린 배열" + c);