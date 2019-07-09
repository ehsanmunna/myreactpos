import React from 'react';

class Notify extends React.Component{
    state = {
        open: false
    }

    componentDidMount(){
        this.setState({open: true})
    }

    Log(data){
        console.log(data)
    }
    Alert(data){
        alert(data)
        
    }

    
}

export default new Notify();