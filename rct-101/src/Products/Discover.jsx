import {useState} from "react";
import axios from "axios"
import { useEffect } from "react";
import { Flex, Heading} from "@chakra-ui/react";
import Product from "./DiscoverList";

const getProduct=()=>{
   return axios.get(`https://comfortable-tree-postbox.glitch.me/discover?_limit=4`)
}
function Discover(){

    const [data,setData] = useState([])
    const [page,setPage] = useState(1)

    useEffect(()=>{
        getProduct(page).then((res)=> console.log(setData(res.data)))
    },[page])
    
    return(
        <>
        <Heading as={"h2"} mt={8} ml={"500px"}>--------DISCOVER MORE--------</Heading>
        <div>
            <Flex>
                {data.map((el)=>
                <div>
                    <Product key={el.id}
                    imageSrc={el.url}
                    title={el.title}
                    qty={el.qty}
                    mrp={el.mrp}/>
                </div>)}
            </Flex>
        </div>
        
        </>
    )
}

export default Discover;