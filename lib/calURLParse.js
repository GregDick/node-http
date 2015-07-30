module.exports = function (input) {
  var args = input.split('/');
  console.log(args);
  var base = "./" + args[1];

  if(args[2] && isNaN(parseInt(args[2]))){
    return undefined;
  }else if(args[3] && isNaN(parseInt(args[3]))){
    return undefined;
  }

  if(args.length === 2){
    //no arguments
    return base;
  }else if(args.length === 3){
    //one argument
    return base + ' ' + args[2];
  }else if(args.length === 4 && args[2].length < 4){
    //two arguments month first
    return base + ' ' + args[2] + ' ' + args[3];
  }else if(args.length === 4 && args[2].length > 3){
    //two arguments year first
    return base + ' ' + args[3] + ' ' + args[2];
  }


}




