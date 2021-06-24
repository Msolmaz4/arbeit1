import React from 'react';
import ReactDOM from 'react-dom'
import Card from './components/Card';
import Collapse from'./components/Collapse';
const App = () => {

return(




  
<div className="row">
<div className="card-group w-100">
<div className="col">

<Collapse href='collapseExample1'>
     <Card
     cardTitle="Carf tittle2"
     cardText="lorem Ipsum Text2"
     updatedTime="Last Upta2"

image="https://picsum.photos/id/1/200/300"
/>
</Collapse>

</div>

</div>

</div>

  

);
}


ReactDOM.render(
<App/>,
document.getElementById('root')

);