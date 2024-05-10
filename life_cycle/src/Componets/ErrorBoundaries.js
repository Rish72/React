import { Component } from "react";


export default class ErrorBoundaries extends Component{

    constructor(){
        super();
        this.state = {
            hasError : false,
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error, info){

    }

    render() {
        if(this.state.hasError){
           return <h1>Something went wrong Contact Admin</h1>
        }
        return this.props.children;
    }

}