import React from 'react';

class Collapse extends React.Component{
constructor(){

super();
this.state={

    schowContent:"test cont"
}


}



render(){


    return (
        <div>
            
                <button className="btn btn-primary w-100" onClick={this.showMore} >

                    {this.props.children.props.cardTitle}
            
                </button>
            
            <div class="collapse show" id={this.props.href}>
                {this.props.children}
                {this.state.schowContent}
            </div>






        </div>

    );
};
};

export default Collapse;