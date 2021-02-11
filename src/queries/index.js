export const requestDemo = `query requestDemo($message: String, $phone: String, $email: String!, $first_name: String,$user_type: String, $last_name: String){
  requestDemo(message: $message, email: $email, phone: $phone, first_name: $first_name,last_name: $last_name,user_type: $user_type ){
   success
  }
}`;
