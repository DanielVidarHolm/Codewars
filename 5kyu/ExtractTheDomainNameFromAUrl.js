// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let firstIndex
    let lastIndex
    
    if (url.slice(0,4) === 'http' || url.slice(0,4) === 'www.'){
      for (let i = 0; i < url.length; i++){
   
        // testing //
        if( url[i] === '/' && url[i + 1] === '/'){
   
          firstIndex = i + 2
          for(let j = i + 2;j < url.length;j++){
   
            if(url[j] === '.'){
              lastIndex = j
              break;
            }
          }
        }
        // testing www.
        if (url[i]+url[i+1]+url[i+2]+url[i+3] === 'www.'){
   
          firstIndex = i + 4
   
          for(let j = i + 4;j < url.length;j++){
   
            if(url[j] === '.'){
             lastIndex = j
             break;
            }
          }     
        }
      
      
     }
     }else{
       firstIndex = 0
          for(let j = 0;j < url.length;j++){
   
            if(url[j] === '.'){
              lastIndex = j
              break;
            }
          }
     }
     
    console.log('firstIndex: '+ firstIndex)
    console.log('lastIndex: '+ lastIndex)
    console.log('sliced url: '+url.slice(firstIndex,lastIndex))
    return url.slice(firstIndex, lastIndex)
   }