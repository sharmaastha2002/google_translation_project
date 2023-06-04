import React, { useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  
  Image,
  
  Input,
  Select,
} from '@chakra-ui/react'
import axios from 'axios';

import img from '../assestes/img1.webp'



const Translate = () => {
const [inputText,setInputText] = useState('');
const [resultText,setResultText] = useState('');
const [languageList,setLanguageList] = useState([]);

const  [selectedLanguageKey,setLanguageKey]=useState('');
const  [detectLanguageKey,setdetectedLanguageKey]=useState('');

const getLanguageSource = () => {

  axios.post(`https://libretranslate.de/detect`, {
    q: inputText
  })
  .then((response) => {
    setdetectedLanguageKey(response.data[0].language)
  })

}

const translatedText = () => {

  setResultText(inputText)

  getLanguageSource();

 let data = {
  q:inputText,
  source: detectLanguageKey,
  target: selectedLanguageKey

}

 axios.post(`https://libretranslate.de/translate`,data) 
 .then((response) => {
  setResultText(response.data.translatedText)

 })

  
}

const languagekey = (selectedLanguage) => {
  setLanguageKey(selectedLanguage.target.value)
}





useEffect(() => {
 
axios.get(`https://libretranslate.de/languages`)
.then((response) =>{
  setLanguageList(response.data)

} )

getLanguageSource()
 
}, [inputText])


  return (

<div  >
  <FormControl>
  
  <Select h={["10vh","8vh"]} w={["70%","40%"]}  marginTop={["10%","4%"]} marginLeft={["10%","10%"]} placeholder='Select Languages' onChange={languagekey}>
   {languageList.map((language) => {
    return(
     <option value={language.code} >{language.name}</option>
    )

   })}

   
  </Select>
</FormControl>

 
  <Input h={["10vh","10vh"]} w={["70%","40%"]} boxShadow={"dark-lg"}  marginTop={["10%","6%"]} marginLeft={["10%","10%"]} overflowY={"auto"} placeholder='Type Text to Translate'  onChange={(e) => setInputText(e.target.value)} />
 
  <Input h={["10vh","10vh"]} w={["70%","40%"]} boxShadow={"dark-lg"}  marginTop={["10%","6%"]} marginLeft={["10%","7%"]} placeholder=' your result Translate'  value={resultText}/>
 <Button justifyContent={"center"} alignContent={"center"} margin={["6%","4%"]} boxShadow={"dark-lg"} borderColor={"black"} w={["40%","10%"]} h={["7vh","7vh"]} marginLeft={["20%","50%"]} onClick={translatedText} css={{
      "&:hover":{
        transform:"scale(0.9)",
        backgroundColor:"blue"
        
      }
    }} >
  
  Translate</Button>


  <Image objectFit={"contain"} h={["30vh","30vh"]} justifyContent={"center"} alignItems={"center"} src={img} marginLeft={["20%","50%"]} />
</div>
  )
  
  
}

export default Translate