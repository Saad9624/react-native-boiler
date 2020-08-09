import React from 'react'
import {
    View,
    Text
} from 'react-native' ;

class Details extends React.Component{

    componentDidMount(){
        const { itemId } =this.props.route.params;
        console.log("itemId" , itemId );

        this.fetchPostReq(itemId)
    }


    fetchPostReq = (id) =>{
        const URL = 'https://jsonplaceholder.typicode.com/posts' ;
        fetch(URL ,{
            method :'POST' ,
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: id
            })
        })

        .then(response => response.json())
        .then(json => console.log(json))
    }

    render(){
        return(
            <View>
                <Text>Details</Text>
            </View>
        )
    }
}

export default Details ;
