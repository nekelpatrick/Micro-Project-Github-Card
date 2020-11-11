import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Card } from "antd";

function App() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    console.log("clicou.");
    axios.get(`https://api.github.com/users/nekelpatrick`).then((res) => {
      setUser(res.data);
      setActive(!active);
      console.log(user);
      console.log(active);
    });
  };

  return (
    <div className="App">
      <div className="div-container">
        {/* logo abaixo: se o state ACTIVE for falso a página ainda mostra o botão.
        se for TRUE, ele mostra os dados solicitados. */}
        <div className="card-header">Git Card</div>
        {active === false ? (
          <button className="show-card" onClick={handleToggle}>
            Mostrar Cartão
          </button>
        ) : (
          <>
            <Card className="user-div" title={user.name} style={{ width: 300 }}>
              <p>Usuario GitHub: {user.login}</p>
              <p>Bio: {user.bio}</p>
              <p>Local: {user.location} </p>
              <p>
                {" "}
                <img className="avatar" src={user.avatar_url} alt="" />
              </p>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

// <div className="user-div">
//   <ul>
//     <li>Nome: {user.name}</li>
//     <li>Usuario GitHub: {user.login}</li>
//     <li>Bio: {user.bio} </li>
//     <li>Local: {user.location} </li>
//     <li> </li>
//     <img className="avatar" src={user.avatar_url} alt="" />
//   </ul>
// </div>

// condition ? doThisIfTrue : doThisIfFalse

/* Use renderização condicional para exibir as informações do usuário Github a partir do estado quando o botão for clicado
Rederize Especificamente:
A imagem do seu perfil usando avatar_url
Seu nome
Pelo menos 2 outras informações do usuário Github.
Certifique-se de que, ao ser clicado, o botão alterna entre exibir e ocultar as informações do usuário.
dica: é aqui que o active === true pode ser útil
 */

/* 


  const { characterList, nextUrl } = characterAPI;

  const getCharacters = () => {
    if (nextUrl) {
      axios.get(nextUrl).then((body) => {
        console.log(body);
        console.log(characterList);
        setCharacterAPI({
          characterList: [...characterList, ...body.data.results],
          nextUrl: body.data.next, // se não houver próxima página, o next será null
        });
      });
    }
  };

  useEffect(getCharacters, [nextUrl, characterList]);

  return (
    <div>
      Page one
      {characterList.map((character, index) => (
        <div className="card">
          {character.name} <img src={character.image} />{" "}
        </div>
      ))}
    </div>


*/
