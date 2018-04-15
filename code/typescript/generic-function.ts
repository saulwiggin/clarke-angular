
function reverse<T>( a:T[], debug?:boolean ) {

    let r = a.concat().reverse();

    debug ? console.log(r) : null;
    return r;
}

reverse( [4,5,6,7,8],true );
reverse( "Angular",true );

// function reverse( a:any, debug?:boolean ) {
//
//     let r = a.concat().reverse();
//
//     debug ? console.log(r) : null;
//     return r;
// }
//
// reverse( [4,5,6,7,8],true );
// reverse( "Angular",true );
