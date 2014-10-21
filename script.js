/**
* Codio.io
* Created with yam_jssdk_101.
* User: iogbole
* Date: 2014-10-20
* Time: 09:08 PM
* To change this template use Tools | Templates.
*/

function postMessage() {

       yam.getLoginStatus( function(response) {
            if (response.authResponse) {
              //call the Post function
            yamPostRequest(this);
                
            } else {
              alert("not logged in")
                yam.login( function (response) {
                  if (!response.authResponse) {
                       //call the Post function
                    yamPostRequest(this);
                  }
                });
            }
        });
    }


function yamPostRequest(val)  {
   var msg_value = document.getElementById('msg_body').value;
   var groupID = document.getElementById('group_id').value;
      if(msg_value ==""){
        alert ("Message body cannot be empty!");
        return false;
     }
     
     if(groupID==""){

      var conf = confirm("Group ID is empty, message will be posted to all company")
      if(conf==false) { return false}

     }

yam.platform.request(
   { 
      url: "https://api.yammer.com/api/v1/messages.json"
      , method: "POST"
      , data: {
       "body" :  msg_value
      ,"group_id" : groupID
     }
      , success: function (msg) { alert("Post was Successful!"); }
      , error: function (msg) { alert("Post was Unsuccessful"); }
      }
      )

}
