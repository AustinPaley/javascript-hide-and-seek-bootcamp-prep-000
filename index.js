function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
 const rank = document.querySelectorAll('ul.ranked-list li')
 
 for (let i = 0; i < rank.length; i++){
   rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
 }
}

function deepestChild(){
  var grandnode = document.querySelector('#grand-node')
  var deepestnode = grandnode.children[0]
  
  return grandnode + deepestnode
}