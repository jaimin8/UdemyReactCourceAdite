import chefImg from './assets/chef.svg'

export default function CoreConcept(props){
  return(<li>
    <img src={chefImg} width="50px" alt="" srcset="" />
     <h2>{props.title}</h2>
     <p>{props.description}</p>
  </li>
  );
}