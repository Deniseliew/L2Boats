import React from 'react';
import { Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const Boats = ({name ,description,icon_name ,poster })=> {
  return (

    <ScrollView>
      <Text>{'\n'}</Text>
      <Text style={{fontWeight: 'bold', fontSize: 30, fontFamily:'Times New Roman',color:'black'}}>
        <Icon name={icon_name} size={30} color="#909090" /> {name}
      </Text>
      <Image source = {poster} style={{width:400,height:350}} />
      <Text>
        {description}
      </Text>
      <Text>{'\n'}</Text>


    </ScrollView>
  );

};



export default Boats;
