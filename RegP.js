str = "I like chocolate"
reg = new RegExp("[a-z]{9}");

mat = str.match(reg);
document.write(mat[0]);
document.write(mat['index']);
document.write(mat['input']);