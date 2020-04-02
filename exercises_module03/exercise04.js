/*const buscaUsuario = usuario => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('Usuário não existe');
    });
}
buscaUsuario('diego3g');
*/

class Api {
  static async buscaUsuario(user){
    try{
      const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch (err) {
      console.log('Usuário não existente');
    }
  }
}
Api.buscaUsuario('diego3g');