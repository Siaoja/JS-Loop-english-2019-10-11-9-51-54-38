for(let i = 1; i<=9; i++){
    let row = '';
    for(let j = 1; j <=i; j++){
        row += i + '*' + j + '=' + (i*j) + ' ';
    }
    console.log(row);
}