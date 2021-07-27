
export default function Test2()
{ 

  var arr= [
 
    { name:'Trade ID:', field:'123456789' },
    { name:'Trade Type', field :'FX' },
    { name:'Trade Date', field :'01/01/01' },
    { name:'Trade abc', field :'01/01/01' },
    { name:'Trade efg', field :'01/01/01' },
    { name:'Trade xyz', field :'01/01/01' }

  ]

 return (<div> 

<p>  <b>Trade Summary </b> </p>

<div class="mybox"> 

  <div class="box1"> 
    
  <ul> 

    <li><a href="default.asp">Trade Details</a></li>
    <li><a href="news.asp">Audit</a></li>
   
  </ul>


    < table class="table table-striped" > 
       
        <tbody>

        {
          arr.map ((obj)=> 
           
          <tr><td>{obj.name}</td><td>{obj.field}</td></tr>
          
          
          )  
        }


          {/* <tr>
            <th scope="row"></th>
            <td>Trade ID:</td>
            <td>123456789</td>
           
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Trade Type</td>
            <td>FX</td>
           
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Trade Date:</td>
            <td>01/01/01</td>
           
          </tr> */}
        </tbody>
    
      </table>
 
</div>  




</div>


         </div>) ;
}





