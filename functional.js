let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLに適した文字列を返す
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}


// URL生成：　命令型バージョン
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}

console.log(imperativeUrls(states));

// URL生成：　関数型バージョン
function functionalUrls(elements) {
    return elements.map(state => urlify(state));
}

console.log(functionalUrls(states));

// URL完成
function urlComplete(states) {
    return states.map(state => {
        let url = urlify(state);
        return `https://example.com/${url}`;
    });
}

console.log(urlComplete(states));

// 1単語の文字列抽出: 命令型バージョン
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if(element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });

    return singles;
}

console.log(imperativeSingles(states));

// 1単語の文字列抽出: 関数型バージョン
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

// Dakota州を返す関数型バージョン(Ver.1)
function functionalDakota(elements) {
    return elements.filter(element => element.includes("Dakota"))
}

console.log(functionalDakota(states));

// Dakota州を返す関数型バージョン(Ver.2)
function functionalDakota2(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2 );
}
console.log(functionalDakota2(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum関数の命令型バージョン
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });

    return total;
}
console.log(imperativeSum(numbers));

// sum関数の関数型バージョン
function functionalSum(elements) {
    return elements.reduce((total,n) => {return total +n;});
}

console.log(functionalSum(numbers));

// length: 命令型バージョン
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element){
        lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativeLengths(states));

// length: 関数型バージョン
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths},{});
}

console.log(functionalLengths(states));

// 全要素の積を返す関数
function functionalProduct(elements) {
    return elements.reduce((product, n) => {
        return product * n;
    },1);
}
console.log(functionalProduct(numbers));