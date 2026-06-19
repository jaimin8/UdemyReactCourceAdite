
const mynamearr = ["jaimin","om","karan"];
function randomname(max){
  return Math.floor(Math.random() * (max+1));
}

export default function MyHeader(){
  return(
    <header>
      <h1>{mynamearr[randomname(2)]}'s page</h1>
      
      </header>
  );
}