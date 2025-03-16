import { Dimensions,StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textinput:{
        height:50,
         width:300,
         borderColor:'black',
         borderWidth:1,
         borderRadius:8,
         marginBottom:20,
         paddingHorizontal:10,
         marginTop:20,
         backgroundColor:'white',
         fontFamily:'Poppins',
         fontWeight:'light',
      },

      boxInput:{
        width:'100%',
        height:50,
        borderWidth:1,
        marginTop:150,
        flexDirection:'row',
        borderRadius:8,
        alignItems:'center',
        paddingHorizontal:10,
      },
      input:{
        width:'90%',
        height:'100%',
        borderRadius:8,
        
      },
      
        icon:{
            marginRight:10,
            color:'gray'
        },
})