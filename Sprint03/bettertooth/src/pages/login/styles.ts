import { Dimensions,StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'withe',

    },

    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
       

    },

    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        backgroundColor:'white',
        paddingHorizontal:50,
    },

     boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
       backgroundColor:'white',
        alignItems:'center',
        //justifyContent:'center',
    },
   logo:{
       height:Dimensions.get('window').height/10,
       width:Dimensions.get('window').width/2,
       resizeMode:'contain',
       
 
   },
   text1:{
    fontWeight:'bold',
    marginTop:100,
    fontFamily:'Poppins',
    color:'#0066FF',
    fontSize:20,
    textAlign:'center'

   },
   textinput:{
     height:50,
      width:300,
      borderColor:'black',
      borderWidth:1,
      borderRadius:10,
      marginBottom:20,
      paddingHorizontal:10,
      marginTop:20,
      backgroundColor:'white',
      fontFamily:'Poppins',
      fontWeight:'light',
   },
   button:{
    height:50,
    width:250,
    backgroundColor:'#0066FF',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    fontFamily:'Poppins',
    fontWeight:'light',
    color:'white',
    fontSize:18,
 
},
 textBottom:{
      color:'white',
      fontFamily:'Poppins',
      fontWeight:'light',
      fontSize:18,
 },
    textFotter:{
        fontSize:15,
        fontFamily:'Poppins',
        fontWeight:'light',
        color:'gray',
        marginTop:20,
        textAlign:'center'
    },
    colorFotter:{
        color:'#0066FF'
    },



})

